let placa = ""
let usuario = ""
let valor_hora = 1200
let nro_Horas = 0
let descuento = 0
let total_Pagar = 0

usuario = prompt("Digite que el tipo de usuario del cliente: Estudiante, Empleado, Particular")
placa = prompt("Digite su placa: ")
nro_Horas = prompt("¿Cuantas horas se quedo el cliente?")

if(usuario === "Estudiante"){
    if(nro_Horas >= 5){
        descuento = nro_Horas * valor_hora * 0.20
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
    }else (nro_Horas <= 4.9 )
        descuento = nro_Horas * valor_hora * 0.10
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
}
if(usuario === "Empleado"){
    if(nro_Horas >= 10){
        descuento = nro_Horas * valor_hora * 0.15
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
    }else (nro_Horas <= 9.9 )
        descuento = nro_Horas * valor_hora * 0.5
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
}
if(usuario === "Particular"){
    if(nro_Horas >= 4){
        descuento = nro_Horas * valor_hora * 0.10
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
    }else (nro_Horas <= 3.9 )
        descuento = nro_Horas * valor_hora * 0.3
        total_Pagar = nro_Horas * valor_hora - descuento
        alert("El usuario con placa: "+ placa +" Este es el total a pagar: "+ total_Pagar)
}