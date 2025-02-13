// convert inc to fit 

function fit(inc) {
    const fitInt =parseInt(inc / 12);
    const remaining = inc % 12;
    return `${fitInt} ft  ${remaining}  `;
}
console.log(fit(40))