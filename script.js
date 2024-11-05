
let pass = document.getElementById("pass");
let msg = document.getElementById("msg");
let str = document.getElementById("strength");
let eye = document.getElementById("eye")

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";  
    } else {
        msg.style.display = "none";    
    } 
    if(pass.value.length < 4) {
   str.innerHTML = "Too Weak";
   str.style.color = "red";
   pass.style.borderColor ="red"
   
} else if (pass.value.length <= 8) {
    str.innerHTML = "Medium";
    str.style.color = "orange";
    pass.style.borderColor = "orange";
} else {
    str.innerHTML = "Strong";
    str.style.color = "green";
    pass.style.borderColor = "green";
}  
});


eyeicon.onclick = function ()   {
    if(pass.type == "password") {
       pass.type = "text"
        eyeicon.src="eye-open.png"
    } else {
        pass.type == "password" 
            eyeicon.src="eye-close.png"
        }
    }

