const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'app/page.tsx',
  'app/globals.css',
  ...fs.readdirSync('app/components').filter(f => f.endsWith('.tsx')).map(f => 'app/components/' + f)
];

const replacements = [
  { search: /bg-\\[#050505\\]/g, replace: 'bg-[#FAFAFA]' },
  { search: /bg-\\[#141419\\]/g, replace: 'bg-white' },
  { search: /bg-\\[#0A0A0F\\]/g, replace: 'bg-[#F4F4F5]' },
  { search: /border-\\[#141419\\]/g, replace: 'border-[#E5E7EB]' },
  { search: /border-\\[#262630\\]/g, replace: 'border-[#E5E7EB]' },
  { search: /text-\\[#9CA3AF\\]/g, replace: 'text-[#4B5563]' },
  { search: /text-\\[#EDEDED\\]/g, replace: 'text-[#374151]' },
  { search: /via-\\[#262630\\]/g, replace: 'via-[#E5E7EB]' },
  { search: /from-\\[#141419\\]/g, replace: 'from-white' },
  { search: /to-\\[#0A0A0F\\]/g, replace: 'to-[#F4F4F5]' },
  { search: /bg-white\/5/g, replace: 'bg-black/5' },
  { search: /bg-white\/10/g, replace: 'bg-black/10' },
  { search: /border-white\/10/g, replace: 'border-black/10' },
  { search: /bg-white\/20/g, replace: 'bg-black/20' }
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const {search, replace} of replacements) {
      content = content.replace(search, replace);
    }
    fs.writeFileSync(filePath, content);
    console.log('Processed', file);
  }
}
