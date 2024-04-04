var buttons = Array.from(document.getElementsByClassName("btn"));
var cal=document.getElementById("cal");
let string="";
buttons.forEach((button)=>{
   button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            try{
                string=eval(string);
                cal.value=string;
            }
            catch(error){
                string="";
                cal.value=string;
                alert("enter valid expression");
            }
        } 
        else if(e.target.innerHTML=="AC"){
            string="";
            cal.value=string;
        }
        else if(e.target.innerHTML=="+/-"){
            if(string[0]!="-"){
                string="-"+string;
                cal.value=string;
            }
            else if(string[0]=="-"){
                string=string.slice(1,string.length);
                cal.value=string;
            }
            if(string[0]=="-" && string[1]=="-"){
                string=string.slice(2,string.length);
                cal.value=string;
            }
        }
        else{
        string=string+e.target.innerHTML;
        cal.value=string;}
    })
})



