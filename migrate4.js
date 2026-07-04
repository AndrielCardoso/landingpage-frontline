const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'app/globals.css');
if (fs.existsSync(globalsPath)) {
  let content = fs.readFileSync(globalsPath, 'utf8');
  
  content = content.replace(/--color-background: #0A0A0F;/g, '--color-background: #FAFAFA;');
  content = content.replace(/--color-surface: #141419;/g, '--color-surface: #FFFFFF;');
  content = content.replace(/--color-surface-elevated: #1C1C24;/g, '--color-surface-elevated: #F4F4F5;');
  content = content.replace(/--color-foreground: #EDEDED;/g, '--color-foreground: #111827;');
  content = content.replace(/--color-muted: #9CA3AF;/g, '--color-muted: #4B5563;');
  content = content.replace(/--color-border: #262630;/g, '--color-border: #E5E7EB;');
  
  fs.writeFileSync(globalsPath, content);
  console.log('Processed globals.css CSS Variables');
}
