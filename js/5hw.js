//1
const arr1 = [1, 5, '4', 'hello' ];
const arr2 = [ true,2, {}, ['a'], 222 ];


console.log(arr1[1]);
console.log(arr2[1]);
console.log(arr1[1] + arr2[1]);

//2
arr1.splice(arr1.length, 0, 22);

for (const components of arr1) {
    console.log(components);
}

//3
for (const components of arr2)  {
    console.log(components);
}
//4
const message = 'Welcome to Ukraine!';
const fix = message.split(" ");

console.log(fix);

console.log(fix.indexOf(I));
console.log(fix);

const string = fix.join("");
console.log(string);

//5
const styles = ['Джаз', 'Блюз'];
  styles.push('Рок-н-ролл');

  console.log(styles);

  styles.splice(1, 1, 'Класика');
  console.log(styles);

  styles.shift();
  console.log(styles);

  styles.unshift('Реп','Реггі')
  console.log(styles);

