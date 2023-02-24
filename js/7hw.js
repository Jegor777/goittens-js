//1
let user = {};

user.userName = "Egor";
user.age = 15;

user.showUserName = function() {
  console.log(this.userName);
};

user.updateAge = function() {
  this.age++;
};

user.showUserName();
user.updateAge();


console.log(user.age);

//2
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  
  console.log(sum); 




  
//3

const calculator = {
    read() {
      this.a = Number(prompt('Введіть перше число:'));
      this.b = Number(prompt('Введіть друге число:'));
    },
    sum() {
      return this.a + this.b;
    },
    mult() {
      return this.a * this.b;
    }
  };
  
  calculator.read(); 
  console.log(calculator.sum()); 
  console.log(calculator.mult());

  //4

  
const cafe = {
    name: 'Republic',
    width: 200,
    height: 300,
    personal: 5,
    hr: true
  };
  
  for (const key of Object.entries(cafe)) {
    console.log(key);
  }

  const area = cafe.width * cafe.height;
    console.log(area);
  
  