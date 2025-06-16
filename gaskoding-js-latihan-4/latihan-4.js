/**
    - Find Divisor:
      - Adalah bilangan yang dapat membagi habis (tanpa sisa) suatu bilangan lain
      - Contoh:
        - 6 ÷ 1 = 6 sisa 0 → masukkan 1
        - 6 ÷ 2 = 3 sisa 0 → masukkan 2
        - 6 ÷ 3 = 2 sisa 0 → masukkan 3
        - 6 ÷ 4 = 1 sisa 2 → lewati
        - 6 ÷ 5 = 1 sisa 1 → lewati

    - Buat fungsi FindDivisor(n) untuk menampilkan bilangan-bilangan pembagi n:
      - FindDivisor(6) => output: 1 2 3
      - FindDivisor(24) => output: 1 2 3 4 6 8 12
      - FindDivisor(7) => output: 1
**/

const FindDivisor = n => {
  const divisors = [];
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors[count] = i;
      count++;
    }
  }

  return divisors;
};

console.log(FindDivisor(6).join(', '));
console.log(FindDivisor(24).join(', '));
console.log(FindDivisor(7).join(', '));
