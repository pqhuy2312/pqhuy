var sortList = document.querySelector('.sort-button-sort-list');
var sortItem = sortList.querySelectorAll('.sort-button-sort-item');
var inputRad = sortList.querySelectorAll('input[type="radio"]');
var showSortList = document.querySelector('.sort-button-sort');

inputRad.forEach((item) => {
    item.addEventListener('change', (e) => {
        sortItem.forEach((item) => {
            item.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
    });
});
showSortList.addEventListener('click', (e) => {
    showSortList.classList.toggle('active');
});


