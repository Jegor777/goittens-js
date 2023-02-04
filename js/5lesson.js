const array = [1,2,3,4,5];
console.log(array);
let a = 4;

let b = a;

a = 5;
console.log(b);

const arr1 = [1,2,3,4,5];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);


arr1[0] = 10;

console.log(arr1);



// const names = ['Ola', 'Fedir','Nastia','Mary' ];
// for (let i = 0; i < names.length; i += 1) {
    
//     names[i] += '!';
//     console.log(names[i]);

const numbers = [1,2,3,4,5];
let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
    
//   total += numbers[i]
//     console.log(numbers[i]);
// }
for (let number of numbers) {
    total += number;
}
console.log(total);



// Напиши скрипт пошуку логіна
//  * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'


const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message;

logins.includes(loginToFind);
const result = logins.includes(loginToFind);
console.log(result);
if (result) {
    message = `Користувач ${loginToFind} знайдено.`
} 

// Повинно вийти top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
const normalizeTitle = title.toLocaleLowerCase();
const titleArr = normalizeTitle.split(' ');
const titleJoin = titleArr.join('-')
// 
const titleSlug = title.toLocaleLowerCase().split(' ').join('-')
console.log(titleSlug);

/*
   * Видалення (по індексу), метод indexOf()
   */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  console.log(cards);
/*
   * Видалення (по індексу), метод indexOf()
   */
const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);


cards.splice(index, 1 )
console.log(cards)
/*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';
cards.splice(6,0,cardToInsert)
console.log(cards);

const cardToUpdate = 'Карточка-4';