function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src = 'assets/img/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src = 'assets/img/close_white_36dp.svg'
    }
}

