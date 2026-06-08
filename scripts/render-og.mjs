import sharp from 'sharp'
import { readFileSync } from 'fs'

// Run from the BillByte-Landing directory.
const svg = readFileSync('public/og-image.svg')

await sharp(svg, { density: 200 })
  .resize(1200, 630, { fit: 'fill' })
  .png()
  .toFile('public/og-image.png')

console.log('og-image.png written')
