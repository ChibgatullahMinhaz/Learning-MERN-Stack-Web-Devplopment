const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const namel = friends.find(friend => friend.length ==5);

// What will be the output? (Try it out. It’s tricky.) 

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);

// what will be the output?

function min(nums) { return Math.min(nums) }
// console.log(min( ...[1,3,2 ]));

// What will be the output? 

const cube=x=> x*x*x; 
// console.log(cube(2))

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;

// const {product.price} = product;


// const {price} = product.price;
// const {product} = product;

console.log(price);

// what would be the output? 

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
