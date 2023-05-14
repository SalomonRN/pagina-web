
var total = 0;
var precios_venta = {
    Kia_Picanto: 46800000,
    Spark_GT: 32000000,
    Beat_Chevrolet: 35000000,
    Chevrolet_sail: 40000000,
    Mazda_cx50: 200000000,
    Logan_Life: 65000000,
    Bolt_EUV: 207000000,
    JOY_2024: 64000000,
    Nissan_March: 63000000,
    MUSTANG_GT: 24500000

};
var precios_renta = {
    Kia_Picanto: 80000,
    Spark_GT: 60000,
    Beat_Chevrolet: 65000,
    Chevrolet_sail: 75000,
    Mazda_cx50: 150000,
    Logan_Life: 90000,
    Bolt_EUV: 170000,
    JOY_2024: 85000,
    Nissan_March: 80000,
    MUSTANG_GT: 100000
};
var carros_stock = {
    Kia_Picanto: 5,
    Spark_GT: 4,
    Beat_Chevrolet: 2,
    Chevrolet_sail: 3,
    Mazda_cx50: 8,
    Logan_Life: 3,
    Bolt_EUV: 5,
    JOY_2024: 3,
    Nissan_March: 4,
    MUSTANG_GT: 1
};
/**
 * Esta funcion es para comprobar si hay vehiculos disponibles, tanto para comprar o para alquilar
 * Funcion 1
 */
verificar_disponibilidad = (veh) => {
    switch (veh) {
        case "Kia_Picanto":
            if (carros_stock.Kia_Picanto >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Spark_GT":
            if (carros_stock.Spark_GT >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Beat_Chevrolet":
            if (carros_stock.Beat_Chevrolet >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Chevrolet_sail":
            if (carros_stock.Chevrolet_sail >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Mazda_cx50":
            if (carros_stock.Mazda_cx50 >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Logan_Life":
            if (carros_stock.Logan_Life >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Bolt_EUV":
            if (carros_stock.Bolt_EUV >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "JOY_2024":
            if (carros_stock.JOY_2024 >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "Nissan_March":
            if (carros_stock.Nissan_March >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        case "MUSTANG_GT":
            if (carros_stock.MUSTANG_GT >= 1) {
                resul = precio_final(veh);
                if (resul != "Por favor, ingresa fechas válidas.") {
                    alert(`Precio de renta ${resul}`)
                    res = confirm("Seguro de alquilarlo?")
                    if (res) { adquirido(veh) }
                    else alert("Fin de esto")
                } else alert(resul)

            } else {
                alert("Carro no disponible")
            }
            break;
        default:
            break;

    }
}

/**
 * Para pintar en precio final del alquiler
 * Funcion 2
 */
precio_final = (veh) => {
    hrs = calcularDias();
    if (hrs != 'Por favor, ingresa fechas válidas.') {
        switch (veh) {
            case "Kia_Picanto":
                return total = precios_renta.Kia_Picanto * hrs;

            case "Spark_GT":
                return total = precios_renta.Spark_GT * hrs;

            case "Beat_Chevrolet":
                return total = precios_renta.Beat_Chevrolet * hrs;

            case "Chevrolet_sail":
                return total = precios_renta.Chevrolet_sail * hrs;

            case "Mazda_cx50":
                return total = precios_renta.Mazda_cx50 * hrs;
            /**/
            case "Logan_Life":
                return total = precios_renta.Logan_Life * hrs;

            case "Bolt_EUV":
                return total = precios_renta.Bolt_EUV * hrs;

            case "JOY_2024":
                return total = precios_renta.JOY_2024 * hrs;

            case "Nissan_March":
                return total = precios_renta.Nissan_March * hrs;

            case "MUSTANG_GT":
                return total = precios_renta.MUSTANG_GT * hrs;

            default:
                break;

        }
    } else return hrs

}

/**
 * Para descontar el número total de carros disponibles 
 */
adquirido = (veh) => {
    switch (veh) {
        case "Kia_Picanto":
            carros_stock.Kia_Picanto -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Spark_GT":
            carros_stock.Spark_GT -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Beat_Chevrolet":
            carros_stock.Beat_Chevrolet -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Chevrolet_sail":
            carros_stock.Chevrolet_sail -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Mazda_cx50":
            carros_stock.Mazda_cx50 -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Logan_Life":
            carros_stock.console.Logan_Life -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Bolt_EUV":
            carros_stock.Bolt_EUV -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "JOY_2024":
            carros_stock.JOY_2024 -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        case "Nissan_March":
            carros_stock.Nissan_March -= 1;
            alert("Ya puede reclamar el carro con el IasdsaD:" + generarID() + ` Cantidad${carros_stock.Nissan_March}`)
            break;

        case "MUSTANG_GT":
            carros_stock.MUSTANG_GT -= 1;
            alert("Ya puede reclamar el carro con el ID:" + generarID())
            break;

        default:
            break;

    }
}

generarID = () => {
    caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    id = '';

    for (let i = 0; i < 8; i++) {
        randomIndex = Math.floor(Math.random() * caracteres.length);
        id += caracteres.charAt(randomIndex);
    }

    return id;
}

calcularDias = () => {
    fechaInicio = new Date(document.getElementById('fechaInicio').value);
    fechaFin = new Date(document.getElementById('fechaFin').value);

    // Verificar que las fechas sean válidas
    if (fechaInicio && fechaFin && fechaInicio <= fechaFin) {
        unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
        diferenciaDias = Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
        document.getElementById('resultado').textContent = `La cantidad de días entre las fechas es: ${diferenciaDias}`;
        return diferenciaDias

    } else {
        return 'Por favor, ingresa fechas válidas.';
    }
}

imagen = () => {
    let Kia_Picanto = document.getElementById('1')
    let Spark_GT = document.getElementById('2')
    let Beat_Chevrolet = document.getElementById('3')
    let Chevrolet_sail = document.getElementById('4')
    let Mazda_cx50 = document.getElementById('5')
    let Logan_Life = document.getElementById('6')
    let Bolt_EUV = document.getElementById('7')
    let JOY_2024 = document.getElementById('8')
    let Nissan_March = document.getElementById('9')
    let MUSTANG_GT = document.getElementById('10')
    //
    if (document.getElementById("carr").value == "KIA") {
        Kia_Picanto.style.display = "block";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "SGT") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "block";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "BEC") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "block";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "CHS") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "block";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "MZC") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "block";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "LGL") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "block";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "EUV") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "block";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "JOY") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "block";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "NSM") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "block";
        MUSTANG_GT.style.display = "none";

    }
    if (document.getElementById("carr").value == "MGT") {
        Kia_Picanto.style.display = "none";
        Spark_GT.style.display = "none";
        Beat_Chevrolet.style.display = "none";
        Chevrolet_sail.style.display = "none";
        Mazda_cx50.style.display = "none";
        Logan_Life.style.display = "none";
        Bolt_EUV.style.display = "none";
        JOY_2024.style.display = "none";
        Nissan_March.style.display = "none";
        MUSTANG_GT.style.display = "block";

    }


}

alquilar = () => {
    if (document.getElementById("carr").value == "KIA") {
        verificar_disponibilidad("Kia_Picanto")
    }
    if (document.getElementById("carr").value == "SGT") {
        verificar_disponibilidad("Spark_GT")
    }
    if (document.getElementById("carr").value == "BEC") {
        verificar_disponibilidad("Beat_Chevrolet")
    }
    if (document.getElementById("carr").value == "CHS") {
        verificar_disponibilidad("Chevrolet_sail")
    }
    if (document.getElementById("carr").value == "MZC") {
        verificar_disponibilidad("Mazda_cx50")
    }
    if (document.getElementById("carr").value == "LGL") {
        verificar_disponibilidad("Logan_Life")
    }
    if (document.getElementById("carr").value == "EUV") {
        verificar_disponibilidad("Bolt_EUV")
    }
    if (document.getElementById("carr").value == "JOY") {
        verificar_disponibilidad("JOY_2024")
    }
    if (document.getElementById("carr").value == "NSM") {
        verificar_disponibilidad("Nissan_March")
    }
    if (document.getElementById("carr").value == "MGT") {
        verificar_disponibilidad("MUSTANG_GT")
    }
}

comprar_veh = () => {
    if (document.getElementById("carr").value == "KIA") {
        if (carros_stock.Kia_Picanto >= 1) {
            alert(precios_venta.Kia_Picanto)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Kia_Picanto")
            } else alert("Fin de esto")
        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "SGT") {
        if (carros_stock.Spark_GT >= 1) {
            alert(precios_venta.Spark_GT)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Spark_GT")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "BEC") {
        if (carros_stock.Beat_Chevrolet >= 1) {
            alert(precios_venta.Beat_Chevrolet)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Beat_Chevrolet")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "CHS") {
        if (carros_stock.Chevrolet_sail >= 1) {
            alert(precios_venta.Chevrolet_sail)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Chevrolet_sail")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "MZC") {
        if (carros_stock.Mazda_cx50 >= 1) {
            alert(precios_venta.Mazda_cx50)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Mazda_cx50")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "LGL") {
        if (carros_stock.Logan_Life >= 1) {
            alert(precios_venta.Logan_Life)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Logan_Life")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "EUV") {
        if (carros_stock.Bolt_EUV >= 1) {
            alert(precios_venta.Bolt_EUV)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Bolt_EUV")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "JOY") {
        if (carros_stock.JOY_2024 >= 1) {
            alert(precios_venta.JOY_2024)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("JOY_2024")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "NSM") {
        if (carros_stock.Nissan_March >= 1) {
            alert(precios_venta.Nissan_March)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("Nissan_March")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
    if (document.getElementById("carr").value == "MGT") {
        if (carros_stock.MUSTANG_GT >= 1) {
            alert(precios_venta.MUSTANG_GT)
            ress = confirm("Seguro?")
            if (ress) {
                adquirido("MUSTANG_GT")
            } else alert("Fin de esto")

        } else {
            alert("Carro no disponible.")
            return
        }
    }
}
