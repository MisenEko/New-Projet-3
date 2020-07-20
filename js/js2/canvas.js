  /*const c = document.getElementById("myCanvas");

  c.addEventListener("mousedown", lastCoords); 
  c.addEventListener("mousemove", clickCheck);
  c.addEventListener("touchstart", lastCoordsMobile); 
  c.addEventListener("touchmove", touchEvent);
  
  c.height = 100 ;
  let emptyCanvas = c.toDataURL();

  
  const ctx = c.getContext("2d");
  
  function lastCoords(e) {
    const {x, y} = c.getBoundingClientRect(); // obtention des dimensions du rectangle du canvas
      lastX = e.clientX - x;      // permet de connaître la position de la souris et de l'enregistrer comme dernière position
      lastY = e.clientY - y;      
  }

  function lastCoordsMobile(){
    const {x, y} = c.getBoundingClientRect(); // obtention des dimensions du rectangle du canvas
    lastX = event.touches[0].clientX - x;     // permet de connaître la position du doigt et de l'enregistrer comme dernière position
    lastY = event.touches[0].clientY - y;

  }
  
  function clickCheck(e) {
    if (e.buttons !== 1) return; // return "rien" si le click gauche n'a toujours pas été effectué
      draw(e);
      
  }
  
  function draw(e) {
    const {x, y} = c.getBoundingClientRect();
      const newX = e.clientX - x;
      const newY = e.clientY - y;
      
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(newX, newY);
      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.closePath();
      
      lastX = newX;
      lastY = newY;
  }

  function checkCanvas(dataCanva) {
    if(c.toDataURL() === emptyCanvas ){
      return dataCanva = true;
    }
  }

  function clearCanvas() {
    ctx.clearRect( 0, 0 , c.width, c.height);
  }

  
	 function touchEvent(){

        event.preventDefault();

        const {x, y} = c.getBoundingClientRect();
        const newX = event.touches[0].clientX - x;

        const newY = event.touches[0].clientY - y;

        
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
        
        lastX = newX;
        lastY = newY;
   }

    let lastX = 0;
    let lastY = 0;  */


	class Canvas{
    constructor(    ){
      this.c = document.getElementById("myCanvas");
      this.ctx = this.c.getContext("2d");
      this.rect = 0;       
      this.lastX = 0;
      this.lastY = 0;
      this.signature(); 
       
    }

    lastCoords(e) {

        this.rect = this.c.getBoundingClientRect(); // obtention des dimensions du rectangle du canvas
        this.x = this.rect.x;
        this.y = this.rect.y;

        this.lastX = e.clientX - this.x;      // permet de connaître la position de la souris et de l'enregistrer comme dernière position
        this.lastY = e.clientY - this.y;       
    }
  
    lastCoordsMobile(){

      this.rect = this.c.getBoundingClientRect(); // obtention des dimensions du rectangle du canvas
      this.x = this.rect.x;
      this.y = this.rect.y;
      this.lastX = event.touches[0].clientX - this.x;     // permet de connaître la position du doigt et de l'enregistrer comme dernière position
      this.lastY = event.touches[0].clientY - this.y;
  
    }
        
    touchEvent(){

      event.preventDefault();

      this.x = this.rect.x;
      this.y = this.rect.y;

      this.newX = event.touches[0].clientX - this.x;
      this.newY = event.touches[0].clientY - this.y;

      this.ctx = this.c.getContext("2d");  
      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(this.newX, this.newY);
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.closePath();      
      this.lastX = this.newX;
      this.lastY = this.newY;
 }


    paint(e) {
      if (e.buttons !== 1) return; // return "rien" si le click gauche n'a toujours pas été effectué

      this.newX = e.clientX - this.x;
      this.newY = e.clientY - this.y;

      this.ctx = this.c.getContext("2d");        
      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(this.newX, this.newY);
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.closePath();      
      this.lastX = this.newX;
      this.lastY = this.newY;        
    }

    signature(){
      let signature = document.getElementById("myCanvas");
      signature.addEventListener("mousedown", this.lastCoords.bind(this));
      signature.addEventListener("mousemove", this.paint.bind(this));
      signature.addEventListener("touchstart", this.lastCoordsMobile.bind(this)); 
      signature.addEventListener("touchmove", this.touchEvent.bind(this));
      document.getElementById("clearSign").addEventListener("click", this.clearCanvas.bind(this));
    }

    clearCanvas() {
      this.ctx.clearRect( 0, 0 , this.c.width, this.c.height);
    }

    checkCanvas(dataCanva , emptyCanvas) {

      this.dataCanva = dataCanva;
      
      this.emptyCanvas = emptyCanvas;

      if(this.c.toDataURL() === this.emptyCanvas){

        return this.dataCanva = true;
      }
      return this.dataCanva = false;
    }

  }

  

