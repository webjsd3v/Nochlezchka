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
    if (document.body.clientWidth < 1120) {
        remClass(headBurger, 'form-scroll__menu_off')
        addClass(locSity, 'form-scroll__menu_off')
        addClass(headButton, 'form-scroll__menu_off')
        addClass(menu, 'form-scroll__menu_off')

    } else {
        addClass(headBurger, 'form-scroll__menu_off')
        remClass(locSity, 'form-scroll__menu_off')
        remClass(headButton, 'form-scroll__menu_off')
        remClass(menu, 'form-scroll__menu_off')
        addClass(form, 'form-scroll__menu_off')
        addClass(formSity, 'form-scroll__menu_off')
    }
});

headBurger.addEventListener('click', function () {
    form.classList.toggle('form-scroll__menu_off')
});

const formDonateClose = document.querySelector('.form-donate__close');
const popup = document.querySelector('.popup');
const formDonateOpen = document.querySelector('.form-scroll__button');
const formDonateOpenMain = document.querySelector('.header__button');


formDonateOpen.addEventListener('click', function () {
    {
        addClass(popup, 'popup_opened')
        addClass(form, 'form-scroll__menu_off')
    }
    return false;
});

formDonateOpenMain.addEventListener('click', function () {
    addClass(popup, 'popup_opened')
});

formDonateClose.addEventListener('click', function () {
    remClass(popup, 'popup_opened')
});

const buttonStr = document.querySelector('.form-scroll__str');
const buttonStrBack = document.querySelector('.form-scroll__back');
const formSity = document.getElementById('form-sity');



buttonStr.addEventListener('click', function () {
    remClass(formSity, 'form-scroll__menu_off')
    remClass(popup, 'popup_opened')
});

buttonStrBack.addEventListener('click', function () {
    addClass(formSity, 'form-scroll__menu_off')
});

headBurger.addEventListener('click', function () {
    addClass(formSity, 'form-scroll__menu_off')
});



//Скроллинг card в секции events
document
  .querySelector('.events__scroll-area')
  .addEventListener('wheel', function (event) {
    if (event.deltaY != 0) {
      this.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  });