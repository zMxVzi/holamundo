//condicionales if-else
var a=10,b=12;
if (a>b) {
    document.write("El numero mayor es: " + a);
}else{
    document.write("El numero mayor es: " + b);

}


for (let i = 0; i < 11; i++) {
    document.writeln(i)
    
}
var j=0;
while (j<11) {
    document.writeln("<br>"+" "+j)
    j++;
}

var f=0;
do {
    document.writeln("<br>"+" "+f)
    f++;
} while (f<11);

var alumno=1
switch (alumno) {
    case 1:
        document.write("Eres Hijo");
        break;
    case 2:
        document.write("Eres hija");
        break:
    case 3:
        document.write("Eres padre");
        break:
    case 4:
        document.write("Eres madre");
        break:

    default:
        document.write("Opcion no valida");
        break;
}