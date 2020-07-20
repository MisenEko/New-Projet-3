//var tmp = null;
var stationAdress = null;
var nbrAvailableBikes = null;

function showInfo(event) {
    
    //affichage nom de la station
    let stationNameElt = document.getElementById("stationName");
    stationNameElt.textContent = event.layer.stationDescription.name;
    stationAdress = event.layer.stationDescription.address;

    
    //affichage adresse de la station
    let stationAddressElt = document.getElementById("stationAddress");
    stationAddressElt.textContent = event.layer.stationDescription.address;

    //affichage si ouvert ou fermée en français
    let stationStatus = document.getElementById("stationStatus");
    let statusTXT = event.layer.stationDescription.status;
    if (statusTXT =="OPEN"){ statusTXT = statusTXT.replace('OPEN','OUVERTE');
    } else { statusTXT = "FERMEE"; };
    stationStatus.textContent = statusTXT;

    //nombre de vélo disponible
    let stationTotalStandElt = document.getElementById("stationTotal");
    stationTotalStandElt.textContent = event.layer.stationDescription.totalStands.availabilities.bikes;
    nbrAvailableBikes = event.layer.stationDescription.totalStands.availabilities.bikes;
   
    document.getElementById("totalBikes").textContent = event.layer.stationDescription.totalStands.capacity;

  }

  function bikesTest(boolean){    
    if ( nbrAvailableBikes === 0 ){ 
        boolean = true;
        return boolean;
    } else {
        boolean = false;
        return boolean
    };
    
}




