let friends: string[] = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const namel: string | undefined = friends.find(friend => friend.length === 5);
console.log(namel); // Output: "Misha"

const nums: number[] = [1, 2, 3, 4, 5];
let output: number[] = nums.filter(n => n % 2 !== 0);
console.log(output); // Output: [1, 3, 5]

function min(nums: number[]): number {
    return Math.min(...nums);
}
console.log(min([1, 3, 2])); // Output: 1

const cube = (x: number): number => x * x * x;
console.log(cube(2)); // Output: 8

interface Product {
    name: string;
    model: string;
    price: number;
    dusk: string;
}

const product: Product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' };
const { price }: { price: number } = product;
console.log(price); // Output: 49000

const arr: number[] = [1, 2, 3, 4, 45, 5];
const [a, b] = arr;
console.log(a + b); // Output: 3
