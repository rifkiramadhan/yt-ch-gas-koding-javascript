/**
 * Bilangan Prima adalah:
    - Bilangan bulat yang lebih besar dari 1 yang hanya memiliki dua faktor positif, 
      yaitu 1 dan bilangan itu sendiri
    - Bilangan prima hanya dapat dibagi habis oleh 1 dan dirinya sendiri

 * Soal:
    - Buat fungsi ShowPrimeNumber(n) untuk menampilkan bilangan prima 
    - Seperti contoh dibawah ini : 
      - ShowPrimeNumber(15) => output : 2, 3, 5, 7, 11, 13
      - ShowPrimeNumber(25) => output : 2, 3, 5, 7, 11, 13, 17, 19, 23
      - ShowPrimeNumber(50) => output : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
**/

const ShowPrimeNumber = n => {
  let bilanganPrima = [];
  let count = 0;

  for (let i = 2; i <= n; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      bilanganPrima[count] = i;
      count++;
    }
  }

  return bilanganPrima;
};

console.log(ShowPrimeNumber(15).join(', '));
console.log(ShowPrimeNumber(25).join(', '));
console.log(ShowPrimeNumber(50).join(', '));
