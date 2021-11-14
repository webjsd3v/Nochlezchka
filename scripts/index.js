const menu = document.querySelector('.menu');
const locSity = document.querySelector('.header__location');
const headButton = document.querySelector('.header__button');
const headBurger = document.querySelector('.header__burger');
const form = document.querySelector('.form-scroll');

/* Добавить и удалить класс у элемента */ 
function addClass(selectClass, addClas) {
    selectClass.classList.add(addClas)
}

function remClass(selectClass, removeClas) {
    selectClass.classList.remove(removeClas)
}
/* Превращение меню в бургер и обратно */
window.addEventListener("resize", function () {
    if (document.body.clientWidth < 1024) {
        remClass(headBurger, 'menu_off')
        addClass(locSity, 'menu_off')
        addClass(headButton, 'menu_off')
        addClass(menu, 'menu_off')
        
    } else {
        addClass(headBurger, 'menu_off')
        remClass(locSity, 'menu_off')
        remClass(headButton, 'menu_off')
        remClass(menu, 'menu_off')
        addClass(form, 'menu_off')
    }
});

headBurger.addEventListener('click', function () {
    form.classList.toggle('menu_off')
  });




