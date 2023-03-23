const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    const copiados = document.getElementById("numeros");
    copiados.innerHTML = "<br>Numero 1: " + numero1 + "<br>Numero 2: " + numero2;

});
