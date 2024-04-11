
//implentacion de modulos.
// import activeMenu from "./components/select_menu.js"
// import toggle_skills from "./components/acordion_skills.js"




/*==================== MENU SHOW Y HIDDEN ====================*/
const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-closed');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(nav_toggle){
    nav_toggle.addEventListener('click', ()=>{
        nav_menu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(nav_close){
    nav_close.addEventListener('click', ()=>{
        nav_menu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const nav_link = document.querySelectorAll('.nav_link');

function link_action(){
    const nav_menu = document.getElementById('nav-menu')
    nav_menu.classList.remove('show-menu')
}
nav_link.forEach(n => n.addEventListener('click', link_action))

/*==================== ACCORDION SKILLS ====================*/
const skills_content = document.getElementsByClassName('skills__container_2');
const skills_header = document.querySelectorAll('.skills__header');

function toggle_skills(){
    let item_class = this.parentNode.className


    for(i = 0; i < skills_content.length; i++){
        skills_content[i].className = 'skills__container_2 skills__close'
    }
    if(item_class === 'skills__container_2 skills__close'){
        this.parentNode.className = 'skills__container_2 skills__open'
    }
}

skills_header.forEach((el)=>{
    el.addEventListener('click',toggle_skills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tab_contents = document.querySelectorAll('[data-content]');



tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        
        let edu = document.getElementById("education_2");
        let wor = document.getElementById("work_2");




        if(edu.className === "qualifications__content qualifications__active"){
            edu.classList.remove("qualifications__active");
            wor.classList.add("qualifications__active");

        }else{
            wor.classList.remove("qualifications__active");
            edu.classList.add("qualifications__active");
        }

        
        //const c_target = document.querySelector(tab.dataset.target);
       //console.log(edu);

        //console.log(tab);      

        //console.log(tab_contents);
              
        
        tab_contents.forEach( tab_content => {
            //tab_content.classList.remove('qualifications__active');
            //let ss = this.parentNode.className;
            // if(item_class === 'qualifications__active'){
                //console.log(ss)
            // }
        });
        // c_target.classList.add('qualifications__active');
        
        tabs.forEach(tab => {
            //tab.classList.remove('qualifications__active');
        });
        //tab.classList.add('qualifications__active');

    })
})

/*==================== SERVICES MODAL ====================*/
const moda_views = document.querySelectorAll('.services__modal');
const moda_btns = document.querySelectorAll('.services__button');
const moda_closes = document.querySelectorAll('.services__modal-close');

let modal = function(modal_click){
    moda_views[modal_click].classList.add('active-modal')
}

moda_btns.forEach((modal_btn, i) =>{
    modal_btn.addEventListener('click', () => {
        modal(i)
    })
})
moda_closes.forEach( (modal_close) =>{
   // console.log(modal_close)
    modal_close.addEventListener('click', () =>  {
        moda_views.forEach( (modal_view) =>{
            modal_view.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper_portafilio = new Swiper(".portafolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel: true,
    // keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiper_testimonial = new Swiper(".testiminial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween:48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoins:{
        568:{
            sliderPreView: 2,
        }
    }
    // mousewheel: true,
    // keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
//console.log(sections[3])
function scrollActrive(){
    const scrollY = window.pageXOffset;

    sections.forEach(current => {
        const sectionHeight =  current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // document.querySelectorAll('.nav_menu a[href*='+ sectionId + ']').classList.add('active-link');
        }else{
            // document.querySelectorAll('.nav_menu a[href*='+ sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActrive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*==================== ACTIVE MENU ====================*/ 
const navBarListDom = document.querySelector('.nav_list')
const navBarLinks = document.querySelectorAll('.nav_link')
const sectionss = document.querySelectorAll('.section__active')

function activeMenu(){
    const scrollPosition = window.scrollY + 100;
    
    sectionss.forEach((section, index)=>{

        //ya entendi esto.
        if(scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight){
            
            const activeLink = navBarListDom.querySelector('.nav_link.active') //elemento que tiene las dos clases
            if(activeLink){
                activeLink.classList.remove('active')
            }
            navBarLinks[index].classList.add('active')
        }
    })
}


window.addEventListener('scroll', activeMenu)

/*==================== DARK LIGHT THEME ====================*/ 
