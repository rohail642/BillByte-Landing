import sharp from 'sharp'
import { readFileSync } from 'fs'

// Run from the BillByte-Landing directory.
const svg = readFileSync('public/favicon.svg')

// 192x192 (multiple of 48) satisfies Google's favicon size requirement.
await sharp(svg, { density: 300 })
  .resize(192, 192, { fit: 'fill' })
  .png()
  .toFile('public/favicon.png')

console.log('favicon.png written (192x192)')
