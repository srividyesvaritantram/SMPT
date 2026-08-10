const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const m = html.match(/src="\/assets\/index-(.*?)\.js"/);
console.log('JS hash:', m ? m[1] : 'none');
const m2 = html.match(/href="\/assets\/index-(.*?)\.css"/);
console.log('CSS hash:', m2 ? m2[1] : 'none');
