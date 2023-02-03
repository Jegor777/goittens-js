for (let i = 1; i <= 10; i += 1  ) {
    console.log(i);
    
}



const min = 1;
const max = 10;
let total = 0;
for (let i = min;i <=max; i  += 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}



let num = 20;

while (num < 28) {
    num += 1;
    console.log(num);
}


let name1 = prompt("Type your favorite super hero");

while (name1.length < 6) {
    console.log(name1);
    name1 = prompt("Type your favorite super hero ");

    
} if (name1.length >= 6) {
        alert(`Name ${name1} your name very big`);
    }