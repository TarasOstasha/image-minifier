const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg').default;
const imageminPngquant = require('imagemin-pngquant').default;
const fs = require('fs');

(async () => {
  const inputDir = 'input';
  const outputDir = 'output';

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const files = await imagemin([`${inputDir}/*.{jpg,png}`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log(`✅ Minified ${files.length} image(s) to /${outputDir}`);
})();
