class SlideShows{
    
    constructor(play, pause, prev, next){

        this.index = 0;
        this.playButton=play;
        this.pauseButton=pause;
        this.next = next;
        this.prev = prev;
        this.slideShow = document.getElementsByClassName("imgSlide");
        this.keyCode = 0;
        this.startSlide();
        this.commands();

    }


    startSlide( ) {
        this.interval = setInterval(this.autoSlide.bind(this), 5000);
        this.playButton.classList.add("hideElement");
        this.pauseButton.classList.remove("hideElement");
      }

    autoSlide(){
        this.slideShow[this.index].classList.add("hideElement");
        this.index += 1;
        if(this.index > this.slideShow.length-1){this.index = 0;};           
        this.slideShow[this.index].classList.remove("hideElement");
       
    }

    keyboard(){        
        this.keyCode = event.keyCode;
        if(this.keyCode === 37){this.prevButton();}
        if(this.keyCode === 39){this.nextButton();}
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
            this.pauseButton.classList.add("hideElement");
            this.playButton.classList.remove("hideElement");

                if( this.interval ){
                    clearInterval(this.interval);
                 }
    }



    commands(){

        this.prev.addEventListener("click" , this.prevButton.bind(this));

        this.next.addEventListener("click" , this.nextButton.bind(this));

        this.pauseButton.addEventListener("click" , this.pause.bind(this));

        this.playButton.addEventListener("click" , this.startSlide.bind(this));

        document.addEventListener("keydown" , this.keyboard.bind(this));
    

    
    }
    
}