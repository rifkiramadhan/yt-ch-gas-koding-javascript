/**
 * Buatkan 1 buah fungsi RemoveCharacter dan 2 buah parameter target dan input,
 * Diberikan 2 buah input yaitu satu karakter string dan kalimat,
 * Anda diminta untuk menghilangkan 1 karakter yang ada di dalam kalimat.
 * contoh:  input => target = "a", dan kalimat = "Ini adalah kalimat"
 *          output => "Ini dlh klimt".
 */

const RemoveCharacter = (target, input) => {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const character = input[i];

        if (character !== target) output += character;
    }

    return output;
}

console.log(RemoveCharacter('a', 'ini adalah kalimat'));