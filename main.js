const button = document.querySelector('button');
const text = document.querySelector('p');
count = 0;

button.addEventListener('click', ()=> {
    count += 1;
    text.innerText = count;
})
