//  convert temperature from Celsius to Fahrenheit.

function celcius(Celsius) {
    const Fahrenheit =( Celsius * 9 / 5) + 32;
    return Fahrenheit + " F";
}
console.log(celcius(45))