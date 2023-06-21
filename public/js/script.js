const loginbtn=document.querySelector('.loginbtn');
const registerbtn=document.querySelector('.registerbtn');
const overlay=document.querySelector('.overlay');
const loginform=document.querySelector('.loginform');
const registerform=document.querySelector('.registerform');
const reg_btn=document.querySelector('.register-btn');
const log_span=document.querySelector('.log-span');
const reg_span=document.querySelector('.reg-span');

const afterregbtn=document.querySelector('.register-btn');

const cross1=document.querySelector('.cross1');
const cross2=document.querySelector('.cross2');

loginbtn.addEventListener('click',()=>{
    overlay.classList.add('show-overlay');
    loginform.classList.add('show-form');
})
registerbtn.addEventListener('click',()=>{
    overlay.classList.add('show-overlay');
    registerform.classList.add('show-form');
})
// reg_btn.addEventListener('click',()=>{
//     overlay.classList.remove('show-overlay');
//     registerform.classList.remove('show-form');

//     overlay.classList.add('take-overlay');
//     registerform.classList.add('hide-form');

//     overlay.classList.add('show-overlay');
//     loginform.classList.add('show-form');

// })

log_span.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
    registerform.classList.remove('show-form');

    overlay.classList.add('take-overlay');
    registerform.classList.add('hide-form');

    overlay.classList.add('show-overlay');
    loginform.classList.add('show-form');

})
reg_span.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
    loginform.classList.remove('show-form');

    overlay.classList.add('take-overlay');
    loginform.classList.add('hide-form');

    overlay.classList.add('show-overlay');
    registerform.classList.add('show-form');
})
cross1.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
    loginform.classList.remove('show-form');

    overlay.classList.add('take-overlay');
    loginform.classList.add('hide-form');
})
cross2.addEventListener('click',()=>{
    overlay.classList.remove('show-overlay');
    registerform.classList.remove('show-form');
    
    overlay.classList.add('take-overlay');
    registerform.classList.add('hide-form');
})
