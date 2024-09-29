const userIcon = document.querySelector('.user-name__name-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const iconArrow =  document.querySelector("#name-icon__icon-left");



userIcon.addEventListener('click', () => {
       if (dropdownMenu.style.display == "none") {
        dropdownMenu.style.display = "block"
        iconArrow.setAttribute("class", "fa-solid fa-chevron-down");
        iconArrow.style.color = "aqua";
    } else {
        dropdownMenu.style.display = "none"
        iconArrow.setAttribute("class", "fa-solid fa-chevron-left");
        iconArrow.style.color = "white";
    }
});

// Para fechar o menu ao clicar fora dele
window.addEventListener('click', (e) => {
    if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
        iconArrow.setAttribute("class", "fa-solid fa-chevron-left");
        iconArrow.style.color = "white";
    }
});