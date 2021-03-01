var dropdownBtn = document.querySelectorAll('.drop-down-list-btn');
var dropdownList = document.querySelectorAll('.drop-down-list');
var showSelectBoxBtn = document.querySelector('.show-select-box-btn');
var overlaySelectBox = document.querySelector('.nav-overlay-select-box');
var selectLocationBox = document.querySelector('.select-location-box');
var closeIconSelectLocationBox = document.querySelector('.select-location-box-icon');
const hideSelectLocationBox = () => {
    selectLocationBox.style.top = '-100%';
    overlaySelectBox.style.display = 'none';
};
if(closeIconSelectLocationBox) {
    closeIconSelectLocationBox.onclick = (e) => {
        e.stopPropagation();
        selectLocationBox.style.top = '-100%';
        overlaySelectBox.style.display = 'none';
        
    };
}
if(overlaySelectBox) {
    overlaySelectBox.onclick = hideSelectLocationBox;
}
if(showSelectBoxBtn) {
    showSelectBoxBtn.onclick = e => {
        selectLocationBox.style.top = '30px';
        overlaySelectBox.style.display = 'block';
    };
}
dropdownBtn.forEach(item => {
    item.addEventListener('click', e => {
        e.target.classList.toggle('showdropdown');
    });
});
dropdownList.forEach(item => {
    
    var dropdownItem = item.querySelectorAll('.drop-down-item');
    dropdownItem.forEach(dropItem => {
        dropItem.onclick = e => {
            dropdownItem.forEach(item2 => {
                item2.classList.remove('active');
            });
            e.target.parentElement.classList.add('active');
        }
    });
});