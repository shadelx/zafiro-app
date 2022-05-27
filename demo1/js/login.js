const loginMenu = document.querySelector('.login-menu')
const loginBtn = document.querySelector('.btn-login')


loginBtn.addEventListener('click', () =>{
    loginMenu.classList.toggle("open-menu")
})

window.addEventListener('click', e =>{
    if(loginMenu.classList.contains('open-menu') && e.target != loginMenu && e.target != loginBtn){
        loginMenu.classList.toggle('open-menu')
    }
})