let Entrada = document.getElementById("entrada")
let Calcular = document.getElementById("Calcular")
let salida = document.getElementById("salida")
let multiplo1 = document.getElementById("multiplo1")
let multiplo2 = document.getElementById("multiplo2")
let multiplo3 = document.getElementById("multiplo3")
let multiplo4 = document.getElementById("multiplo4")
let numeroEjercicio = 0

function esMultiplo1(Entrada){
    if(Entrada%3==0){
        return "Es multiplo"
    }else{
        return "No es multiplo"
    }
}

Calcular.addEventListener("click",()=>{
    resultado = esMultiplo1(numeroEjercicio)
    console.log(resultado)
    let hijo = document.createElement("li")
    hijo.innerHTML =  Entrada + " " + resultado
    salida.appendChild(hijo)
})