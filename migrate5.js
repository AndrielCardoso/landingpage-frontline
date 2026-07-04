const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'app/page.tsx',
  'app/globals.css',
  ...fs.readdirSync('app/components').filter(f => f.endsWith('.tsx')).map(f => 'app/components/' + f)
];

const replacements = [
  { search: /bg-\\[#050505\\]/g, replace: 'bg-[#FAFAFA]' }, // wait, in JS regex literal, /bg-\\[.../ means matching backslash. 
  // Let's use simple string replaceAll to avoid any regex escaping issues.
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Safest way: split and join
    content = content.split('bg-[#050505]').join('bg-[#FAFAFA]');
    content = content.split('bg-[#141419]').join('bg-white');
    content = content.split('bg-[#0A0A0F]').join('bg-[#F4F4F5]');
    content = content.split('border-[#141419]').join('border-[#E5E7EB]');
    content = content.split('border-[#262630]').join('border-[#E5E7EB]');
    content = content.split('text-[#9CA3AF]').join('text-[#4B5563]');
    content = content.split('text-[#EDEDED]').join('text-[#374151]');
    content = content.split('via-[#262630]').join('via-[#E5E7EB]');
    content = content.split('from-[#141419]').join('from-white');
    content = content.split('to-[#0A0A0F]').join('to-[#F4F4F5]');
    content = content.split('bg-white/5').join('bg-black/5');
    content = content.split('bg-white/10').join('bg-black/10');
    content = content.split('border-white/10').join('border-black/10');
    content = content.split('bg-white/20').join('bg-black/20');

    // Fix button text colors (they are currently text-[#111827] but should be text-white)
    content = content.split('bg-[#0066FF] text-[#111827]').join('bg-[#0066FF] text-white');
    content = content.split('bg-[#10B981] text-[#111827]').join('bg-[#10B981] text-white');
    
    // Active states in records.tsx and others
    content = content.split('activeTab === feat.id ? "text-[#111827]"').join('activeTab === feat.id ? "text-white"');
    content = content.split('activeFeature === feat.id ? "text-[#111827]"').join('activeFeature === feat.id ? "text-white"');
    
    // Text that is now hard to read because they were hardcoded with dark blue or something? 
    // Wait, the screenshot shows "Auditoria de Receitas via Foto" in dark blue! Why?
    // Let's also fix text-[#0066FF] inside buttons if there are any.
    // Let's just fix the big problems first.

    fs.writeFileSync(filePath, content);
    console.log('Processed', file);
  }
}
