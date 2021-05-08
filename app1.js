const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//Modal items
const modal = document.getElementById('email-modal'); //the entire container
//const openBtn = document.querySelector('.button');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display='block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display='none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display='none';
    }
})