const Herobhai = {
    name: "hero Alom",
    age: 20,
    district: "Dhaka"
}
const patriNames = [
    { name: "Hasina", age: 28, district: "Dinajpur" },
    { name: "Hena", age: 30, district: "Chattogram" },
    { name: "Fahima", age: 27, district: "Rajshahi" },
    { name: "sumaiya", age: 29, district: "Khulna" },
    { name: "Kona islam", age: 26, district: "Sylhet" },
    { name: "Samiya ayat", age: 31, district: "Barishal" },
    { name: "Sultana Akter", age: 25, district: "Mymensingh" },
    { name: "Jerin", age: 32, district: "Rangpur" },
    { name: "Fahmida Islam ", age: 29, district: "Dhaka" },
    { name: "samu", age: 30, district: "Gazipur" }
]

function SendProposal(patro, patris) {
    for (const kone of patris) {
        let koneName = kone.name;
        if ((koneName.includes("h") || koneName.includes("H")) && patro.district === kone.district) {
            return `proposal done✅ For ${koneName}🥰`;
        }
    }
    return "No suitable match found";
}
const output = SendProposal(Herobhai, patriNames)
console.log(output)