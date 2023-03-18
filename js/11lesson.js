
// const linkEL = document.querySelector('.site-nav__link')
// linkEL.classList.add('site-nav__link--curent')
// linkEL.classList.remove


// const itemEL = document.querySelectorAll('.site-nav__item')
// console.log(itemEL);


// const tittleEL = document.querySelector('.title') 
// tittleEL.textContent = 'Заголовок'
// console.log(tittleEL.textContent);

// // const imageEL = document.querySelector('.')
// const imageEL = document.querySelector('.image')
// imageEL.src = 'https://images.pexels.com/photos/15851497/pexels-photo-15851497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// imageEL.alt = 'Чоловік'
// console.log(imageEL);
// imageEL.src = 'https://images.pexels.com/photos/12065725/pexels-photo-12065725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


// const textEL = document.querySelector('.text')
// textEL.textContent = ' Лорем Іпсум'
// console.log(textEL);


/// отримати посилання на заголовок, текст і елементів списку///
const mainTitleEL = document.querySelector('.section-title')
const mainTextEL = document.querySelector('.paragraph')
const listEL = document.querySelectorAll('.list-item')

console.log(mainTitleEL);
console.log(mainTextEL);
console.log(listEL);

mainTitleEL.textContent = 'Слава Україні!'

 if (mainTextEL.classList.contains('paragraph')) {
    mainTextEL.classList.replace('paragraph' , 'new-paragraph')
}

listEL[1].classList.add('active')