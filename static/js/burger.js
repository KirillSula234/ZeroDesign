const burIm = document.querySelector("#b");
const cross = document.querySelector('#cross');
const menu = document.querySelector('#burger-menu');

burIm.addEventListener('click', () => {
    menu.style.display = 'block';
}
);

cross.addEventListener('click', () => {
    menu.style.display = 'none';
});