function miniMaxSum(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0); 
    let minNum = Math.min(...arr); 
    let maxNum = Math.max(...arr); 

    let minSum = totalSum - maxNum; 
    let maxSum = totalSum - minNum; 
    return `${minSum } ${maxSum}`
}
const result = miniMaxSum([1, 2, 3, 4, 5]);
console.log(result)