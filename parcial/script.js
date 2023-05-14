function calcular() {
    tipo = document.getElementById("tipo").value;
    tipo == "AREA" ? calcular_area() : calcular_perimetro();

}
function confirmar() {
    let radio = document.getElementById('1')
    let base = document.getElementById('2')
    let altura = document.getElementById('3')
    let lado1 = document.getElementById('4')
    let base_mayor = document.getElementById('5')
    let base_menor = document.getElementById('6')
    let diagonal_mayor = document.getElementById('7')
    let diagonal_menor = document.getElementById('8')
    let lado2 = document.getElementById('9')
    let lado3 = document.getElementById('10')
    let lado4 = document.getElementById('11')

    if (document.getElementById("tipo").value == "AREA") {
        if (document.getElementById("fig").value == "CIR") {

            //
            radio.style.display = 'block';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'none';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }

        if (document.getElementById("fig").value == "TRG") {

            radio.style.display = 'none';
            base.style.display = 'block';
            altura.style.display = 'block';
            lado1.style.display = 'none';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }
        if (document.getElementById("fig").value == "CDR") {


            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }
        if (document.getElementById("fig").value == "TPC") {

            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'block';
            lado1.style.display = 'none';
            base_mayor.style.display = 'block';
            base_menor.style.display = 'block';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }
        if (document.getElementById("fig").value == "RMB") {

            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'none';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'block';
            diagonal_menor.style.display = 'block';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }
        if (document.getElementById("fig").value == "REC") {

            //
            radio.style.display = 'none';
            base.style.display = 'block';
            altura.style.display = 'block';
            lado1.style.display = 'none';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';

        }
    } else {
        //PERIMETRO
        if (document.getElementById("fig").value == "CIR") {

            //
            radio.style.display = 'block';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'none';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
            lado4.style.display = 'none';
        }

        if (document.getElementById("fig").value == "TRG") {


            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'block';
            lado3.style.display = 'block';
            lado4.style.display = 'none';
        }
        if (document.getElementById("fig").value == "CDR") {


            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'none';
            lado3.style.display = 'none';
        }
        if (document.getElementById("fig").value == "TPC") {


            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'block';
            lado3.style.display = 'block';
            lado4.style.display = 'block';

        }
        if (document.getElementById("fig").value == "RMB") {

            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'block';
            lado3.style.display = 'block';
            lado4.style.display = 'block';

        }
        if (document.getElementById("fig").value == "REC") {
            //
            radio.style.display = 'none';
            base.style.display = 'none';
            altura.style.display = 'none';
            lado1.style.display = 'block';
            base_mayor.style.display = 'none';
            base_menor.style.display = 'none';
            diagonal_mayor.style.display = 'none';
            diagonal_menor.style.display = 'none';
            lado2.style.display = 'block';
            lado3.style.display = 'none';
            lado4.style.display = 'none';
        }
    }

}

function calcular_area() {
    figura = document.getElementById("fig").value
    radio = document.getElementById("1").value
    base = document.getElementById('2').value
    altura = document.getElementById('3').value
    lado = document.getElementById('4').value
    base_mayor = document.getElementById('5').value
    base_menor = document.getElementById('6').value
    diagonal_mayor = document.getElementById('7').value
    diagonal_menor = document.getElementById('8').value

    switch (figura) {
        case "CIR":
            area = Math.PI * Math.pow(radio, 2)
            break;

        case "TRG":

            area = (base * altura) / 2
            break;

        case "CDR":

            area = lado * lado
            break;

        case "TPC":
        console.log("BMY", base_mayor, "BMR", base_menor, "ALTURA", altura)
            area = ((parseInt(base_mayor) + (parseInt(base_menor))))/2 
            area = area *altura
            break;

        case "RMB":


            area = (diagonal_mayor * diagonal_menor) / 2
            break;

        case "REC":


            area = base * altura
            break;

    }
    document.getElementById("resultado").innerText = area
}

function calcular_perimetro() {
    figura = document.getElementById("fig").value

    let radio = document.getElementById('1').value
    let lado1 = document.getElementById('4').value
    let lado2 = document.getElementById('9').value
    let lado3 = document.getElementById('10').value
    let lado4 = document.getElementById('11').value
    switch (figura) {
        case "CIR":
            perimetro = 2 * Math.PI * radio
            break;

        case "TRG":
            alert("TRIA")
            perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
            break;

        case "CDR":
            perimetro = lado * 4
            break;

        case "TPC":

            perimetro = lado1 + lado2 + lado3 + lado4
            break;

        case "RMB":

            perimetro = lado1 + lado2 + lado3 + lado4
            break;

        case "REC":

            perimetro = lado1 + lado1 + lado2 + lado2
            break;

    }
    document.getElementById("resultado").innerText = perimetro

}