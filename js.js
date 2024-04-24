"use strict"

function queSystem() {
    
    let button = document.querySelector("#ställ_i_kö");
    let name = document.querySelector("#namn").value;
    let quantity = document.querySelector("#antal").value;
    let outputbox = document.querySelector("#outputbox");

    button.addEventListener("click", function(){
        let p = document.createElement("p");
        document.outputbox.appendChild(p);
        p.textContent = name + quantity

        p.addEventListener("contextmenu",function giveTable(){
            if(anyTable == free){
                alert(this.textContent);
                this.removeChild;
                this.anyTable.style.backgroundcolor = "red";
            }
        })
    })
}