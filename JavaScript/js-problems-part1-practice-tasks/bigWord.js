const sentence = "I am learning Programming to become a programmer";
const arr = sentence.split(' ')

function bigWord(data) {
    let bigWordSentence = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].length > bigWordSentence.length) {
            bigWordSentence = data[i];
        }
    }
    return bigWordSentence;
}
const result = bigWord(arr);
console.log(result)