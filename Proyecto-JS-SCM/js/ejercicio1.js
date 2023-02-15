/* Crear un programa Js, donde se visualice el nombre de un producto,
 su valor unidad, el precio y calcule
    Subtotal
    Descuento del 25%
    Iva del 19%
    Neto a pagar
    Mostrar todos los datos*/

let nom_Producto
let val_Unidad
let pre_Unidad
let sub_Total
let descuento
let net_Pagar
let iva

nom_Producto = (prompt("Digite el nombre del producto"))
val_Unidad = parseInt(prompt("Digite cuantas unidades"))
pre_Unidad = parseInt(prompt("Digite precio unidad"))

sub_Total = val_Unidad * pre_Unidad
descuento = sub_Total * 0.25
iva = sub_Total - descuento * 0.19
net_Pagar = sub_Total - descuento + iva

alert("Este es el nombre: "+nom_Producto+", Su valor por unidad: "+pre_Unidad+", Este es valor total a pagar: "+net_Pagar)

