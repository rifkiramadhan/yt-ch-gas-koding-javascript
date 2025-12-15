/*
    Buatlah 2 buah fungsi dengan konsep FizzBuzz untuk mencetak angka dengan
    konsep yang outputnya seperti berikut ini :
    
    1. FizzBuzz
    - Jika angka habis dibagi 3 DAN 5 => cetak "FizzBuzz"
    - Jika angka habis dibagi 3 saja => cetak "Fizz"
    - Jika angka habis dibagi 5 saja => cetak "Buzz"
    - Selain itu => cetak angkanya n = 15

    2. PingPongBoom
    - Jika angka habis dibagi 2 => "Ping"
    - Jika angka habis dibagi 3 => "Pong"
    - Jika angka habis dibagi 5 => "Boom"
    - Kombinasikan kondosinya (contoh: 6 habis dibagi 2 dan 3 => "PingPong")
    - Jalankan angkanya n = 30
*/

const FizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
};

const PingPongBoom = n => {
  for (let i = 1; i <= n; i++) {
    let outputnya = '';

    if (i % 2 === 0) outputnya += 'Ping';
    if (i % 3 === 0) outputnya += 'Pong';
    if (i % 5 === 0) outputnya += 'Boom';

    console.log(outputnya || i);
  }
};

FizzBuzz(15);
console.log();
PingPongBoom(30);
