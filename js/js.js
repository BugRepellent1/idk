"use strict"

function queSystem() {

    let button = document.querySelector("#ställ_i_kö");
    let name = document.querySelector("#namn").value;
    let quantity = document.querySelector("#antal").value;
    let outputbox = document.querySelector("#outputbox");

    let guest = {
        quantity:0,
        name:"x",
    }
    let guestArray = [];

    let table = {
        size:0,
        number:0,
        occupation:false,
    }
    let tablesArray = [];

    button.addEventListener("click", function(){
        let p = document.createElement("p");
        document.outputbox.appendChild(p);
        p.textContent = name + quantity;
        guestArray = name + quantity;

        p.addEventListener("contextmenu",function giveTable(){
            if(confirm("Vill du ge"+name+"ett bord?")){
                
            }
        })
    })
}