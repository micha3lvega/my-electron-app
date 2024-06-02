h1 = document.getElementById('h1-hello')

// Cambiamos el texto del h1 después de 2 segundos
setTimeout(() => {
    h1.textContent = '¡Hola mundo!';
}, 2000);