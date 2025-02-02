const container= document.getElementById("list-container");
const input= document.getElementById("input");

function addtask(){
    if (input.value=== ""){
        alert("you must write something!!");}
    else{
        let p = document.createElement("p");
        let checkbox= document.createElement("input");
        checkbox.type="checkbox";
        p.innerText=input.value;
        p.insertBefore(checkbox, p.firstChild);
        container.appendChild(p);
        checkbox.style.marginRight= "10px";

        input.value="";
       
    }
    }



