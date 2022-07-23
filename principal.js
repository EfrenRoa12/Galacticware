const formulario = document.getElementById('form')//desde consola probamos formulario y listo
formulario//en consola


formulario.addEventListener('submit', function(){
    let maill = document.getElementById('email-form').value
    console.log(maill)
})






//en caso de que no podemos ver en console hacemos lo siguiente prque todavia no se encuantra en un servidor

const formulario = document.getElementById('form')//desde consola probamos formulario y listo
formulario//en consola


formulario.addEventListener('submit', function(e){

    e.preventDefault()
    let maill = document.getElementById('email-form').value
    console.log(maill)
})