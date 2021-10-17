let counterValue = 0;

const decrementBtn = document.querySelector(`[data-action = "decrement"]`);
const incrementBtn = document.querySelector(`[data-action = "increment"]`);
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};
decrementBtn.addEventListener('click', decrement);

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
}
incrementBtn.addEventListener('click', increment);
