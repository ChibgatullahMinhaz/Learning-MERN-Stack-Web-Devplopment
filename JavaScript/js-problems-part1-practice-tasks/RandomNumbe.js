// const otp = Math.floor(Math.random() * 10 + 10);
// console.log(otp)

//  one techniqr
function RandomGenerat(min, max) {
    const random = Math.floor(Math.random() * min + max);
    return random;
}
setInterval(() => {
    // console.log(RandomGenerat(10, 30))
}, 1000);

// secnd techniqe
function randomNumer(max, min) {
    const random = Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
    return random;
}
setInterval(() => {
    console.log(randomNumer(20, 10))
}, 100);