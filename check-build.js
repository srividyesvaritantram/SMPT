import fs from 'node:fs';
const dir = 'dist/assets';
const jsName = fs.readdirSync(dir).find((f) => /^index-.*\.js$/.test(f));
const cssName = fs.readdirSync(dir).find((f) => /^index-.*\.css$/.test(f));
const js = fs.readFileSync(dir + '/' + jsName, 'utf8');
const css = fs.readFileSync(dir + '/' + cssName, 'utf8');
const terms = [
  'smld-hero',
  'smld-article',
  'sml-about__preview',
  'shravana-maha-lakshmi',
  'Svayam-Bh\u016B',
  'MAH\u0100 LAK\u1E62M\u012A',
  'S\u0100DHANA VIDHI',
  'Sarvama\u1E45galam\u0101\u1E45galye',
  '\u1E62o\u1E0Da\u015Ba',
  'Dhana V\u1E5Bddhi',
  'worthy of keeping it',
  '18 July 2026',
];
for (const t of terms) {
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const count = (js.match(new RegExp(escaped, 'g')) || []).length + (css.match(new RegExp(escaped, 'g')) || []).length;
  console.log(t + ':', count);
}
