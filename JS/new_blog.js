
/* 學員須知切換 */
const tabbtn = document.querySelectorAll('.tab_btn');
const page = document.querySelectorAll('.studentnote_page');

tabbtn.forEach((btn,index) => {
    btn.addEventListener('click',()=>{
        tabbtn.forEach((t) => t.classList.remove('studentnote_btn_active'));
        page.forEach((p) => p.classList.remove('page_active'));

        btn.classList.add('studentnote_btn_active');
        page[index].classList.add('page_active');
        
    })
});

