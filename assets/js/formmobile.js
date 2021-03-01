var inputSearch = document.querySelector('.header__search-mobile-tablet-input');
var searchForm = document.querySelector('.header__search-mobile-tablet');
var suggestBoxMobiel = document.querySelector('.header__search-mobile-tablet-suggest-box');
var headerBackground = document.querySelector('.header__backgroud-top')
var inputSearchPC = document.querySelector('.header__search-input')
var overlayPC = document.querySelector('.modal-overlay');
inputSearchPC.onfocus = () => {
    overlayPC.style.display = 'block';
};
inputSearchPC.onblur = () => {
    overlayPC.style.display = 'none';
};
inputSearch.onfocus = (e) => {
    searchForm.style.transform = 'translateY(-40px)';
    headerBackground.style.height = '48px';
    overlayPC.style.display = 'block';
    suggestBoxMobiel.style.display = 'block';
};
inputSearch.onblur = () => {
    searchForm.style.transform = 'translateY(0)';
    headerBackground.style.height = '88px';
    overlayPC.style.display = 'none';
    suggestBoxMobiel.style.display = 'none';
};
