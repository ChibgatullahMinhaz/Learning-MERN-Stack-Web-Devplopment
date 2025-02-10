for(let i =2; i <= 100; i++){
    if(Math.sqrt(i) % 1=== 0){
        console.log(i)
        break;
    }
}

// onother way 
for (let i = 2; i <= 100; i++){
    for (let j = 1; j * j<=i; j++) {
       if (j * j === i){
           console.log(i);
           i = 103;
           break;
       } 
    }
}
