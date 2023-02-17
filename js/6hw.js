const hello1 = function(){
return 'Привіт JavaScript';
}
console.log(hello1());


function hello2(name){
    console.log(`Hello ${name}`);

}
hello2('Єгор');


const mul = function(n ,m){
    console.log(m + n);
    console.log(m * n);
    console.log(m - n);
}
mul(12,78);
 

const myNewArrowFunction = (...rest) => {
console.log(rest);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");



const myAverageScore = (arr) => {
    let totalScore = 0;
    for (let element of arr) {
    totalScore += element;
   } 
   totalScore = totalScore / arr.length;
   console.log(totalScore)
   if ( totalScore <= 100 && totalScore >= 91) {
    return "My average score: A";
   } else if ( totalScore <= 90 && totalScore >= 81) {
    return "My average score: B";
   } else if ( totalScore <= 80 && totalScore >= 71) {
    return "My average score: C";
   } else if ( totalScore <= 70) {
    return "My average score: D";
   }
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));