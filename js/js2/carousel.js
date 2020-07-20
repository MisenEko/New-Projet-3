class SlideShows{
    
    constructor(){

        this.index = 0;
        this.slideShow = document.getElementsByClassName("imgSlide");
        this.code = 0;
        this.startSlide();
        this.commands();
    }


    startSlide( ) {
        this.interval = setInterval(this.autoSlide.bind(this), 5000);
        document.getElementById("play").classList.add("hideElement");
        document.getElementById("pause").classList.remove("hideElement");
      }

    autoSlide(){
        this.slideShow[this.index].classList.add("hideElement");
        this.index += 1;
        if(this.index > this.slideShow.length-1){this.index = 0;};           
        this.slideShow[this.index].classList.remove("hideElement");
       
    }

    keyboard(){
        this.code = event.keyCode;
        if(this.code === 37){this.prevButton();}
        if(this.code === 39){this.nextButton();}
    }

    prevButton(){        
        this.index -= 1;        
        if (this.index < 0) {
            this.slideShow[this.index+1].classList.add("hideElement");                       
            this.index = this.slideShow.length - 1;
            this.slideShow[this.index].classList.remove("hideElement");
        } else {
            this.slideShow[this.index+1].classList.add("hideElement");
            this.slideShow[this.index].classList.remove("hideElement");
        };
    }

    nextButton() {                   
        if (this.index === this.slideShow.length-1) {
            this.slideShow[this.index].classList.add("hideElement");
            this.index = 0;
            this.slideShow[this.index].classList.remove("hideElement");
                           
        }
        else {
            this.slideShow[this.index].classList.add("hideElement");
            this.index+=1;
            this.slideShow[this.index].classList.remove("hideElement");
        }
    };

    pause(){
            document.getElementById("pause").classList.add("hideElement");
            document.getElementById("play").classList.remove("hideElement");

                if( this.interval ){
                    clearInterval(this.interval);
                 }
    }



    commands(){

        document.getElementById("prev").addEventListener("click" , this.prevButton.bind(this));

        document.getElementById("next").addEventListener("click" , this.nextButton.bind(this));

        document.getElementById("pause").addEventListener("click" , this.pause.bind(this));

        document.getElementById("play").addEventListener("click" , this.startSlide.bind(this));

        document.addEventListener("keydown" , this.keyboard.bind(this));
    

    
    }
    
}