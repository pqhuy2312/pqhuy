
var btnShow = document.querySelector('.news-view-more-btn');
        btnShow.addEventListener('click', (e) => {
            var hideElement = document.querySelectorAll('.news-cate-card.hide-on-pc');
            for(var i = 0; i < 12; i++) {
                if(!hideElement[i]) break;
                hideElement[i].classList.remove('hide-on-pc');
            }
        });