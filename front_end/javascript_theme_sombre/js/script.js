const paragraphes = document.querySelectorAll('p');
const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', ()=>{
    if (button.textContent == 'ON') {
        button.textContent = 'OFF'
    } else {
        button.textContent = 'ON'}
    paragraphes.forEach((p) => {
        p.classList.toggle('dark-texte')
    })
    body.classList.toggle('dark-bgc');
})