//Funcion para agregar valores
function add(valor) {
    document.getElementById('pantalla').value += valor
}

//Funcion para limpiar la pantalla
function eliminate() {
    document.getElementById('pantalla').value = '';

}

//Funcion para calcular tomando el valor de la pantalla
function calculate() {
    const displayValue = document.getElementById('pantalla').value
    const result = eval(displayValue);
    document.getElementById('pantalla').value = result ;
}