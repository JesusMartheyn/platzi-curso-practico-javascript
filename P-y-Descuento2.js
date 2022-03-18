//P*(100-D)/100     ecuación para calcular descuesto

const coupons = [
    {name:"Regular", discount:10,},
    {name:"Bomba", discount:20,},
    {name:"Cachon", discount:30,}
];

function calculoDescuentoCupon(Cupondescuento){

    const isCouponValueValid = function (coupons){
        return coupons.name === Cupondescuento;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
        alert("El cupón "+Cupondescuento+" no es valido")
    }else{
        const porcentajeDescuento=userCoupon.discount;
        return porcentajeDescuento;
    }
    
}

function PrecioConDescuento (precioOriginal,descuento){
    const porcentajePrecioConDescuento= (precioOriginal*(100-descuento))/100;
    return porcentajePrecioConDescuento;
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