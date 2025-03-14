let entradaUsuario = document.getElementById("entradaUsuario")
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salidaPar")
let numeroEjercicioEsPar = 0

entradaUsuario.addEventListener("input",(evento)=>{
    numeroEjercicioEsPar = evento.target.value
    console.log(numeroEjercicioEsPar)
})

function esPar(entradaFuncion){
    if(entradaFuncion%2==0){
        return "Es par"
    }else{
        return "No es par"
    }
}


btnCalcular.addEventListener("click",()=>{
    resultado = esPar(numeroEjercicioEsPar)
    console.log(resultado)
    let hijo = document.createElement("li")
    hijo.innerHTML = numeroEjercicioEsPar + " " + resultado
    salidaPar.appendChild(hijo)
})