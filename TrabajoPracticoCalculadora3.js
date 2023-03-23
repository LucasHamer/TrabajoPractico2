const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    const resultad = document.getElementById("resultado");

    let operacion = evento.submitter.id;

    if (operacion === "sumar") {
        resultad.innerHTML = "<br>" + (parseInt(numero1) + parseInt(numero2));
    } else if (operacion === "restar") {
        resultad.innerHTML = "<br>" + (numero1 - numero2);
    } else if (operacion === "multiplicar") {
        resultad.innerHTML = "<br>" + (numero1 * numero2);
    } else if (operacion === "dividir") {
        if (numero2 == 0) {
            alert("No se puede dividir por cero");
        } else {
            resultad.innerHTML = "<br>" + (numero1 / numero2).toFixed(2);
        }
    }

});
