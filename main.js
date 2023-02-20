const newDiv = document.createElement('div');
newDiv.textContent = 'My div';

const inputEl = document.querySelector('.my-input')
inputEl.addEventListener('focus', () => {
    document.body.appendChild(newDiv);
})

inputEl.addEventListener('blur', () => {
    document.body.removeChild(newDiv);
})