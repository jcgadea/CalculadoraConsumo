function aCero() {

    var euKm = document.getElementById("euKm");
    var euMes = document.getElementById("euKm");

    euKm.innerHTML = "0.00 /Km";
    euMes.innerHTML = "0.00 /Km";


}

function setEurKm(eur){

    var euKm = document.getElementById("euKm");

    euKm.innerHTML = eur+" /Km";

}

function setEurMes(eur){

    var euMes = document.getElementById("euMes");

    euMes.innerHTML = eur+" /mes";

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
        
    }

    if(!correcto){

        return;

    }

    var euKm = ((totalCostes+precioCombus)/campos[7].value);
    var euMes = ((totalCostes+precioCombus)/(campos[8].value * 12));

    setEurKm( Math.round(euKm * 100) / 100  );
    setEurMes(Math.round(euMes * 100) / 100);

}