class Chrono {

  constructor( minute, second )
  {
    this.minute = minute;
    this.second = second;

  }


  drawInDom( ){
    document.getElementById('chrono').innerHTML = this.minute + ":" + this.second;
  }

  startChrono( ) {
    this.interval = setInterval(this.start.bind(this), 1000);
  }

  start() {
    let currentTime = document.getElementById('chrono').innerHTML; 
    let timeSplit = currentTime.split(':');
    let m = timeSplit[0];
    let s = this.checkSecond((timeSplit[1] - 1));
    if (s == 59 ){ m=m-1 };
    
    
    document.getElementById('chrono').innerHTML = m + ":" + s;  
    
    sessionStorage.setItem("minute" , m);
    sessionStorage.setItem("seconde" , s);
   
    if (m == 0 && s == 0){this.stopChrono(); sessionStorage.clear() ;};
  }
  
  checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // ajoute un 0 devant les chiffres
    if (sec < 0) {sec = "59"};
    return sec;
  }

  stopChrono(){
    if( this.interval ){
      clearInterval(this.interval);
    }
  }

  //getter

  getMinute(){
    return this.minute;
  }

  getSecond(){
    return this.second;
  }



  //setter

  setMinute(minute){
    this.minute = minute;
  }

  setSecond(second){
    this.second = second;
  }
  
};

