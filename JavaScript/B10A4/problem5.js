function watingTime(totalTime, serialNumber) {
    if (!Array.isArray(totalTime) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let sumTotalTime = 0;
    for (const time of totalTime) {
        sumTotalTime = sumTotalTime + time;
    }
    const avgTime  = Math.round(sumTotalTime / totalTime.length);
    const ReamainingPerson = (serialNumber - 1) - totalTime.length;
    if (ReamainingPerson > 0) {
        const totalTimeNeeded = avgTime * ReamainingPerson;
        return totalTimeNeeded;
    }
}
const output = watingTime([2,4,5,6] , 10);
console.log(output);