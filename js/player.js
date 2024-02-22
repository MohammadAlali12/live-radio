class Player {
    constructor(){
        var heightMain = document.getElementById("player");
        //هنا يعيد القيم أرقام لذلك نضيف بكسل لكي يأخذها كارتفاع 
        heightMain.style.height = screen.height +"px"; 
        if(screen.width <500 ){
            heightMain.style.width = screen.width + "px";


        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height  = screen.height-300 +"px"; 

    }
};
onload = new Player();
//class button
class Audioplayer{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isplayed;
        this.play_pause_button.addEventListener("click", () =>{this.play_pause()});
        this.names_radio = [];
        this.names_radio[0] ="Sham-FM";
        this.names_radio[1] ="Almadina-FM";
        this.names_radio[2] ="Ninar-FM";
        this.names_radio[3] ="Farah-FM";
        this.names_radio[4] ="Mix-FM";
        this.names_radio[5] ="Radio-Music";
        this.names_radio[6] ="Version-FM";
        this.names_radio[7] ="Sputnik";

        




        this.source_audio = [];
        this.source_audio[0] = "https://radioshamfm.grtvstream.com:8400/stream";
        this.source_audio[1] = "https://stream.almadinafm.com/;stream.mp3";
        this.source_audio[2] = "https://ninarfm.grtvstream.com:8896/;";
        this.source_audio[3] = "https://radio.farah.fm/;";
        this.source_audio[4] = "https://stream.mixfmsyria.net/;stream.mp3";
        this.source_audio[5] = "https://asima.out.airtime.pro:8000/asima_a";
        this.source_audio[6] = "https://versionfm.com:8100/stream";
        this.source_audio[7] = "https://icecast-rian.cdnvideo.ru/voicearb";

        this.server = 0;

        this.setResource();
        this.back =document.getElementById("back").addEventListener("click",() =>{
            if(this.server > 0){
                --this.server;
                this.isplayed = false;

            }
            else{
                this.server = this.source_audio.length-1;
                this.isplayed = false;
            }
            localStorage.setItem("save-position",this.server);
            this.setResource();

         });
        this.next = document.getElementById("next").addEventListener("click",() =>{
            if(this.server < this.source_audio.length-1 ){
                ++this.server;
                this.isplayed = false;

             }
             else{
                this.server = 0;
                this.isplayed = false;
             }
             localStorage.setItem("save-position",this.server);
             this.setResource();

         });


    }
    setResource(){
        if(localStorage.getItem("save-position")!=null){
            this.server = parseInt(localStorage.getItem("save-position"));

        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server]
        this.play_pause();
    }

    play_pause(){
        if(this.isplayed == false) {
            this.play_pause_button.src = "./image/pause.jpg";
            this.audio_file.play();
            this.isplayed = true;

        }
        else{
            this.play_pause_button.src = "./image/play.jpg";
            this.audio_file.pause();
            this.isplayed = false;

        } 

    }
}
onload = new Audioplayer();
