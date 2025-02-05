/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 50;
let isStudnet = false;
let ticketPrice = 800;

if (age < 10) {
    console.log("Get Free Ticket");

} else if ((age >=10 && age <=20) && !isStudnet) {
    let discount = ticketPrice * (50 / 100);
    let payAmount = ticketPrice - discount;
    console.log(payAmount)
} else if (age >=60){
    let discount = ticketPrice * (15 / 100);
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}else{
    console.log(  "Will pay: " +ticketPrice)
}