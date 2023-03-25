// const listEL = document.querySelector('.site-nav')

// console.log(listEL);

// const itemsEL = listEL.children;
// console.log(listEL.firstElementChild);



const titleEl = document.createElement('h1')
titleEl.textContent = 'привіт,це перший мій створений заголовок '
titleEl.classList.add('title')
titleEl.style.backgroundColor = 'tomato'
// console.log(titleEl);

// document.body.insertBefore(titleEl, listEL);

const listEL = document.querySelector('.site-nav')
const containerEL = document.querySelector('.hero')
const imageEL = document.createElement('img')
imageEL.src = 'https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg'
imageEL.alt = 'Лев'
imageEL.width = '200'
containerEL.appendChild(imageEL)
console.log(imageEL)

const itemEL = document.createElement('li')
itemEL.classList.add('.site-nav__item')

const linkEL = document.createElement('a')
linkEL.href = '';
linkEL.classList.add('site-nav__link')
linkEL.textContent = 'Особистий кабінет'

console.log(itemEL);
console.log(linkEL);

itemEL.appendChild(linkEL)
console.log(itemEL);
listEL.append(itemEL, titleEl)


const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

  const colorPicker = document.querySelector('.js-color-picker')
const option = colorPickerOptions[0];


//   const btnEL = document.createElement('button')
//   btnEL.classList.add("color-picker__option" )
//   btnEL.textContent = option.label
//   btnEL.style.backgroundColor = option.color  
//   btnEL.type = 'button'

//   console.log(btnEL);

//   colorPicker.append(btnEL);

// const btnELements = colorPickerOptions.map((option)=>{
  
//       btnEL.classList.add("color-picker__option" )
//       btnEL.textContent = option.label
//       btnEL.style.backgroundColor = option.color  
//       btnEL.type = 'button'
//       return btnEL
// })
// console.log(btnELements);

// colorPicker.append(...btnELements)

const createNewButtonEL = function(options){
    const btnELements =options.map((option)=>{
    const btnEL = document.createElement('button')   
    btnEL.classList.add("color-picker__option" )
      btnEL.textContent = option.label
      btnEL.style.backgroundColor = option.color  
      btnEL.type = 'button'
      return btnEL}
    
    )
   
      return btnELements
}
createNewButtonEL(colorPickerOptions)
colorPicker.append(...createNewButtonEL(colorPickerOptions))


// <article class="product">
//   <h2 class="product__name">Назва</h2>
//   <p class="product__descr">Опис</p>
//   <p product__pridct>Ціна: 1111 кредитів</p>
// </article>


const containerELement = document.querySelector('.site-nav')
containerELement.insertAdjacentHTML('beforebegin','<li class="site-nav__item"><a href="" class="site-nav__link">Кабінето</a></li>')
console.log(containerELement);


