(() => {

    const button = document.getElementById("1");
    const menu = document.getElementById('2');

    const toggleClass = () => {
        menu.classList.toggle('mainNav__menu--open');
    };



    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();