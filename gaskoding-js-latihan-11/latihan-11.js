/* 
 Buatlah sebuah fungsi CetakAngka untuk mencetak angka dengan looping array
 dengan output seperti berikut ini :
 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
*/

const CetakAngka = n => {
  let array = [];
  array.length = n;
  let angka = 0;

  for (let i = angka; i < n; i++) {
    array[i] = i + 1;
  }

  return array;
};

console.log(CetakAngka(10).join(', '));
