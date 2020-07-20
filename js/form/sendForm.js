class SendForm{

    constructor(stationAdress, lastName , firstName){
        this.stationAdress=stationAdress;
        this.lastName = lastName;
        this.firstName = firstName;
    }

    localClear(){
        localStorage.clear();
    }
    
    localSet(){
        localStorage.setItem("lastName" , this.lastName);        // Nom et prénom dans le  local storage
        localStorage.setItem("firstName" , this.firstName);
    
    }

    sessionSet(){
        sessionStorage.setItem("stationAdress" , this.stationAdress);
    }

    drawInDom( ){
        document.getElementById("reservationName").innerHTML = this.firstName+" "+this.lastName; 
        document.getElementById("reservationAdress").innerHTML = this.stationAdress;
    }

    check(form , value){
        this.form = form;  
        this.value = value;  
          
       
        if (!this.form.checkValidity()) { 
            this.value=false;
            return value;
        } else {
            this.value=true;
            return this.value;
        }

    }


    //getter

    getStationAdress(){
        return this.stationAdress;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    //setter

    setStationAdress(stationAdress){
        this.stationAdress = stationAdress;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }
    
    setLastName(lastName){
        this.lastName = lastName;
    }
    
};