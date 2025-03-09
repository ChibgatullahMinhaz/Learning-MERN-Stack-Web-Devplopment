var name = 'minhaz'; // global scope
function add() {
    var a = 10;
    var b = 20; // local scope or function scope
    
}

add();
// console.log(b);

{
    let c = 30 // block scope
    const d = 40 // block scope
    console.log(c);
}
// console.log(c);