//Напиши скрипт, который для каждого элемента массива ingredients:

//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUlRef = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item')
  ingredientsItem.textContent = el;
  return ingredientsItem;
})

console.log(elements);


ingredientsUlRef.append(...elements);

