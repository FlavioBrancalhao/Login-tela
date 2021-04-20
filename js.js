function wonderful(){
    var z =document.getElementById("cor")
    var x = document.getElementById("pass")
        if(x.type=="password"){
            x.type = "text";
            
        }else{
            x.type = "password";
           
        }
        if(z.style.color ==="black"){
            z.style.color = "darkgrey";
        }else{
            z.style.color = "black";
        }
    }
