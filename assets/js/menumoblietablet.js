var downButton = document.querySelectorAll('.menu-top-mobile-tablet-down-icon');
var upButton = document.querySelectorAll('.menu-top-mobile-tablet-up-icon');
var productList = document.querySelectorAll('.menu-top-mobile-tablet-product-list');
var openButton = document.querySelector('.header__icon-menu');
var closeButton = document.querySelector('.menu-tablet-mobile-close-icon')
var overlay = document.querySelector('.nav-overlay');
var overlayMobile = document.querySelector('.modal-overlay-moblie');
var menuMobileTablet = document.querySelector('.menu-top-mobile-tablet');
var menuMobileTabletWidth = menuMobileTablet.clientWidth;
var slider = document.querySelector('.slider');
var btnOpenSortMenu = document.querySelector('.sort-button-feature');
var closeButtonSortBox = document.querySelector('.menu-tablet-mobile-close-icon-sort-box');
var sortFeatureBox = document.querySelector('.sort-option-feature-box')


const showMenu = (e) => {
    e.preventDefault();
    if(menuMobileTablet)
        menuMobileTablet.style.left = `0`;
    overlay.style.display = 'block';
    
};
const hideMenu = () => {
    if(menuMobileTablet)
        menuMobileTablet.style.left = `-100%`;
    overlay.style.display = 'none';
};
const showMenuSort = () => {
    if(sortFeatureBox)
        sortFeatureBox.style.right = `0`;
    overlay.style.display = 'block';
};
const hideMenuSort = () => {
    if(sortFeatureBox)
        sortFeatureBox.style.right = `-100%`;
    overlay.style.display = 'none';
};

if(closeButtonSortBox) {
    closeButtonSortBox.addEventListener('click', hideMenuSort);
}
if(btnOpenSortMenu) {
    btnOpenSortMenu.addEventListener('click', showMenuSort)
}
openButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenuSort);
for(var i = 0; i < downButton.length; i++) {
    downButton[i].addEventListener('click', (e) => {
        e.preventDefault();
        var id = e.target.id;
        e.target.style.display = 'none';
        document.querySelectorAll(`#${id}`)[1].style.display = 'block';
        document.querySelector(`.${id}-product-list`).style.display = 'flex';
    });
    upButton[i].addEventListener('click', (e) => {
        e.preventDefault();
        var id = e.target.id;
        e.target.style.display = 'none';
        document.querySelectorAll(`i#${id}`)[0].style.display = 'block';
        document.querySelector(`.${id}-product-list`).style.display = 'none';
    });
}