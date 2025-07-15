/*
    Buat 2 fungsi untuk menampilkan angka deret :

    1). Setiap baris menampilkan angka 1 sampai nomor baris
    - Contoh:
    - Baris 1: tampilkan 1
    - Baris 2: tampilkan 1, 2
    - Baris 3: tampilkan 1, 2, 3
    - Dan seterusnya...

    1). ShowPatternOne(5), output :
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

    2). Setiap baris menampilkan angka berurutan, dimulai dari angka yang berbeda
    - Contoh:
    - Baris 1: mulai dari 1 → tampilkan 1
    - Baris 2: mulai dari 2 → tampilkan 2, 3
    - Baris 3: mulai dari 3 → tampilkan 3, 4, 5
    - Dan seterusnya...

    2). ShowPatternTwo(5) Output :
    1
    2 3
    3 4 5
    4 5 6 7
    5 6 7 8 9
*/

const ShowPatternOne = n => {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
      line += ` ${j} `;
    }

    console.log(line);
  }
};

const ShowPatternTwo = n => {
  let count = 1;

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j <= i; j++) {
      line += ` ${count + j} `;
    }

    count++;

    console.log(line);
  }
};

ShowPatternOne(5);
console.log();
ShowPatternTwo(5);
