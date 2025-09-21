// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación: solo strings, no vacío, no números
    if (!nombre || !isNaN(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras).');
        input.value = '';
        input.focus();
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarAmigos();
        document.getElementById('resultado').innerHTML = ''; // Borra el resultado anterior
        input.value = '';
        input.focus();
    } else {
        alert('Ese nombre ya está en la lista.');
        input.value = '';
        input.focus();
    }
}
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para sortear.');
        return;
    }

    // Genera el sorteo
    let copia = [...amigos];
    let resultado = [];
    amigos.forEach(amigo => {
        let posibles = copia.filter(a => a !== amigo);
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(`${amigo} → ${elegido}`);
        copia = copia.filter(a => a !== elegido);
    });

    mostrarResultado(resultado);

    // Permite hacer otro sorteo con la lista actual
    // Si agregas más amigos, el sorteo se actualiza con los nuevos
}

function mostrarResultado(resultado) {
    const lista = document.getElementById('resultado');
    lista.innerHTML = '';
    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}
