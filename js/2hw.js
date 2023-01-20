let k1 = '5px';
let k2 = '12djd334';
let k3 = '12.45asdwe12';
let k4 = ' qwqweeewq';

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));


console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.random()*( 19 - 3 )+ 3);


const result =  5+5+'5';
console.log(result);
console.log(typeof(result));


const email = 'fortnajtdobran@gmail.com';

console.log(email.includes("@"));
console.log(email.length);


const s1 = "My";
const s2 = "name";
const s3 = "is";
const fullName = `${s1} ${s2} ${s3} Viktor`;
console.log(fullName)



const userName = "Борис";
const payment = "500$"
const resultOf = `Дякуємо, ${userName}! До сплати ${payment}`
alert(resultOf);