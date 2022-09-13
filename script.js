//Menú movil
const sideMenu = document.getElementById('sidemenu');
function openmenu(){
    sideMenu.style.right = '0';
}
function closemenu(){
    sideMenu.style.right = '-25rem';
}
//About me
let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
//Button up
window.onscroll = function(){
    if(document.documentElement.scrollTop > 750){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}
document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
