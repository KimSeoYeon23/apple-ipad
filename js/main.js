// 장바구니
const basketStartEl = document.querySelector('header .basket-starter');
const basketEl = basketStartEl.querySelector('.basket');

basketStartEl.addEventListener('click', (event) => {
    // 이벤트 버블링 막음
    event.stopPropagation();
    // basketEl.classList.toggle('show');
    if (basketEl.classList.contains('show')) {
        // hide
        hideBasket();
    } else {
        // show
        showBasket();
    } // false & true
});

basketEl.addEventListener('click', (event) => {
    event.stopPropagation();
});

window.addEventListener('click', () => {
    hideBasket();
});

function showBasket() {
    basketEl.classList.add('show');
}

function hideBasket() {
    basketEl.classList.remove('show');
}

// 검색
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
shadowEl.addEventListener('click', hideSearch);

function showSearch () {
    headerEl.classList.add('searching');
    document.documentElement.classList.add('fixed');
    headerMenuEls.reverse().forEach((el, index) => {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.forEach((el, index) => {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    setTimeout(() => {
        searchInputEl.focus();
    }, 600);
};

function hideSearch () {
    headerEl.classList.remove('searching');
    document.documentElement.classList.remove('fixed');
    headerMenuEls.reverse().forEach((el, index) => {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
    });
    searchDelayEls.reverse().forEach((el, index) => {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
    });
    searchDelayEls.reverse();
    searchInputEl.value = '';
};

// 요소의 가시성 관찰
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            return;
        };
        entry.target.classList.add('show');
    });
});

const infoEls = document.querySelectorAll('.info');
infoEls.forEach((info) => {
    io.observe(info);
})