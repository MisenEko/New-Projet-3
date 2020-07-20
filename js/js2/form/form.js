let form = document.getElementById("formContainer");
let formButton = document.getElementById("sendForm");
let clearButton = document.getElementById("sendFormclear");

let c = document.getElementById("myCanvas");



    //Bouton valider pour afficher le formulaire
    document.getElementById("reservationOn").addEventListener("click", function(){
        $( "#formContainer" ).fadeIn( "slow");
        $( "#stationInfo" ).hide();
    });

    //bouton pour valider nom / prénom avec vérification et afficher signature
    document.getElementById("validName").addEventListener("click", function(){
        let checkValue =  false;
        checkValue = sendFormInstance.check(form, checkValue); //envoie du formulaire et de checkvalue pour vérifier si nom et prénom sont rempli.
        if(checkValue){
            $( "#formContainer" ).hide();
            $( "#signContainer" ).fadeIn ("slow");
            $( "#confimStation").html(sessionStorage.getItem("sessionAdress"))            
            $( "#confirmName").html(form[0].value);
            
        }else{
            document.getElementById("errorName").textContent = "Tout les champs sont requis."; 
        }
    })  

    //bouton pour valider la signature, ajout d'information dans le local/session storage + lancement du chrono et activation des effets d'animation
    formButton.addEventListener("click", function(event){       


   
                 // si le canvas est bien signé : 
            event.preventDefault();
            localStorage.clear();   //nouvelle réservation, on clear le storage

            let mStorage = 20;  // 20 minutes pour le chrono
            let sStorage = 0;  // 00 secondes pour le chrono 

            
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

            /**Element graphique du formulaire */

            document.getElementById("errorSign").textContent = "";
            $( "#signContainer" ).fadeOut ("slow"); 
            $( "#reservContainer").fadeIn('slow');           
            

 

        }); 






    







