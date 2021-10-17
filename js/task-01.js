
const listRef = document.querySelectorAll('li.item');


console.log(`Number of categories: ${listRef.length}`);


listRef.forEach(el => {
    
    console.log(`Category:${el.firstElementChild.textContent}`);
    console.log(`Elements:${el.lastElementChild.children.length}`);
   
})






