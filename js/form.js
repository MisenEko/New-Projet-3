let form = document.getElementById("formContainer");



    //Bouton valider pour afficher le formulaire


    $( "#reservationOn" ).click(function(){
        $( "#reservationForm" ).fadeIn( "slow");
        $( "#StationInfo" ).hide();
    });


    //bouton pour valider nom / prénom avec vérification et afficher signature
    $( '#sendForm' ).click(function(event){
        event.preventDefault();
        let checkValue =  false;
        
        checkValue = sendFormInstance.check(form, checkValue); //envoie du formulaire et de checkvalue pour vérifier si nom et prénom sont rempli.
        
        if(checkValue){          
            

            $( "#formContainer" ).hide();
            $( "#signContainer" ).fadeIn ("slow");

            localStorage.clear();   //nouvelle réservation, on clear le storage

            let mStorage = 5;  // 5 minutes pour le chrono
            let sStorage = 00;  // 00 secondes pour le chrono 

            
            localStorage.setItem("localFirstName" , form[0].value);     // nom et prénom envoyé vers le local storage
            localStorage.setItem("localLastName" , form[1].value);

            let stationAdress = sessionStorage.getItem("sessionAdress");

            sendFormInstance.setStationAdress(stationAdress);   // envoie d'information vers les setters de sendFormInstance    
            sendFormInstance.setFirstName(form[0].value);
            sendFormInstance.setLastName(form[1].value);

            sendFormInstance.drawInDom();   // sendFormInstance envoit les informations de la réservation dans l'encadré.



            chronoInstance.stopChrono();    // on stop le chrono pour pouvoir en relancer un nouveau
            sessionStorage.clear();         // clear du session storage pour le nouveau chrono

            sessionStorage.setItem("sessionAdress" , stationAdress);
            
            chronoInstance.setMinute(mStorage); // on indique au chrono les 20 minutes à remettre à 0
            chronoInstance.setSecond(sStorage);

            chronoInstance.drawInDom();
            chronoInstance.startChrono();
           
            
            $('#reservContainer').fadeIn('slow');
            $('#reservationOn').hide();
            $('#cancelReservationOn').fadeIn('slow');            
         
    } else {
        $( '#errorName' ).fadeIn("fast"); 
    };
    })  

    
    






    







