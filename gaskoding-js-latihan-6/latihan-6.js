/*
    Show Pattern:
    - Adalah suatu logika untuk membuat pola angka dalam bentuk matriks n×n
    - Jika kolom A nilainya ganjil maka cetak simbol -
      dan jika nilainya genap maka cetak angka
    - Jika kolom B nilainya ganjil maka cetak angka
      dan jika nilainya genap maka cetak simbol -

    Buat angka deret dengan pattern dibawah: 
    ShowPattern(5), output: 
    - 2 - 4 -
    1 - 3 - 5
    - 2 - 4 -
    1 - 3 - 5
    - 2 - 4 -

    ShowPattern (9) , output:
    - 2 - 4 - 6 - 8 -
    1 - 3 - 5 - 7 - 9
    - 2 - 4 - 6 - 8 -
    1 - 3 - 5 - 7 - 9
    - 2 - 4 - 6 - 8 -
    1 - 3 - 5 - 7 - 9
    - 2 - 4 - 6 - 8 -
    1 - 3 - 5 - 7 - 9
    - 2 - 4 - 6 - 8 -
*/

const ShowPattern = n => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (i % 2 === 1) {
        line += j % 2 === 1 ? '- ' : `${j} `;
      } else {
        line += j % 2 === 0 ? '- ' : `${j} `;
      }
    }

    console.log(line.trim());
  }
};

console.log(ShowPattern(5));
console.log(ShowPattern(9));
