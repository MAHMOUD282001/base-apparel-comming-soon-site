
let submitBtn = document.querySelector(".submit");

let errorIcon = document.querySelector(".error");

let errorMsg= document.querySelector(".msg");


let input = document.querySelector("input");






submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(input.value == ""){
        errorMsg.innerText = "Provide an Email"
        errorMsg.classList.add("active")
        errorIcon.classList.add("active")
    }
    
    else{
        if (!input.value.includes('@')) {
            errorMsg.innerText = "Please provide a valid email";
            errorMsg.classList.add("active")
            errorIcon.classList.add("active")
        }
        
        else{
            errorMsg.innerText = "";
            errorMsg.classList.remove("active")
            errorIcon.classList.remove("active")
        }
    
    }
    
    
    
})
