const fs = require('fs');
const path = require('path');

const filesToProcess = [
  ...fs.readdirSync('app/components').filter(f => f.endsWith('.tsx')).map(f => 'app/components/' + f)
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix hover states that were still dark
    content = content.split('hover:bg-[#1A1A24]').join('hover:bg-[#F3F4F6]');
    content = content.split('hover:bg-white/40').join('hover:bg-[#F3F4F6]/50'); // Since background is white, white/40 doesn't show hover. We need gray.
    
    // In whatsapp.tsx, if active, the background is bg-white. So text should be #111827 or #0066FF, NOT white!
    content = content.split('activeFeature === feat.id ? "text-white" :').join('activeFeature === feat.id ? "text-[#111827]" :');
    
    // Check totem.tsx for activeFeature background.
    // In totem.tsx: 
    // ctiveFeature === feat.id ? "bg-[#0066FF] text-white" : "bg-transparent text-[#4B5563] hover:bg-white/10"
    // Wait, hover:bg-white/10 is invisible on white background.
    content = content.split('hover:bg-white/10').join('hover:bg-[#F3F4F6]');
    content = content.split('hover:bg-black/10').join('hover:bg-[#F3F4F6]'); // Because my previous script changed white/10 to black/10 which is fine, but F3F4F6 is better.

    // Let's also ensure button texts are readable.
    // If we have bg-white, text MUST be black/gray.
    // My previous script made ALL bg-[#0066FF] buttons text-white. That's perfect.
    // What about bg-[#111827] buttons? (The ones that used to be bg-white text-black). They should be text-white!
    content = content.split('bg-[#111827] text-[#111827]').join('bg-[#111827] text-white');

    fs.writeFileSync(filePath, content);
    console.log('Fixed edge cases in', file);
  }
}
