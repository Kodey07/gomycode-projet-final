window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 
})



const navToggle = document.querySelector('#navToggle');
const ul = document.querySelector('ul');

navToggle.addEventListener("click", () => {
    ul.classList.toggle('open')
}

)