// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalGivenSelary(datas) {
    let totalCompanySalary  = 0;
    let result = [];
    for (const data of datas) {
        const startingSelary = data.starting;
        const incrementperYear = data.increment;
        const experienceOfYears = data.experience;
        const totalIncrment = experienceOfYears * incrementperYear;
        const  totalPerPersonSelary = startingSelary + totalIncrment;
        result.push(`${data.name} of per month selary: ${totalPerPersonSelary}`);
        totalCompanySalary  += totalPerPersonSelary;
    }
    return[ result, totalCompanySalary ] ;
}
const [result , totalCompanySalary ]  = totalGivenSelary(employees);
console.log(result, "Total salary provided by the company in a month: "+ totalCompanySalary );