//1
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;

console.log(`У списку ${categoriesItems.length} категорії.`);

for (const item of categoriesItems) {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
}

//2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
const ingredientsList = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...ingredientsItems);
//3
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

 
  const galleryEl = document.querySelector("#gallery")

  const imagesEl = images.map((image) => {
    return `<li> <img src="${image.url}" alt="${image.alt}"> </li>`
  }).join("")

  galleryEl.insertAdjacentHTML("afterbegin", imagesEl)