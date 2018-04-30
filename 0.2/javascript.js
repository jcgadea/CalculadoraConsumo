function masDatos(){

    var estado = document.getElementById("oculto").style.display;

    if(estado == "none"){

        document.getElementById("oculto").style.display = "block";

    }else{

        document.getElementById("oculto").style.display = "none";

    }
    
}

function aCero() {

    var euKm = document.getElementById("euKm");
    var euMes = document.getElementById("euMes");

    euKm.innerHTML = "0.00€ /Km";
    euMes.innerHTML = "0.00€ /Mes";

    document.getElementById("totalCostes").innerHTML = "0.00";
    document.getElementById("totalSeguros").innerHTML = "0.00";
    document.getElementById("totalImpuestos").innerHTML =  "0.00";
    document.getElementById("precioCombus").innerHTML =  "0.00";
    document.getElementById("precioTotal").innerHTML =  "0.00";
    document.getElementById("porcentajeCombus").innerHTML =  "0 %";

}

function setMasDatos(totalCostes,totalSeguros,totalImpuestos,precioCombus){

    document.getElementById("totalCostes").innerHTML = (Math.round(totalCostes * 100) / 100) + "€";
    document.getElementById("totalSeguros").innerHTML = (Math.round(totalSeguros * 100) / 100) + "€";
    document.getElementById("totalImpuestos").innerHTML = (Math.round(totalImpuestos * 100) / 100) + "€";
    document.getElementById("precioCombus").innerHTML = (Math.round(precioCombus * 100) / 100) + "€";
    document.getElementById("precioTotal").innerHTML = (Math.round((precioCombus + totalCostes) * 100) / 100) + "€";
    document.getElementById("porcentajeCombus").innerHTML = (Math.round((precioCombus / (precioCombus + totalCostes)) * 10000) / 100) + " %";
    

}

function setEurKm(eur){

    var euKm = document.getElementById("euKm");

    euKm.innerHTML = eur+"€ /Km";

}

function setEurMes(eur){

    var euMes = document.getElementById("euMes");

    euMes.innerHTML = eur+"€ /Mes";

}

function func() {

    var datos = document.forms.datos;
    var campos = [datos.costeTotal,datos.costeReparaciones,datos.costeSeguro,datos.costeImpuestos,datos.costeOtros,datos.consumoMedio,datos.costeCombustible,datos.totalKm,datos.añosCoche]
    
    var euKm = document.getElementById("euKm");
    var euMes = document.getElementById("euKm");

    var correcto = true;
    var totalCostes = 0.0;
    var precioCombus = 0.0;
    
    for (var i = 0; i < campos.length; i++) {
        
        if (isNaN(campos[i].value)) {

            campos[i].value = "Introduzca solo numeros";
            correcto = false;

            continue;
        }
        
        if (campos[i].value == "" || campos[i].value < 0) {

            campos[i].value = "0";

            continue;

        }

        if(i < 5){

            totalCostes += parseFloat(campos[i].value);
    
        }

        if(i == 7 ){

            precioCombus = ((parseFloat(campos[5].value) * parseFloat(campos[6].value)) /100 ) * parseFloat(campos[7].value);

        }

        if(i == 8 ){

            if (campos[i].value == "0" | campos[i].value == "")
            {
                campos[i].value = 0.083333333;
            }

            totalCostes -= parseFloat(campos[2].value);
            totalCostes -= parseFloat(campos[3].value);

            totalCostes += parseFloat(campos[2].value) * parseFloat(campos[8].value);
            totalCostes += parseFloat(campos[3].value) * parseFloat(campos[8].value);

        }
        
    }

    if(!correcto){

        return;

    }

    var euKm = ((totalCostes+precioCombus)/campos[7].value);
    var euMes = ((totalCostes+precioCombus)/(campos[8].value * 12));

    var totalSeguros = campos[2].value * Math.ceil(campos[8].value);
    var totalImpuestos = campos[3].value * Math.ceil(campos[8].value);
    
    setEurKm( Math.round(euKm * 100) / 100);
    setEurMes(Math.round(euMes * 100) / 100);
    setMasDatos(totalCostes,totalSeguros,totalImpuestos,precioCombus);

}