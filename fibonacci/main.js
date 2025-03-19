// Función que calcula la secuencia de Fibonacci
function funcionFibo(n) {
    let fibonacci = [0, 1];  

    if (n == 1) {
        return [0];  
    } else if (n == 2) {
        return fibonacci;  
    } else {
        for (let p = 2; p < n; p++) {  
            fibonacci[p] = fibonacci[p - 1] + fibonacci[p - 2];  
        }
        return fibonacci;  
    }
}

// Función que muestra el resultado en el HTML
function mostrarResultado() {
    const n = parseInt(document.getElementById("numero").value);  
    if (isNaN(n) || n <= 0) {
        alert("Por favor ingresa un número entero positivo.");
        return;
    }
    const resultado = funcionFibo(n);  
    document.getElementById("resultado").textContent = "Fibonacci hasta el número " + n + ": " + resultado.join(", ");

    const gifContainer = document.getElementById("gif-container");
    const gifImage = document.getElementById("gif");
    
}