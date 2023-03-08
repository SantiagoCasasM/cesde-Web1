let nombre
let salario
let id_Departamento
let antiguedad
let departamento
let bono_Antiguedad
let bono_Departamento
let total_Pagar

nombre = prompt("¿Cual es su nombre?")
salario = parseInt(prompt("¿Cual es su salario?"))
id_Departamento = parseInt(prompt("¿Cual es su departamento? Digite entre 1 a 5"))
antiguedad = parseInt(prompt("¿Cual es su antiguedad?"))

if (antiguedad >= 0 <= 5) {
    bono_Antiguedad = salario * 0.10
}else if(antiguedad >= 6 <=10){
    bono_Antiguedad = salario * 0.15
}else if(antiguedad >= 11 <= 15) {
    bono_Antiguedad = salario * 0.20
}else if(antiguedad >= 16 <= 20) {
    bono_Antiguedad = salario * 0.25
}else if (antiguedad >21) {
    bono_Antiguedad = salario * 0.30
}

switch (id_Departamento) {
    case 1:
        departamento = "BackEnd"
        bono_Departamento = salario * 0.40
        total_Pagar = salario + bono_Departamento + bono_Antiguedad
        alert("Su nombre es: "+nombre+" Su salario: "+salario+" Escogió el departamento numero: "+id_Departamento+" Su antiguedad en la empresa es: "+antiguedad+" Su bono por departamento es: "+bono_Departamento+" Su bono por antiguedad es: "+bono_Antiguedad+" Y total a pagar es: "+total_Pagar)
        break;
    case 2:
        departamento = "FrontEnd"
        bono_Departamento = salario * 0.35
        total_Pagar = salario + bono_Departamento + bono_Antiguedad
        alert("Su nombre es: "+nombre+" Su salario: "+salario+" Escogió el departamento numero: "+id_Departamento+" Su antiguedad en la empresa es: "+antiguedad+" Su bono por departamento es: "+bono_Departamento+" Su bono por antiguedad es: "+bono_Antiguedad+" Y total a pagar es: "+total_Pagar)
        break;
    case 3:
        departamento = "Analista"
        bono_Departamento = salario * 0.30
        total_Pagar = salario + bono_Departamento + bono_Antiguedad
        alert("Su nombre es: "+nombre+" Su salario: "+salario+" Escogió el departamento numero: "+id_Departamento+" Su antiguedad en la empresa es: "+antiguedad+" Su bono por departamento es: "+bono_Departamento+" Su bono por antiguedad es: "+bono_Antiguedad+" Y total a pagar es: "+total_Pagar)
        break;
    case 4:
        departamento = "MasterScrum"
        bono_Departamento = salario * 0.35
        total_Pagar = salario + bono_Departamento + bono_Antiguedad
        alert("Su nombre es: "+nombre+" Su salario: "+salario+" Escogió el departamento numero: "+id_Departamento+" Su antiguedad en la empresa es: "+antiguedad+" Su bono por departamento es: "+bono_Departamento+" Su bono por antiguedad es: "+bono_Antiguedad+" Y total a pagar es: "+total_Pagar)
        break;
    case 5:
        departamento = "Administrador"
        bono_Departamento = salario * 0.45
        total_Pagar = salario + bono_Departamento + bono_Antiguedad
        alert("Su nombre es: "+nombre+" Su salario: "+salario+" Escogió el departamento numero: "+id_Departamento+" Su antiguedad en la empresa es: "+antiguedad+" Su bono por departamento es: "+bono_Departamento+" Su bono por antiguedad es: "+bono_Antiguedad+" Y total a pagar es: "+total_Pagar)
        break;
    default:
        break;
}