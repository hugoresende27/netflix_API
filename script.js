const botaoOpen = document.querySelector('.openBtn')
const botaoClose = document.querySelector('.closeBtn')
const navs = document.querySelectorAll('.nav')

botaoOpen.addEventListener('click', () => {
    navs.forEach( (e) => e.classList.add('vis'))        //o eventListener para adicionar classe vis no botão open
})

botaoClose.addEventListener('click', () => {            //botao close remove classe vis
    navs.forEach( (e) => e.classList.remove('vis'))
})

