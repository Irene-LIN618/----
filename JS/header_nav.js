

/*  漢堡選單-點擊 */
const hamber = document.querySelector('.menu');
const nav = document.querySelector('.nav');

hamber.addEventListener('click',()=>{
    nav.classList.toggle('active');
})



/* 回到頂部 */

const backtotop = document.getElementById('backtotop');

window.addEventListener('scroll',() => {
    if(window.scrollY > 300){
        backtotop.style.display = 'block';
    }else{
        backtotop.style.display = 'none';
    }
})

backtotop.addEventListener('click',() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
})
