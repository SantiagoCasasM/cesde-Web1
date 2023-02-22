let numeroDia;

numeroDia = parseInt(prompt("¿Cual numero de la semana quiere saber? Entre 1 y 7"))

if(numeroDia >0 && numeroDia <8){
    if(numeroDia === 1){
        alert("Lunes")
    }else if(numeroDia ===2){
        alert("Martes")
    }else if(numeroDia ===3){
        alert("Miercoles")
    }else if(numeroDia ===4){
        alert("Jueves")
    }else if(numeroDia ===5){
        alert("Viernes")
    }else if(numeroDia ===6){
        alert("Sabado")
    }else if(numeroDia ===7){
        alert("Domingo")
    }
}else{
    alert("Debe escribir un numero del 1 al 7")
}