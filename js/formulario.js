/*
var n1=parseInt(prompt("Ingresa un numero")),n2=parseInt(prompt("Ingresa un numero"));
calcularSuma(n1,n2);
function calcularSuma(n1,n2) {
    let suma= n1 + n2;
    alert(suma);
}

let nombre=prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
document.write("Hola "+nombre);
document.write("Tu edad es: "+edad); */
function suma(n1,n2) {
   /* let nu1,nu2;
    nu1 = parseFloat(n1);
    nu2 = parseFloat(n2);*/
    let sum = parseFloat(n1) + parseFloat(n2);
    //alert("La suma es: " +sum);
    document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}
function resta(nr1,nr2) {
    let res = nr1 - nr2;
    alert("La resta es: "+res)
    
}
function multiplicacion(nm1,nm2) {
    let mul = nm1 * nm2;
    alert("La multiplicación es: "+ mul)
    
}
function division(nd1,nd2) {
    let div = nd1 / nd2;
    alert("La division es: "+ div)
    
}
