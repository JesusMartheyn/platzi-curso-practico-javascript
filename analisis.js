//funciones helper

function isPar (largoLista){
    return (largoLista % 2 ===0)   
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista=sumaLista/(lista.length);
    return promedioLista;
}

//calculadora Mediana

function medianaSalarios(lista){

    const mitad = parseInt(lista.length/2);

    if(isPar(lista.length)){    
        const personaMitad1=lista[mitad];
        const personaMitad2=lista[mitad-1];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    }else{
        const personaMitad =lista[mitad];
        return personaMitad;
    }
    
}

//Mediana General

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

//Mediana Top10Col
const spliceStart =parseInt((salariosColSorted.length*(100-10))/100);
const spliceCount =salariosColSorted.length -spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

medianaGeneralCol=medianaSalarios(salariosColSorted);
medianaTop10Col=medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});