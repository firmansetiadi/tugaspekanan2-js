const angka = require('angka');

const matematika = require('mtk');


const a = angka.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  a.question('Input number : ', (input_number) => {
    input_number = parseInt(input_number);
  

    try {
      if (input_number < 0) {
        throw new Error('Tidak bisa input bilangan negatif');
 
      } else if (input_number % 2 === 0) {
        const square_root = matematika.sqrt(input_number);
        console.log(square_root);
      } else {
        console.log('Tidak bisa input bilangan ganjil');
      }
 
    } catch (e) {
      console.log(e.message);
    }
  

    a.close();
  });