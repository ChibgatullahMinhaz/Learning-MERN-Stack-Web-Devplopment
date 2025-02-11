const statement = 'I am a hard working person';
let con_array = statement.split(' ')

let rev_word = [];
for (let index = con_array.length -1; index >=0; index--) {
    rev_word.push(con_array[index])
}
console.log(rev_word)