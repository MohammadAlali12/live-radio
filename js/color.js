class Color{
    constructor(){
        this.content = document.getElementById("content")
this.color1 = document.getElementById("color1");
this.color1.addEventListener("click",() =>{
    this.select_color("color1");
}); 
this.color2 = document.getElementById("color2");
this.color2.addEventListener("click",() =>{
this.select_color("color2");
}); 

this.color3 = document.getElementById("color3");
this.color3.addEventListener("click",() =>{
this.select_color("color3");
}); 
this.color4 = document.getElementById("color4");
this.color4.addEventListener("click",() =>{
this.select_color("color4");
}); 
this.color5 = document.getElementById("color5");
this.color5.addEventListener("click",() =>{
this.select_color("color5");
}); 
if(localStorage.getItem("color") ==null){
    document.body.style.background = "linear-gradient(to right,#ff9966, #ff5e62,#f8f86c)";

}
this.select_color(localStorage.getItem("color"));



}
    select_color(color){
        if(color=="color1"){
            document.body.style.background = "linear-gradient(to right,#e478ff 25% ,#f85aa9)";
            this.content.style.background =" linear-gradient(to right bottom, #e478ff,#f85aa9)";
        
        }else if(color =="color2"){
            document.body.style.background = "linear-gradient(to right, #eb6668 25%,#7a71f7)";
            this.content.style.background =" linear-gradient(to right bottom,#eb6668 , #7a71f7)";

        }  else if(color =="color3"){
            document.body.style.background = "linear-gradient(to right, #ff5e62 25%,#f8f86c)";
            this.content.style.background ="linear-gradient( to bottom right , #ff5e62,#f8f86c)";

        }
        else if(color =="color4"){
            document.body.style.background = "linear-gradient(to right, #24f08a 25%,#13b5f5)";
            this.content.style.background =" linear-gradient(to right bottom, #24f08a,#13b5f5)";
        }
        else if(color =="color5"){
            document.body.style.background = "linear-gradient(to right,#cfd153, #e5e913,#c5c344)";
            this.content.style.background =" linear-gradient(to right,#cfd153, #e5e913,#c5c344)";
        }
        localStorage.setItem("color",color);


    }
}
onload = new Color();