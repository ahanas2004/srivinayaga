const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(process.cwd(), 'src', 'app'),
  path.join(process.cwd(), 'src', 'components')
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
}

const files = dirs.flatMap(dir => {
    if (fs.existsSync(dir)) {
        return getAllFiles(dir);
    }
    return [];
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Replace font-serif with font-sans font-bold
  content = content.replace(/font-serif/g, 'font-sans font-bold');

  // 2. Replace italic with "" (including Tailwind variants and uppercase)
  // This matches italic, not-italic, hover:italic, placeholder:italic, etc.
  // Also matches the word "italic" in text.
  content = content.replace(/\b[a-zA-Z0-9:-]*italic\b/gi, '');

  // 3. Maisons -> Manufacturers
  content = content.replace(/Maisons/g, 'Manufacturers');
  content = content.replace(/MAISONS/g, 'MANUFACTURERS');
  content = content.replace(/maisons/g, 'manufacturers');
  
  // Maison -> Manufacturer
  content = content.replace(/Maison/g, 'Manufacturer');
  content = content.replace(/MAISON/g, 'MANUFACTURER');
  content = content.replace(/maison/g, 'manufacturer');

  // 4. Atelier -> Laboratory
  content = content.replace(/Atelier/g, 'Laboratory');
  content = content.replace(/ATELIER/g, 'LABORATORY');
  content = content.replace(/atelier/g, 'laboratory');

  // Clean up double spaces and spaces around quotes in classNames
  // First, handle general double spaces
  content = content.replace(/  +/g, ' ');
  
  // More surgical cleanup for classNames to avoid leaving trailing/leading spaces
  content = content.replace(/className="([^"]*)"/g, (match, p1) => {
      let cleaned = p1.split(/\s+/).filter(c => c !== '').join(' ');
      return `className="${cleaned}"`;
  });
  
  // Clean up potential trailing spaces before other attributes or tags
  content = content.replace(/ >/g, '>');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated: ${file}`);
  }
});
