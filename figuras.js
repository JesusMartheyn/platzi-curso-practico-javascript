const PI = Math.PI;
var tipoTriangulo="No Definido";

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado*ladoCuadrado;
} 

function CalculartipoTriangulo (ladoTriangulo1,ladoTriangulo2,baseTriangulo) {

    switch(ladoTriangulo1!=null || ladoTriangulo2!=null || baseTriangulo!=null){

        case (ladoTriangulo1==ladoTriangulo2 && ladoTriangulo1!=baseTriangulo):
            //Triangulo Isoceles: dos de sus lados son iguales
            return tipoTriangulo="Isoceles";
        break;
        
        case (ladoTriangulo1==ladoTriangulo2 && ladoTriangulo1==baseTriangulo):
            //Triangulo Equilatero: Todos sus lados son iguales
            return tipoTriangulo="Equilatero";
        break;

        case (ladoTriangulo1!=ladoTriangulo2 && ladoTriangulo1!=baseTriangulo && ladoTriangulo2!=baseTriangulo):
            //Triangulo Escaleno: Ninguno de sus lados son iguales
            return tipoTriangulo="Escaleno";
        break;
    }
} 

function alturaTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    //c2=a2+b2, donde c es la hipotenusa
    switch(tipoTriangulo){
        case 'Isoceles':
            return Math.sqrt((Number(ladoTriangulo1)**2) - (Number(baseTriangulo/2)**2));
        break;
    }
}

function areaTriangulo (ladoTriangulo1, ladoTriangulo2,baseTriangulo){
    
    switch(tipoTriangulo){

    case 'Isoceles':
        const alturaTrianguloCalculado= alturaTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo);
        return (Number(baseTriangulo)*alturaTrianguloCalculado)/2;
    break;
    
    case 'Equilatero':
        return (Math.sqrt(3)/4)*(Number(ladoTriangulo1)**2);
    break;

    case 'Escaleno':
        const Semiperimetro = (Number(ladoTriangulo1)+Number(ladoTriangulo2)+Number(baseTriangulo))/2;
        return Math.sqrt(Semiperimetro*(Semiperimetro-ladoTriangulo1)*(Semiperimetro-ladoTriangulo2)*(Semiperimetro-baseTriangulo));
    break;
    }
}

function perimetroTriangulo (ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
    return Number(ladoTriangulo1)+Number(ladoTriangulo2)+Number(baseTriangulo);
} 

function perimetroCirculo (radioCirculo){
    return 2*PI*radioCirculo;
}

function areaCirculo(radioCirculo){
    return PI*(radioCirculo*radioCirculo);
}


//Aqui intereactuamos con el HMTL


function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert ("El per??metro del Cuadrado es: "+perimetro+" cm");
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert ("El ??rea del Cuadrado es: "+area+" cm2");
}

function CalcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;

    CalculartipoTriangulo(valueLado1,valueLado2,valueBase);
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert ("El per??metro del Triangulo que es un "+tipoTriangulo+ " es de: "+perimetro+" cm");
}

function CalcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;

    CalculartipoTriangulo(valueLado1,valueLado2,valueBase);
    const area = areaTriangulo(valueLado1,valueLado2,valueBase);
    alert ("El ??rea del Triangulo que es un "+tipoTriangulo+" es de: "+area+" cm2");
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert ("El per??metro del Circulo es: "+perimetro+ " cm");
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert ("El ??rea del Circulo es: "+area+" cm2");
}