function generarNumeros() {
    const lista = document.getElementById('numero-lista');  
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li'); 
        let resultado = '';

        if (i % 3 === 0 && i % 5 === 0) {
            resultado = 'FizzBuzz';  
        } else if (i % 3 === 0) {
            resultado = 'Fizz';  
        } else if (i % 5 === 0) {
            resultado = 'Buzz';  
        } else {
            resultado = i; 
        }

        li.textContent = resultado;  
        lista.appendChild(li);  
    }
}

document.addEventListener('DOMContentLoaded', generarNumeros);