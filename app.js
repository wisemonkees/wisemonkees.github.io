const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const sectSubBtn1 = document.querySelectorAll('.subcontrol1');
const allSections = document.querySelector('.main-content');

function PageTrans(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currButton = document.querySelectorAll('.active-btn');
            currButton[0].className = currButton[0].className.replace('active-btn','');
            this.className += 'active-btn';
        })
    }

    //Sections active class
    allSections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if(id){
            /*//remove selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            */

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTrans();