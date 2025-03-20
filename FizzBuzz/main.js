function generarNumeros() {
    const lista = document.getElementById('numero-lista');  
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li'); 
        let resultado = '';

        if (i % 3 === 0 && i % 5 === 0) {
            resultado = 'FizzBuzz';
            li.classList.add('fizzbuzz');  
        } else if (i % 3 === 0) {
            resultado = 'Fizz';  
            li.classList.add('fizz')
        } else if (i % 5 === 0) {
            resultado = 'Buzz';  
            li.classList.add('buzz')
        } else {
            resultado = i; 
        }

        li.textContent = resultado;  
        lista.appendChild(li);  
    }
}

document.addEventListener('DOMContentLoaded', generarNumeros);