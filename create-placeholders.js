const fs = require('fs');
const path = require('path');

// List of all image files referenced in the code
const imageFiles = [
  'hero/thindown-hero.jpg',
  'applications/outdoor-apparel.jpg',
  'applications/fashion-lifestyle.jpg', 
  'applications/footwear.jpg',
  'applications/accessories.jpg',
  'applications/military.jpg',
  'applications/home-textiles.jpg',
  'facility/ny-manufacturing.jpg',
  'military/military-hero.jpg',
  'military/cold-weather-gear.jpg',
  'military/tactical-equipment.jpg',
  'military/specialized-gear.jpg',
  'technology/fabric-microscope.jpg',
  'technology/down-clusters.jpg',
  'technology/fabric-structure.jpg',
  'technology/thermal-image.jpg',
  'technology/manufacturing.jpg',
  'products/thindown-classic.jpg',
  'products/thindown-recycled.jpg',
  'products/thindown-active.jpg',
  'products/thindown-flex.jpg',
  'products/thindown-military.jpg',
  'products/thindown-home.jpg',
  'samples/sample-kit.jpg',
  'contact/team-consultation.jpg',
  'about/company-story.jpg'
];

// Create a simple SVG placeholder
function createSVGPlaceholder(filename, width = 800, height = 600) {
  const name = path.basename(filename, '.jpg').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const category = path.dirname(filename);
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
  <text x="50%" y="40%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#6b7280">${name}</text>
  <text x="50%" y="55%" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af">${category.toUpperCase()}</text>
  <text x="50%" y="70%" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#d1d5db">${width}x${height} placeholder</text>
</svg>`;
  
  return svg;
}

// Create all placeholder files
imageFiles.forEach(file => {
  const fullPath = path.join('public', 'images', file);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create SVG placeholder
  const svg = createSVGPlaceholder(file);
  
  // Write as SVG file (change extension)
  const svgPath = fullPath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  
  // Also create a small JPG placeholder using a simple approach
  // For now, we'll just create the SVG and update the code to use SVG
  console.log(`Created placeholder: ${svgPath}`);
});

console.log('All placeholder images created successfully!');
