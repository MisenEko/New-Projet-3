function getStorage(){


    //récupération du temps du chrono dans le storage et envoit de l'ancien temps vers fonction chrono
    
    if( sessionStorage.length > 0 ){
        let mStorage = sessionStorage.getItem("minute");
        let sStorage = sessionStorage.getItem("seconde");
        let firstNameStorage = localStorage.getItem("localFirstName");
        let lastNameStorage = localStorage.getItem("localLastName");
        let adressStorage = sessionStorage.getItem("sessionAdress");

        sendFormInstance.setFirstName(firstNameStorage);
        sendFormInstance.setLastName(lastNameStorage);
        sendFormInstance.setStationAdress(adressStorage);
        sendFormInstance.drawInDom();   
        chronoInstance.setMinute(mStorage);
        chronoInstance.setSecond(sStorage);
        chronoInstance.stopChrono();   
        chronoInstance.startChrono();
        chronoInstance.drawInDom();
        $('#reservContainer').fadeIn('slow');

    } else { 
        $('#reservContainer').hide();
    }

    //récupération nom / Prénom du local storage pour le mettre dans le formulaire par défaut
    if (localStorage.length > 0)
    {
    let lastNStorage = localStorage.getItem("localFirstName");
        let firstNStorage = localStorage.getItem("localLastName");        
        let form = document.getElementById("formContainer");
        
        form[0].value = lastNStorage;
        form[1].value = firstNStorage;
    }
}