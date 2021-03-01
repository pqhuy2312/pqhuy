var optionList1 = document.querySelector('.category-container-box-sort-menu-left1');
var optionList2 = document.querySelector('.category-container-box-sort-menu-left2');
var optionList3 = document.querySelector('.category-container-box-sort-menu-left3');
var searchOption1 = optionList1.querySelectorAll('.category-container-box-sort-link');
var searchOption2 = optionList2.querySelectorAll('.category-container-box-sort-link');
var searchOption3 = optionList3.querySelectorAll('.category-container-box-sort-link');
var dropdownBtn = document.querySelector('.drop-down-list-btn');
var showTypeIcon = document.querySelectorAll('.list-icon');
var listDisplay = document.querySelectorAll('.list-icon');

var row = document.querySelectorAll('.main-cate');
row.forEach((item) => {
    
    var cols = item.querySelectorAll('.col');
    listDisplay[1].addEventListener('click', (e)=> {
        cols.forEach((item) => {
            item.querySelector('.product-card.product-card-border').setAttribute('style','flex-direction: row;justiy-content: center;max-width: unset;align-items: unset;');
            item.querySelector('.product-card-price-name').style = 'margin: 5px 0 0 25px;width: auto;';
            item.style = 'border-bottom: 1px solid #DEE2E6';
            item.classList.remove('l-4');
            item.classList.add('l-12');
        });
    });
    listDisplay[0].addEventListener('click', (e)=> {
        cols.forEach((item) => {
            item.querySelector('.product-card.product-card-border').setAttribute('style','unset');
            item.querySelector('.product-card-price-name').style = 'unset';
            item.style = 'border-bottom: none';
            item.classList.remove('l-12');
            item.classList.add('l-4');
        });
    });
});
for(var i = 0; i < searchOption1.length; i++) {
    searchOption1[i].addEventListener('click', (e) => {
        searchOption1.forEach((item) => {
            item.classList.remove('active');
        });
        e.preventDefault();
        e.target.classList.add('active');
    });
    searchOption2[i].addEventListener('click', (e) => {
        searchOption2.forEach((item) => {
            item.classList.remove('active');
        });
        e.preventDefault();
        e.target.classList.add('active');
    });
    searchOption3[i].addEventListener('click', (e) => {
        searchOption3.forEach((item) => {
            item.classList.remove('active');
        });
        e.preventDefault();
        e.target.classList.add('active');
    });
}
dropdownBtn.onclick = (e) => {
    dropdownBtn.classList.toggle('showdropdown');
};
showTypeIcon.forEach((item) => {
    item.onclick = (e) => {
        showTypeIcon.forEach((item) => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    };
});