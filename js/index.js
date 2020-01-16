let newT = document.getElementById("newTask");
let submitB = document.getElementById("subButton");
let clearB = document.getElementById("clearButton");
let markB = document.getElementById("markButton");
let delB = document.getElementById("delButton");


function listeners(){
    submitB.addEventListener("click",function(event){
        event.preventDefault();
        newListElem();
    })
    markB.addEventListener("click",function(event){
        event.preventDefault();
        markAll(true);
    })
    clearB.addEventListener("click",function(event){
        event.preventDefault();
        markAll(false);
    })
    delB.addEventListener("click",function(event){
        event.preventDefault();
        deleteList();
    })
}

function newListElem(){
    let listElem = document.createElement("p");
    let checkbox = document.createElement("input");
    
    checkbox.setAttribute("type","checkbox");
    
    listElem.appendChild(checkbox);

    let elem = document.createTextNode(newT.value);
    listElem.appendChild(elem);
    if(newT.value == ""){
        alert("You must Enter a Task to Submit");
    }
    else{
        document.getElementById("list").appendChild(listElem);
    }
    newT.value = "";

}


function markAll(state){
    let listNum = document.getElementsByTagName("p");
    console.log(listNum.length);
    for(var i = 0;i < listNum.length; i++) {
        listNum[i].getElementsByTagName("INPUT")[0].checked = state;
    }
}

function deleteList(){
    let element = document.getElementById("list");
    let kid = element.lastElementChild;
    while(kid){
        element.removeChild(kid)
        kid = element.lastElementChild;
    }
}


function init(){
    listeners();
}

init()