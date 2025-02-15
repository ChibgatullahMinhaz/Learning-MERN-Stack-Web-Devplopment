function sendNotification(email) {
if (  typeof email !== "string"||!email.includes("@")) {
    return "invalid email";
}
const splitEmail = email.split("@");
const userName = splitEmail[0];
const domainName = splitEmail[1];
const notification = userName + " send email from " + domainName;
return notification;
}
const result = sendNotification("minhaz.infog@mail.com");
// const result = sendNotification(55);
console.log(result)