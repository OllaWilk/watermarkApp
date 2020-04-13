const Jimp = require('jimp'); //pobranie modułu

const addTextWatermarkToImage = async function(inputFile, outputFile, text) {
  const image = await Jimp.read(inputFile); // .read ładowanie plików graficznych . await - kompilacja nie wykona się dopóki plik graficzny nie załaduje się.
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK); //Jimp zezwala na ładowanie własnych fontów tutaj domyślna sans. loadFont - ładuje font i zapisuje do zmiennej
  image.print(font, 10, 10, text); //dodanie napisu na obrazku
  await image.quality(100).writeAsync(outputFile); //zapisanie zmienionego obrazka do nowego pliku
};

addTextWatermarkToImage('./test.jpg', './test-with-watermark.jpg', 'Hello world')