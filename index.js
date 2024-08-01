const menubtn= document.getElementById('menu-btn');
const navlinks= document.getElementById('nav__links');
const menuicon= menubtn.querySelector('i');

menubtn.addEventListener("click",(e)=>{
    navlinks.classList.toggle('open');


    const isOpen=navlinks.classList.contains('open');
    menuicon.setAttribute("class",isOpen?"fa-solid fa-xmark":"fa-solid fa-bars");
})

navlinks.addEventListener("click",(e)=>{
    navlinks.classList.remove("open");
    menuicon.setAttribute('class',"fa-solid fa-bars");
});


