const patriName = ["Hena", "jerren", "fahima", "somaiyya"];

function FindePattri(input) {
    if (!Array.isArray(input)) {
        return "Invalid Input";
    }
    let newPatriList = [];
   for (const patri of input) {
    if (patri.charAt(0).includes('h') || patri.includes("H")) {
        newPatriList.push(patri);
    }
   }
   return newPatriList;
}
const output = FindePattri('');
console.log(output);