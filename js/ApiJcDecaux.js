class ApiJcDecaux{

    constructor(url, lat, long){
        this.url = url;
        this.latLong = [lat,long]; //combien lat and long in the same variable.
        this.mymap = L.map('mapid', { dragging: !L.Browser.mobile }).setView(this.latLong, 15);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibWlzZW4iLCJhIjoiY2s1NTdlODFmMGRuMDNmcnUwNmx1MGQ5ZSJ9.0vqmTTIXjigyA_TgbBqkrw'
        }).addTo(this.mymap);


        this.markerGroup();
        
    }

    getAjax(callback){
        $.get(this.url, callback, 'json'); // get answer from the API
    }

    markerGroup(){
        this.getAjax(markerList => {

           

            markerList.forEach(station => {
                let colorMarker = greenIcon;
                let latLong = [station.position.latitude, station.position.longitude];
                colorMarker = this.colorTest(station.totalStands.availabilities.bikes , station.totalStands.capacity , colorMarker); //verification du nombre de vélo pour la couleur du marker            
                let marker = new L.marker(latLong, {icon: colorMarker}).addTo(this.mymap); //positionne les markers sur la carte en fonction des coordonnées donné par l'api vélo
                

                

                marker.on("click", (e) => {

                    let veloUp = station.totalStands.availabilities.bikes;  
                    console.log(veloUp)                   
                    if(veloUp === 0){
                        console.log("test")
                        $( "#erreurVelo" ).fadeIn( "slow");
                    }else {
                        $( "#StationInfo" ).fadeIn( "slow");                    
                    document.getElementById("stationName").innerHTML= station.name;
                    document.getElementById("stationAddress").innerHTML = station.address;                    
                    document.getElementById("stationTotal").innerHTML = station.totalStands.availabilities.bikes+" Vélos disponible sur "+station.totalStands.capacity;
                    $( "#reservationOn" ).fadeIn( "slow");
                   //document.getElementById("4").textContent = station.totalStands.capacity;
                    
                    /*sessionStorage.setItem("5" , station.address);
                    sendFormInstance.setStationAdress(station.address);*/
                    }
                     
                    
              
                     
                });
            });

            
        });        
    }

    colorTest(nbrAvailableBikes, nbrCapacityBikes , colorMarker){
        this.bikes = nbrAvailableBikes;
        this.capacity = nbrCapacityBikes;
        this.color = colorMarker;
        
        if ( this.bikes === 0 ){ 
            this.color = redIcon; 
        } else if ( this.bikes < this.capacity/2) {
            this.color = orangeIcon;
        } else { this.color = greenIcon};
    
        return this.color;
    }








}

