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
    if (document.body.clientWidth < 1280) {
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
        addClass(formSity, 'menu_off')
    }
});

headBurger.addEventListener('click', function () {
    form.classList.toggle('menu_off')
});

const formDonateClose = document.querySelector('.form-donate__close');
const formDonate = document.querySelector('.form-donate');
const formDonateOpen = document.querySelector('.form-scroll__button');
const formDonateOpenMain = document.querySelector('.header__button');


formDonateOpen.addEventListener('click', function () {
    {
        addClass(formDonate, 'form-donate_opened')
        addClass(form, 'menu_off')
    }
    return false;
});

formDonateOpenMain.addEventListener('click', function () {
    addClass(formDonate, 'form-donate_opened')
});

formDonateClose.addEventListener('click', function () {
    remClass(formDonate, 'form-donate_opened')
});

const buttonStr = document.querySelector('.form-scroll__str');
const buttonStrBack = document.querySelector('.form-scroll__back');
const formSity = document.querySelector('.form-scroll_sity');



buttonStr.addEventListener('click', function () {
    remClass(formSity, 'menu_off')
    remClass(formDonate, 'form-donate_opened')
});

buttonStrBack.addEventListener('click', function () {
        addClass(formSity, 'menu_off')
});

headBurger.addEventListener('click', function () {
    addClass(formSity, 'menu_off')
});