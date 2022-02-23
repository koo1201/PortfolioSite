// const { resolve } = require("path/posix");

const targetElement = document.querySelectorAll('.animationTarget');
const photoTarget = document.querySelectorAll('.animationPhoto')


document.addEventListener('scroll',function(){
    for(let i = 0; i<targetElement.length;i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top+targetElement[i].clientHeight*.6
    if(window.innerHeight>getElementDistance){
        targetElement[i].classList.add('show')
    }
    }
})



const topElement = document.querySelectorAll('.ta')
const loadingTop = function(){
        topElement[0].classList.add('appear')
        topElement[1].classList.add('appear')
    }
    
// setTimeout(loadingTop,500);
const Top = document.querySelector('.TOP')
// const loadingTop2= function (){
//     Top.classList.add('TOP2')
    
// }

const st=document.querySelector('.second-title')





const loadingTop1 = ()=>{

    loadingTop();
    new Promise((resolve)=>{
        setTimeout(
            function (){
            resolve(
                Top.classList.add('TOP2'),
                topElement[0].classList.add('second-title'),
                topElement[1].classList.add('second-title'),
                Top.classList.remove('TOP'),
            )},
           1500
        )
    
    })
}
loadingTop1();


const img_src =["img/photo001.JPG","img/photo002.JPG","img/photo003.JPG",
"img/photo004.JPG","img/photo005.JPG","img/photo006.JPG"];
let num = -1

function slide_time(){
    if(num ===4){
        num =0;
    }
    else{
        num++;
    }
    document.getElementById('slide-photo').src=img_src[num];
}

setInterval(slide_time,5000)









