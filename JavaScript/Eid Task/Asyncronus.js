setTimeout(() => {
    const message = 'hello brother ';
    callback(message)
}, 1000);

const doSomethingAsynchronous=(fn)=>{
console.log('ho');
}
let message = 'welcome brother '
doSomethingAsynchronous((asyncmessage)=>{
    console.log(message);
    console.log(asyncmessage);
})