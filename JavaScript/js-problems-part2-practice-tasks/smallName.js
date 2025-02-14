const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findeLowest(freidnds) {
    let smallname = freidnds[0];

    for (const name of freidnds) {
        if (name.length < smallname.length) {
            smallname = name;
        }
    }
    return smallname;
}

console.log(findeLowest(heights2))