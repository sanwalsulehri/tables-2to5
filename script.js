let SideBar = document.querySelector('.sideBar')
let hamBurger = document.querySelector(".hamBurger")
let overlay = document.querySelector(".overlay")

hamBurger.addEventListener('click', ()=>{
    SideBar.classList.remove('hidden')
})

overlay.addEventListener('click', ()=>{
    SideBar.classList.add('hidden')
})