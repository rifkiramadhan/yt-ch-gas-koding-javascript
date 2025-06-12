/*
    Piramid Pattern:
    - Desain terstruktur yang dicetak menggunakan karakter, angka, atau simbol, yang disusun dalam bentuk piramida

    Buat fungsi PyramidPattern dengan ketentuan berikut:
    PyramidPattern(8):
    8 7 6 5 4 3 2 1 2 3 4 5 6 7 8
    7 6 5 4 3 2 1 2 3 4 5 6 7 
    6 5 4 3 2 1 2 3 4 5 6
    5 4 3 2 1 2 3 4 5
    4 3 2 1 2 3 4
    3 2 1 2 3
    2 1 2
    1
*/

const PyramidPattern = n => {
  for (let i = n; i >= 1; i--) {
    let line = ' ';

    for (let j = i; j >= 1; j--) {
      line += j + ' ';
    }

    for (let j = 2; j <= i; j++) {
      line += j + ' ';
    }

    console.log(line.trim());
  }
};

PyramidPattern(8);
