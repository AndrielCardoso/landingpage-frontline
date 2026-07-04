const fs = require('fs');
const path = require('path');

const filesToProcess = [
  ...fs.readdirSync('app/components').filter(f => f.endsWith('.tsx')).map(f => 'app/components/' + f)
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace bg-white text-black with bg-[#111827] text-white for primary light buttons which are now on light bg
    content = content.replace(/bg-white text-black/g, 'bg-[#111827] text-white');
    
    // And for any other bg-white text-[#111827] (since text-black might have been replaced to text-[#111827]) 
    // Wait, previously they were 'bg-white text-black'. My regex 2 didn't touch text-black. 
    
    // Let's also check for active states in tabs that might have been missed.
    // For example in records.tsx
    // activeTab === feat.id ? "bg-[#0066FF] text-[#111827] shadow-[0_0_20px_rgba(0,102,255,0.4)]"
    content = content.replace(/bg-\\[#0066FF\\] text-\\[#111827\\] shadow/g, 'bg-[#0066FF] text-white shadow');
    content = content.replace(/bg-\\[#0066FF\\] text-\\[#111827\\]/g, 'bg-[#0066FF] text-white');

    fs.writeFileSync(filePath, content);
  }
}
