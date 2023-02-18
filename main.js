// Contador

let contador = 0;

document.getElementById('sumar').onclick = function () {
    contador += 1;
    document.getElementById('contador').innerHTML = contador;
}

document.getElementById('restar').onclick = function () {
    contador -= 1;
    document.getElementById('contador').innerHTML = contador;
}

document.getElementById('reset').onclick = function () {
    contador = 0;
    document.getElementById('contador').innerHTML = contador;
}