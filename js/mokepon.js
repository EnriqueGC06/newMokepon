let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    // traer el valor del boton con respecto al id
    let botonMascotaJugador = document.getElementById("boton-mascota")
    // propiedad click con addEventListener y evento con respecto a la funcion
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    //traer el valor de html de los inputs con respecto a los id´s
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    // span para campos dinámicos
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    // .checked para verificar si el valor está seleccionado
    if(inputHipodoge.checked){
        // innerHTML para mainupar y mostrar resultados en el DOM
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else{
        alert("Debes seleccionar una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    // misma lógica de funcion de arriba (seleccionarMascotaJugador) + aleatorio
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// evento para que script corra desde el inicio
window.addEventListener('load', iniciarJuego)