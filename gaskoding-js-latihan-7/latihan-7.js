/*
    - ShowPattern:
      - Adalah fungsi yang membuat pola angka bergantian antara urutan menurun (dari n ke 1) 
        dan urutan menaik (dari 1 ke n) sebanyak n baris
      - Jika i ganjil maka cetak nilainya dengan pola menurun
      - Jika i genap maka cetak nilainya dengan pola menaik

    Buat deret angka sebagai berikut : 
    ShowPattern(5), output :
    5 4 3 2 1
    1 2 3 4 5
    5 4 3 2 1
    1 2 3 4 5
    5 4 3 2 1

    ShowPattern(9), output : 
    9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9
    9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9
    9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9
    9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9
    9 8 7 6 5 4 3 2 1
*/

const ShowPattern = n => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (i % 2 === 1) {
        line += `${n - j + 1} `;
      } else {
        line += `${j} `;
      }
    }

    console.log(line.trim());
  }
};

ShowPattern(5);
console.log();
ShowPattern(9);
