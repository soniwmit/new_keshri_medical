const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/icons/icon.svg');
const outDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const svgBuffer = fs.readFileSync(svgPath);

async function run() {
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(outDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(outDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Maskable icons: safe zone padding (central 80% circle)
  await sharp(svgBuffer)
    .resize(154, 154)
    .extend({
      top: 19,
      bottom: 19,
      left: 19,
      right: 19,
      background: '#0A8F6A'
    })
    .png()
    .toFile(path.join(outDir, 'icon-maskable-192.png'));
  console.log('Created icon-maskable-192.png');

  await sharp(svgBuffer)
    .resize(410, 410)
    .extend({
      top: 51,
      bottom: 51,
      left: 51,
      right: 51,
      background: '#0A8F6A'
    })
    .png()
    .toFile(path.join(outDir, 'icon-maskable-512.png'));
  console.log('Created icon-maskable-512.png');
}

run().catch(console.error);
