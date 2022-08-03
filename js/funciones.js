let carPrice= parseInt(prompt("Ingrese el precio de su vehiculo"))
let origen= prompt("Es importado?")
function calcularCuota(precio){
    if (origen === "si") {return precio*0.008;}
    else {
        return precio*0.005;
    }
}
alert ("La cuota a pagar por mes es de:" + calcularCuota(carPrice))
let metodoDePago=prompt("Ingrese el metodo de pago que desea utilizar: debito/credito/transferencia/efectivo")
switch (metodoDePago.toLowerCase()){
    case "debito":
        console.log("Sin problema, debera acercarse a la oficina")
        break
    case "credito":
        console.log("Tendra un recargo del 15%, debera acercarse a la oficina")
        break
    case "efectivo":
        console.log("Tendra un descuento del 10%, debera acercarse a la oficina")
        break
    case "transferencia":
        console.log("Por el momento no trabajamos con transferencia")
    default:
        console.warn("Algo salio mal, recargue la pagina y vuelva a intentarlo. REVISE LA ORTOGRAFIA")
}