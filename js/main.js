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