const input = document.querySelector('#name-input'); // взяли input
const span = document.querySelector('#name-output'); // взяли span


input.addEventListener('input', (event) => {
  
    if (event.currentTarget.value === '') {
       return span.textContent = `Anonymous!`
    }

    span.textContent = event.currentTarget.value;
    

});



