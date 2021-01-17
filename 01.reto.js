var lit= +prompt("Ingrese los litros")

var PreGal=+prompt("Ingrese precio por galon")


function convertir(){
   var TG = lit/3.785
   var GA = TG*PreGal
   return GA

}

var GA= convertir()
console.log("la ganancia en día es " +GA)
