const checkbtn = document.querySelector(`.checkbtn`);
const mainMenu = document.querySelector(`.main-menu`);
const proyectContainer = document.querySelector(`.proyect-container`);

checkbtn.addEventListener(`click`, toggleMainMenu);

function toggleMainMenu() {
    mainMenu.classList.toggle(`inactive`);
}

const proyectList = [];
proyectList.push({
    href: `https://cap-36.github.io/Batata-page/`,
    img: `./assets/imgs/logo_header.svg`,
    transform: "View",
});
proyectList.push({
    href: `https://cap-36.github.io/Animations-with-CSS-and-JavaScript/`,
    img: `https://i.ibb.co/MMmDPXN/lego.png`,
    transform: "View",
});
proyectList.push({
    href: `https://cap-36.github.io/Technology-blog/`,
    img: `./assets/imgs/logo-blog.png`,
    transform: "View",
});
proyectList.push({
    href: `https://cap-36.github.io/YardSale-Tienda-online/`,
    img: `./assets/imgs/logo_yard_sale.svg`,
    transform: "View",
});
function renderProyects(arr) {
    for (proyect of proyectList) {
        const proyectHref = document.createElement(`a`);
        proyectHref.setAttribute(`href`, proyect.href);
        proyectHref.classList.add(`proyect--card`);

        const proyectImg = document.createElement(`img`);
        proyectImg.setAttribute(`src`, proyect.img);

        const span1 = document.createElement(`span`);
        span1.classList.add(`opacity`);
        const span2 = document.createElement(`span`);
        span2.classList.add(`magic-item`);
        span2.innerText = proyect.transform;

        proyectHref.appendChild(proyectImg);
        proyectHref.appendChild(span1);
        proyectHref.appendChild(span2);

        proyectContainer.appendChild(proyectHref);
    }
}

renderProyects(proyectList)