const checkbtn = document.querySelector(`.checkbtn`);
const mainMenu = document.querySelector(`.main-menu`);

checkbtn.addEventListener(`click`, toggleMainMenu);

function toggleMainMenu() {
    mainMenu.classList.toggle(`inactive`);
}