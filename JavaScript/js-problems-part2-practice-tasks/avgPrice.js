const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findPhoneAverage (Data) {
    const totalPhones = Data.length;
    let sumOfPrice = 0;
    for (const phone of Data) {
        sumOfPrice += phone.price;
    }
    let avaragePrice = Math.ceil(sumOfPrice / totalPhones);
    console.log(avaragePrice)
}
findPhoneAverage (phones);