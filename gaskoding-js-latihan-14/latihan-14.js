/**
 * Buatkan 1 buah fungsi JumlahKata dan 1 buah parameter input,
 * Diberikan sebuah string, contoh "Hello World atau Halo Dunia",
 * Hitunglah jumlah kata yang terdapat pada string tersebut.
 * Hello World atau Halo Dunia! = 5 kata
 * 012345678910
 */

const JumlahKata = input => {
    let output = 0;

    for (let i = 0; i < input.length; i++) {
        const character = input[i];
        if (character === " " || i === input.length - 1) {
            output++;
        }
    }

    return output;
}

console.log('Jumlah Kata : ', JumlahKata('Hello World dan Hello Dunia!'));