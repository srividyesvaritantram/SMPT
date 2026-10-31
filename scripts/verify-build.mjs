/**
 * Production build guard.
 *
 * Fails the build if Vite's development-only React Fast Refresh runtime,
 * HMR hooks, or raw source entrypoints end up in dist/. This prevents the
 * "$RefreshReg$ is not defined" blank-screen regression from ever being
 * deployed again.
 *
 * Runs automatically via the npm "postbuild" script.
 */
import { readdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const DIST = path.resolve('dist')
const TEXT_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.css', '.html'])

const FORBIDDEN = [
  { pattern: '$RefreshReg$', label: 'React Refresh register hook' },
  { pattern: '$RefreshSig$', label: 'React Refresh signature hook' },
  { pattern: 'RefreshRuntime', label: 'React Refresh runtime' },
  { pattern: '@react-refresh', label: 'React Refresh module import' },
  { pattern: 'react-refresh/runtime', label: 'React Refresh runtime import' },
  { pattern: '/src/main.jsx', label: 'raw Vite dev entrypoint' },
  { pattern: '/@vite/client', label: 'Vite dev client' },
  { pattern: 'import.meta.hot', label: 'Vite HMR hook' },
]

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

if (!existsSync(DIST)) {
  console.error('[verify-build] FAIL: dist/ does not exist. Run `npm run build` first.')
  process.exit(1)
}

const files = await walk(DIST)
const problems = []

for (const file of files) {
  if (!TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())) continue
  const contents = await readFile(file, 'utf8')
  for (const { pattern, label } of FORBIDDEN) {
    if (contents.includes(pattern)) {
      problems.push(`${path.relative(DIST, file)} contains ${label} (${pattern})`)
    }
  }
}

const indexHtmlPath = path.join(DIST, 'index.html')
if (!existsSync(indexHtmlPath)) {
  problems.push('dist/index.html is missing')
} else {
  const html = await readFile(indexHtmlPath, 'utf8')
  if (!/<script[^>]+type="module"[^>]+src="\/assets\/[^"]+\.js"/.test(html)) {
    problems.push('dist/index.html does not reference a hashed production JS bundle')
  }
  if (html.includes('/src/')) {
    problems.push('dist/index.html references raw /src/ files')
  }
}

const jsFiles = files.filter((file) => file.endsWith('.js'))
if (jsFiles.length === 0) {
  problems.push('dist/ contains no JavaScript bundles')
}

if (problems.length > 0) {
  console.error('[verify-build] FAIL: development artifacts found in production output:')
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}

console.log(
  `[verify-build] OK: ${jsFiles.length} production JS bundle(s), no React Refresh/HMR/source references.`,
)
