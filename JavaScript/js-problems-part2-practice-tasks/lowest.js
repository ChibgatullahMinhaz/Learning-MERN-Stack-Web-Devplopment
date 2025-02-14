const heights2 = [167, 190, 120, 165, 137,8,9,900,1];

function lowestNumber(Data) {
    let lowest = heights2[0];
    for (const num of Data) {
        if (lowest > num) {
            lowest = num
        }
    }
    return lowest
}
setInterval(() => {
    console.log( lowestNumber(heights2))
}, 1000);
