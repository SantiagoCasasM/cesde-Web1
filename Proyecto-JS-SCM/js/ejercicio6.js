let vlr_Matricula;
let estrato;
let beca;
let total_Pagar;

vlr_Matricula = parseInt(prompt("Escriba el valor de su matricula"))
switch (vlr_Matricula){
    case vlr_Matricula:
        vlr_Matricula < 1000000
        estrato = 1
        beca = vlr_Matricula * 0.90
        total_Pagar = vlr_Matricula - beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
    case vlr_Matricula:
        vlr_Matricula >1100000 <=1500000
        estrato = 2
        beca = vlr_Matricula * 0.80
        total_Pagar = vlr_Matricula - beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
    case vlr_Matricula:
        vlr_Matricula >1600000 <=2000000
        estrato = 3
        beca = vlr_Matricula * 0.70
        total_Pagar = vlr_Matricula - beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
    case vlr_Matricula:
        vlr_Matricula >2000000 <=2500000
        estrato = 4
        beca = vlr_Matricula * 0.60
        total_Pagar = vlr_Matricula - beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
    case vlr_Matricula:
        vlr_Matricula >2600000 <=3000000
        estrato = 5
        beca = vlr_Matricula * 0.10
        total_Pagar = vlr_Matricula + beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
    case vlr_Matricula:
        vlr_Matricula >3100000
        estrato = 6
        beca = vlr_Matricula * 0.20
        total_Pagar = vlr_Matricula + beca; 
        alert("Valor total a pagar: "+total_Pagar)
    break;
}