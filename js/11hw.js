// Отримати текст з елемента з класом "page-title" та змінити його на "Новий заголовок".//
//1
const pageTitleEL = document.querySelector('.page-title')
pageTitleEL.textContent = "Новий заголовок";
console.log(pageTitleEL);



//2
const paragraphTextEL = document.querySelector('.paragraph')
paragraphTextEL.textContent = 'Lorem Lorem' 

console.log(paragraphTextEL);

//3
const  listAllEL = document.querySelectorAll('.list');
console.log(listAllEL);

//4
const imageNewEL = document.querySelector('.image')
imageNewEL.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBKU-f9z_721cT4SmfFK0UYGOEzAW5np4wg&usqp=CAU'

//5
const titleList = document.querySelectorAll(".section-title");
console.log(titleList);

const lastIndex = titleList.length - 1;
titleList[lastIndex].textContent = "Новий заголовок";


//6
const tableCellListAll = document.querySelectorAll(".table-cell");
tableCellListAll[tableCellListAll.length - 1].textContent = "Оновлене значення";


//7
const  footertextAllEL = document.querySelectorAll('.footer-text')
for (const text of footertextAllEL) {
    text.classList.add('highlight')
}

//8
const navigationGetEl = document.querySelector(".navigation");
navigationGetEl.style.backgroundColor = "lightblue";
