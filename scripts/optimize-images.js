import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const inputDir = path.resolve(process.cwd(), 'public', 'images')
const outDir = path.resolve(inputDir, 'optimized')

async function ensureOutDir() {
  try {
    await fs.promises.mkdir(outDir, { recursive: true })
  } catch (err) {
    console.error('Failed to create output directory', err)
    process.exit(1)
  }
}

function isImage(file) {
  return /\.(jpe?g|png|webp)$/i.test(file)
}

async function processFile(file) {
  const inputPath = path.join(inputDir, file)
  const baseName = path.parse(file).name
  const sizes = [800, 400]

  for (const width of sizes) {
    const outJpg = path.join(outDir, `${baseName}-${width}.jpg`)
    const outWebp = path.join(outDir, `${baseName}-${width}.webp`)

    try {
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(outJpg)

      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(outWebp)

      console.log(`Wrote ${path.relative(process.cwd(), outJpg)} and ${path.relative(process.cwd(), outWebp)}`)
    } catch (err) {
      console.error('Failed to process', inputPath, err)
    }
  }
}

async function run() {
  await ensureOutDir()
  let files
  try {
    files = await fs.promises.readdir(inputDir)
  } catch (err) {
    console.error('Failed to read input directory', err)
    process.exit(1)
  }

  const images = files.filter(isImage)
  if (images.length === 0) {
    console.log('No images found in', inputDir)
    return
  }

  for (const f of images) {
    await processFile(f)
  }

  console.log('Image optimization complete.')
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
