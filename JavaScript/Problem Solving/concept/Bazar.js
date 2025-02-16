const bazar = {
    Budget: 500,
    Cost: {
        Fish: 200,
        GreenChili: 100,
        Vagitales: 50,
        donepata: 50
    }
}

function bazarHisab(input) {
    if (typeof input !== "object" || Array.isArray(input) || !input.Cost) {
        return "invalid Input";
    }
    let totalCost = 0;
    for (const cost of Object.values(input.Cost)) {
        totalCost = totalCost + cost;
    }
  const totalRemaining = input.Budget - totalCost;
  return totalRemaining;
}
const output = bazarHisab(bazar)
console.log(output)