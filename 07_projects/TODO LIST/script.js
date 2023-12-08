let inputs = document.getElementById("inp")
let results = document.querySelector(".result")

function add(){
    if(inputs.value == ''){
        alert("please enter your task")
    }else{
        let newElement = document.createElement("ul")
        newElement.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`
        results.appendChild(newElement)
        inputs.value = '';
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove()
        }
    }
}

