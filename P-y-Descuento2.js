//P*(100-D)/100     ecuación para calcular descuesto

const coupons = [
    "Regular",
    "Bomba",
    "Cachon",
];

function calculoDescuentoCupon(Cupondescuento){
    var porcentajeDescuento=0;

    if(!coupons.includes(Cupondescuento)){
        alert("El cupón "+Cupondescuento+" no es valido")
    }

    switch (Cupondescuento){
        case coupons[0]: porcentajeDescuento =10;
        break;

        case coupons[1]: porcentajeDescuento=20;
        break;

        case coupons[2]: porcentajeDescuento=30;
        break;
    }
    console.log(porcentajeDescuento);
    return porcentajeDescuento;
}

function PrecioConDescuento (precioOriginal,descuento){

    if(!precioOriginal){
        alert("El campo de precio original debe ser diligenciado")
    } 
    else {
        const porcentajePrecioConDescuento= (precioOriginal*(100-descuento))/100;
        return porcentajePrecioConDescuento;
    }
    
}


//interacción con el html


function CalcularPrecioConDescuento(){
    const precioInicial = document.getElementById("precio-inicial-producto");
    const precioOriginal = precioInicial.value;
    const codigoCupon = document.getElementById("codigo-cupon");
    const Cupondescuento = codigoCupon.value;

    if(!precioOriginal || !codigoCupon){
        alert("Uno o más campos no están diligenciados")
    } 

    else {
        const descuentoAplicar = calculoDescuentoCupon(Cupondescuento);
        const precioFinal = PrecioConDescuento(precioOriginal,descuentoAplicar);

        const resultadoPrecioFinal = document.getElementById("precio-con-descuento");
        resultadoPrecioFinal.innerText ="El precio del producto con el descuento del "+descuentoAplicar+" % aplicado es de: "+precioFinal+" USD";
    }
}