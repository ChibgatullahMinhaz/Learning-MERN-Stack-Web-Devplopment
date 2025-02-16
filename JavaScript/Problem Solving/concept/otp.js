function OtpGenerato(number) {
    const otp = Math.abs(Math.floor(Math.random() * number));
    return otp;
}
setInterval(() => {
    console.log(OtpGenerato(9999))
}, 1000);