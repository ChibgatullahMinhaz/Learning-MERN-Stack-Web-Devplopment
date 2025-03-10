let allDatas = []	
const urls = [
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/comments'
]
const fetchAPI = async () => {
    console.log('hello i am first');
    const response = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));

  
   allDatas = response.flat();
}
// let x = 1;
// let intervalId = setInterval(() => {
//  console.log(x++);
//  if (x > 3) clearInterval(intervalId);
// }, 1000);

let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
}, 0); 
// console.log(message);


async function myFunction() {
    return "Hello";
   }
   myFunction().then(console.log);
   

//    try {
//     console.log("Start");
//     throw new Error("Error occurred");
//    } catch (err) {
//     console.log(err.message);
//    } finally {
//     console.log("End");
//    }