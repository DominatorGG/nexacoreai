const { Jimp } = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('D:\\Downloads\\logonex.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red < 40 && green < 40 && blue < 40) {
        this.bitmap.data[idx + 3] = 0; // alpha
      }
    });
    
    await image.write('E:\\Nexacore\\Nexacore\\nexacore-ai-technologies\\public\\images\\logo-transparent.png');
    console.log('Successfully saved transparent logo!');
  } catch (error) {
    console.error('Error:', error);
  }
}

processImage();
