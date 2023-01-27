//1//
const number = prompt('Type your number');
if(number>55 && number <100){
    console.log("Число потрапляє в діапазон");
}
else{
    console.log("Не потрапляє в діапозон");
}
//2//
const maxim = 55;
if(maxim>0 && maxim <16){
    console.log('Діти');
}
else if(maxim>17 && maxim <60){
    console.log('Дорослі')
}
else if(maxim>61 && maxim <100){
    console.log('пенсіонер')
}
//3//
const myName = 'Egor';
const myLastName = 'Oliynuk'
if(myName.length>4 && myLastName.length>5 ){
    const result1 = myName.length + myLastName.length;
    console.log(result1);
}
else {
    console.log('УПС')
}

//4//
const random = (Math.round(Math.random() * (5 - 1) + 1));
if(random === 1){
    console.log(`Ваше число ${random}`);
}
else  if (random === 2){
    console.log(`Ваше число ${random}`);
}
else  if (random === 3){
    console.log(`Ваше число ${random}`);
}
else  if (random === 4){
    console.log(`Ваше число ${random}`);
}
else  if (random === 5){
    console.log(`Ваше число ${random}`);
}
//5//
const lang =prompt('Введіть вибрану мову : ua", "ru", "en", "fr"');


switch (lang) {
    case 'ua':
        console.log('Січень');
        break;
        case 'en':
            console.log('January');
            break;
            case 'ru':
        console.log('Январь');
        break;
        case 'fr':
        console.log('Janiver');
        break;
    default: 
    console.log('Не знайдено');
        break;
}

// const salary = 2500;
// // let message;

// // if(salary<= 5000){
// //     message = 'Ваша зп менше 5к';
// //     console.log(message);
// // }
// // else {
// //     message = 'Ваша зарплат більше 5к';
// //     console.log(message);
// // }
// const message = salary<= 5000 ? 10 : 5;
// console.log(message);
// // if(salary < 1000){
// //     console.log('Level 1');
// // }
// // else if(salary > 2000 && salary < 3000) {
// // console.log('Level 2')
// // }else if(salary > 3000 && salary < 4000) {
// //     console.log('Level 3')
// // }
// // else{
// //     console.log('Ви не наш робітник');
// // }



// const a =5;
// console.log(5);
// if(true){
//     const b = 10;
//     console.log(b);
//     console.log(a);
// }
// // console.log(b);

// const stars = 3;
// let price;
// if(stars === 1){
//     price = '20$'
//     console.log(`Вартість номеру буде ${price}`);
// }
// else if(stars === 2){
//     price = '30$'
//     console.log(`Вартість номеру буде ${price}`)
// }
// else if(stars === 3){
//     price = '50$'
//     console.log(`Вартість номеру буде ${price}`)
// }
// else if(stars === 4){
//     price = '70$'
//     console.log(`Вартість номеру буде ${price}`)
// }
// else if(stars === 5){
//     price = '120$'
//     console.log(`Вартість номеру буде ${price}`)
// }else{
//     console.log('Такої кількості немає');
// }
// switch (stars) {
//     case 1:
//         price = '20$'
//         console.log(`Вартість номеру буде ${price}`)
//         break;
//     case 2:
//         price = '30$'
//         console.log(`Вартість номеру буде ${price}`)
//         break;
//         case 3:
//             price = '50$'
//             console.log(`Вартість номеру буде ${price}`)
//             break;
//             case 4:
//                 price = '70$'
//                 console.log(`Вартість номеру буде ${price}`)
//             break;
//                 case 5:
//                     price = '120$'
//                     console.log(`Вартість номеру буде ${price}`)
//             break;
   
// }