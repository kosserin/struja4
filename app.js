const navSlide = () =>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    const body=document.querySelector('body');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        body.classList.toggle('body-overflow');


        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else {
                link.style.animation= `navLinkFade .5s ease forwards ${index /7 + 0.1}s`
            }});
            burger.classList.toggle('toggle');
    });


}

navSlide();
