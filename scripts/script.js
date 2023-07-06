function display(numero) {
    document.getElementById("visor").value += numero;
}

function simbolo(operacao) {
    document.getElementById("visor").value += operacao;
}

function clean() {
    document.getElementById("visor").value = "";
}

function apagar() {
    var visor = document.getElementById("visor").value;
    var numeroApagado = visor.slice(0, -1);
    document.getElementById("visor").value = numeroApagado;
  }

function calcular() {
    var visor = document.getElementById("visor").value;
    var resultado;

    if (isNaN(eval(visor))) {
        resultado = "Digite uma operação válida";
    } else {
        resultado = eval(visor);
    }

    document.getElementById("visor").value = resultado;
}
