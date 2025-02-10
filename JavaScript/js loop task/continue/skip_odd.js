for (let i = 1; i <= 40; i++) {
     if (i % 2 === 0) {
        console.log(i);
        
     } else if (i % 2 !== 0) {
        continue;
    }
}

// while loop / onther way
let i = 1;
while (i <= 40){
    if (i % 2 === 0) {
        console.log(i);
        
     } 
    i++ ;
}