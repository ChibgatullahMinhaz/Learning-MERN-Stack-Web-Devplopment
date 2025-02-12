const friends = ["rohim", "heroAlom ", "chibgatullah Minhaz ", "chibgatullah "];

let bigName = friends[0];

for (i = 0; i < friends.length; i++) {
    if(friends[i].length > bigName.length){
        bigName = friends[i]
    }
}
console.log(bigName)