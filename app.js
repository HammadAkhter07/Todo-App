// console.log("hello world");

var input = document.querySelector("#input");
var ol = document.querySelector("#order-list");

var arr = [];

function addTodo() {
    if(input.value.trim() === "") {
        alert("Please enter a task");
    }else { 
        arr.push(input.value)
        renderTodo()
    }
}

function deleteTodo(index) {
    arr.splice(index , 1)
    renderTodo()
}
function editTodo(index){
    var editValue = prompt("Enter new todo")
    arr[index] = editValue
    // console.log(index , editValue);
    if(editValue.trim() === ""){
        alert ("PLEASE ENTER VALUE")
    }else{ 
        renderTodo()
    }    
}


function renderTodo(){
    ol.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick="editTodo(${i})">Edit</button> 
        <button onclick="deleteTodo(${i})">Delete</button> 
        </li>`
    }
    input.value = ""
    // console.log(arr);
}

