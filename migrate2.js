const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'app/page.tsx',
  'app/globals.css',
  ...fs.readdirSync('app/components').filter(f => f.endsWith('.tsx')).map(f => 'app/components/' + f)
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace text-white with text-[#111827]
    content = content.replace(/text-white/g, 'text-[#111827]');
    
    // Fix buttons
    content = content.replace(/bg-\\[#0066FF\\] text-\\[#111827\\]/g, 'bg-[#0066FF] text-white');
    content = content.replace(/bg-\\[#10B981\\] text-\\[#111827\\]/g, 'bg-[#10B981] text-white');
    
    // Also fix the active state of features and tabs
    // In pricing, totem, records, we might have active states where bg is blue.
    content = content.replace(/activeTab === feat.id \? "text-\\[#111827\\]"/g, 'activeTab === feat.id ? "text-white"');
    content = content.replace(/activeFeature === feat.id \? "text-\\[#111827\\]"/g, 'activeFeature === feat.id ? "text-white"');
    content = content.replace(/activeFeature === feat.id \? "bg-\\[#0066FF\\] text-\\[#111827\\]"/g, 'activeFeature === feat.id ? "bg-[#0066FF] text-white"');
    
    // Globals.css base styles
    if (file === 'app/globals.css') {
      content = content.replace(/background: #050505;/g, 'background: #FAFAFA;');
      content = content.replace(/color: white;/g, 'color: #111827;');
      content = content.replace(/background: #050505;/g, 'background: #FAFAFA;');
      // Revert text-white if any CSS class
    }

    fs.writeFileSync(filePath, content);
    console.log('Processed text colors', file);
  }
}
