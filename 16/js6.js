
const parent = {
    name : 'kim',
    age: 50
}

// 1. 생성자 함수로 만든다. constructor로 만든다.
// 2. Object.created( ) => ES5 때 만들어짐

const child = Object.create(parent);

console.log(child) // {}
console.log(child.name) // kim
console.log(child.age) //50


const item = {title:'TEE',price:5000}
const itemChild=Object.create(item);
itemChild.price = 7000;
console.log(itemChild.price) //7000

const itemChildChild = Object.create(itemChild);
console.log(itemChildChild.price) //7000

//ES6 class

