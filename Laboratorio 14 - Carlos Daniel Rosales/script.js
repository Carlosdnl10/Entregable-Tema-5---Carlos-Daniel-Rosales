const modEstilos=()=>{
    const elemento=document.getElementById('titulo2')
    elemento.style.color='blue'
    elemento.style.fontSize='30px'
    enlace.href= './Styles.css'
}

document.addEventListener('DOMContentLoaded', function(){
    const button=document.getElementById ('changeTextButton')
    button.addEventListener('Click',function(){
        const introSection=document.getElementById('intro')
        introSection.innerHTML='<p> El texto ha cambiado despues de hacer click en el botón </p>'
    })
})