const amountScroll = document.getElementById('amount-scroll')
const advanceBar = document.getElementById('advance-bar')

const changeRGB = document.getElementById('rgb-color')
const changeCMYK = document.getElementById('cmyk-color')




//scrollY: cuántos px se ha desplazado el usuario verticalmente desde arriba.
//innerHeight: alto visible de la ventana del navegador
//.scrollHeight: alto total del contenido de la página

amountScroll.textContent = `Scroll se ha desplazado 0px`

const calculateScroll = () => {
    let calculateScroll = Math.floor(window.scrollY)
    amountScroll.textContent = `Scroll se ha desplazado ${calculateScroll}px`
    // advanceBar.setProperty('--ancho-barra', '100%')
    
}
document.addEventListener('scroll', calculateScroll)

const aleatoryNumberRGB = Math.floor(Math.random()*255)
const aleatoryNumberCMYK = Math.floor(Math.random()*100)


const aleatoryRGB = () => {
    const rootStyles = document.documentElement.style.setProperty('--color-fondo', 'rgb(aleatoryNumber, aleatoryNumber, aleatoryNumber)')
}
changeRGB.addEventListener('click', aleatoryRGB)

const rootStyles = document.documentElement.style

const aleatoryCMYK = () => {
    rootStyles.setProperty('--color-fondo', 'rgb(aleatoryNumber, aleatoryNumber, aleatoryNumber)')
}
changeRGB.addEventListener('click', aleatoryCMYK)