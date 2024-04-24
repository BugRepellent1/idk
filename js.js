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
    let guestArray = [guest];
    
    let table = {
        size:0,
        number:0,
        occupation:false,
    }
    let tablesArray = [table];

    button.addEventListener("click", function(){
        let p = document.createElement("p");
        document.outputbox.appendChild(p);
        p.textContent = name + quantity;
        array = name + quantity;

        p.addEventListener("contextmenu",function giveTable(){
            guestArray.forEach(guest => {
                tablesArray.forEach(table => {
                    if(guest.quantity <= table.size && table.occupation == false){
                        alert(this.textContent);
                        this.removeChild;
                        this.tables.occupation = true;
                        this.tables.style.backgroundcolor = "red";
                    }
                })
            });
        })
    })
}