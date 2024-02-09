
let contaNorte = 0;
let contaSur = 0;
let contaOcci = 0;
let contaOri = 0; 
let asisTotal = 0;

function anadir(){ 
    //debe contar el total de assitencia total y de cada zona.
    let combo = document.getElementById('zona');
    let selected = combo.options[combo.selectedIndex].text;
    let cantidad = parseFloat(document.getElementById('cantidad').value);
    
    let nParr = document.createElement("p");
    let item = document.getElementById('item');

    if (selected == 'Norte' || selected == 'Sur' || selected == 'Oriente' || selected == 'Occidente') {
        nParr.textContent = 'Zona escogida: ' + selected + '//' + ' Cantidad de boletos: ' + cantidad;

        item.appendChild(nParr);

        switch(selected){
            case "Norte":
            contaNorte+=cantidad;
            console.log('Contador zona norte ' + contaNorte);
            break;
            
            case "Sur":
            contaSur+=cantidad;
            console.log('Contador zona sur ' + contaSur);
            break;

            case "Oriente":
            contaOri+=cantidad;
            console.log('Contador zona oriente ' + contaOri);
            break;

            case "Occidente":
            contaOcci+=cantidad;
            console.log('Contador zona occidente ' + contaOcci);
            break;

        } 
    } 
    asisTotal+= cantidad;
}


function costoTotal(selected){  
    let costoNorte = 0;
    let costoSur = 0;
    let costoOri = 0;
    let costoOcci = 0;
    let costoFinal = 0;
    
    if (selected == 'Norte' || selected == 'Sur' || selected == 'Oriente' || selected == 'Occidente'){
        costoNorte = 25*contaNorte; 
        costoSur = 25*contaSur;
        costoOcci = 65*contaOcci; 
        costoOri = 45*contaOri;
        costoFinal = costoNorte + costoSur + costoOcci + costoOri;
    }
    return costoFinal; 
}

function verCompra(event){
    let  nombre = document.getElementById('nombre').value;
    let zona = document.getElementById('zona');
    let selected = zona.options[zona.selectedIndex].text;
    

    document.write("<strong>***GRACIAS POR SU COMPRA***</strong><br>");
    document.write("Nombre " + nombre + "<br>" + "<br>");
    document.write("<a href=\"index.html\">Volver</a>");
    document.write("<br>" + "<br>");

    document.write("Asistentes tribuna norte " + contaNorte); 
    document.write("<br>" + "<br>");
    document.write("Asistentes tribuna sur " + contaSur); 
    document.write("<br>" + "<br>");
    document.write("Asistentes tribuna occidente " + contaOcci); 
    document.write("<br>" + "<br>");
    document.write("Asistentes tribuna oriente " + contaOri); 
    document.write("<br>" + "<br>");
    document.write("Total de asistentes " + asisTotal);  
    document.write("<br>" + "<br>");
    document.write("El costo total es: $" + costoTotal(selected));    
    document.write("<br>" + "<br>");
    event.preventDefault();
}








