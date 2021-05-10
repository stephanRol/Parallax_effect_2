const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;  // devuelve un entero con la altura del header en el browser
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset; //Devuelve un numero de referencia de altura de la barra de scroll
    let sectionY = section.getBoundingClientRect(); //

    translate.forEach(element => {
        let speed = element.dataset.speed;  //
        element.style.transform = `translateY(${scroll * speed}px)`
    })

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height)
    })

    big_title.style.opacity = -scroll / (header_height / 2) + 1; // Si la pantalla tiene un largo de 1000px, el titulo se desvanecerá al alcanzar la mitad de su recorrido, osea 500px
    shadow.style.height = `${scroll * 0.5 + 300}px`//300: corresponde a los 300px de la clase shadow. Este linea hace que la altura de la sombra crezca un poco.
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

})