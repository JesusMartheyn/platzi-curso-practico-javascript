const lista2 = [
100,
200,
500,
400000000,
]



function isPar(numerito){
    if(numerito % 2===0){
        return true;
    }else{
        return false;
    }
}


function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista=sumaLista/(lista.length);
    return promedioLista;
}


function calcularMediana (lista){
    let mediana;
    const mitadLista = parseInt (lista.length/2);
    lista.sort();
    console.log("lista organizada "+lista);

    if (isPar(lista.length)){
        const elemento1=lista[mitadLista];
        const elemento2=lista[mitadLista-1];
        mediana = calcularMediaAritmetica([elemento1,elemento2]);
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}



