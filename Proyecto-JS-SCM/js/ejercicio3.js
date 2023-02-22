// Nombre empleado
// Poner el salario
// Horas trabajadas mes (240 horas)
// Extras, si trabajo horas extras preguntar cuantas horas extras trabajo
// Calcular horas extras (35%)
// Bonos, si no trabajo horas extras 20 mil, si tiene horas extras 35%
// *** PARA SABER EL VALOR DEL SALARIO SE CALCULA SALARIO/240

let nombre;
let salario;
let h_Trabajadas;
let h_Extras;
let bonos;
let neto_Pagar;
let valor_Hora;

nombre = (prompt("¿Cual es su nombre?"));
salario = parseInt(prompt("¿Cual es su salario?"));
h_Trabajadas = parseInt(prompt("¿Cuantas horas trabajadas hizo?"));
h_Extras = parseInt(prompt("¿Cuantas horas extras trabajo?"));

valor_Hora = salario / 240;

if(h_Extras > 0){
    h_Extras = h_Extras * valor_Hora * 0.35
}

if(h_Extras > 0){
    bonos = h_Extras
}else{
    bonos = 20000
}

neto_Pagar = salario + h_Extras + bonos;
alert("Sr "+nombre+" Su total a pagar es el siguiente: "+neto_Pagar)
