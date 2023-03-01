let nombre = ""
let nota_Definitiva = ""

nombre = prompt("Digite su nombre: ")
nota_Definitiva = parseInt(prompt("Digite la nota"))

if (nota_Definitiva >= 0 && nota_Definitiva <= 2) {
    alert("Deficit de aprendizaje")
}else if(nota_Definitiva >= 2.1 && nota_Definitiva <= 3){
    alert("Debes recuperar")
}else if(nota_Definitiva >= 3.1 && nota_Definitiva <= 4){
    alert("Buen rendimiento")
}else if(nota_Definitiva >= 4.1 && nota_Definitiva <= 5){
    alert("Excelente rendimiento")
}else if(nota_Definitiva >= 5.1){
    alert("Error en la nota, debe ser menos que 5")
}