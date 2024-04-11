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
    console.log(item_class)
}

skills_header.forEach((el)=>{
    el.addEventListener('click',toggle_skills)
})

export default toggle_skills;
