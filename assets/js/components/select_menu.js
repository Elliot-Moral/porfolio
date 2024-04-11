const navBarListDom = document.querySelector('.nav_list')
const navBarLinks = document.querySelectorAll('.nav_link')
const sections = document.querySelectorAll('.section__active')

function activeMenu(){
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach((section, index)=>{

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

export default activeMenu;