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
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        p.appendChild(span);
        span.classList.add("delete-button");

        input.value="";

        span.addEventListener("click",()=>{
            container.removeChild(p);
        })


        

        checkbox.addEventListener("click",()=>{
            if(checkbox.checked){
                p.style.textDecoration="line-through";
            }
            else{ p.style.textDecoration="none";

            }
        })
       
    }
    }

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addtask(); // Add task when "Enter" key is pressed
        }
    });



