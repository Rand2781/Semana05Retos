TI = prompt("Ingrese tipo de hamburguesa : ")
N = +prompt("Ingrese cantidad de hamburguesas: ")
TP = prompt("Ingrese tipo de pago: ")
CA=0.05
TO=0

if(TI == "sencilla"){
    if(TP=="efectivo"){
    PA = 20
    var TOT = PA*N
    
    }
    else{
    PA=20
    var TO= PA*N
    var TOT= TO+(TO*CA)
}

}
else if(TI=="doble"){
    if(TP=="efectivo"){
    PA = 25
    var TOT = PA*N

    }
    else{
    PA=25
    var TO= PA*N    
    var TOT= TO+(TO*CA)
}
}
else if(TI==="triple"){
    if(TP=="efectivo"){
    PA = 28
    var TOT= PA*N

    }
    else{
    PA=28    
    var TO = PA*N
    var TOT= TO+(TO*CA)}
}

console.log("El total a pagar es: " + TOT)