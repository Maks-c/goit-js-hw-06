const inputLength = document.querySelector('#validation-input');
const inputLengthValue = inputLength.getAttribute('data-length')
inputLength.addEventListener('blur', onCheckInputValue);
const castNumber = Number.parseInt(inputLengthValue);


function onCheckInputValue(event) {
  
    if (event.currentTarget.value.length === castNumber) {
        inputLength.classList.remove('invalid');
        inputLength.classList.add('valid');
    } else {
        inputLength.classList.add('invalid');
        inputLength.classList.remove('valid');
    }
}


// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };