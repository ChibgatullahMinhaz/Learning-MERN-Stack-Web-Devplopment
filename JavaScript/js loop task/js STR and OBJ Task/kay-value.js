let student = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in student) {
    console.log("Key:", key, "| ", "Type: ", typeof student[key]);
}