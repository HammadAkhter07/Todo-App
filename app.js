// console.log("hello world");

var input = document.querySelector("#input");
var oli = document.querySelector("#order-list");

var arr = [];

function addTodo() {
    arr.push(input.value)
    renderTodo()
}

function deleteTodo(index) {
    arr.splice(index , 1)
    renderTodo()
}
function editTodo(index){
    var editValue = prompt("Enter new todo")
    arr[index] = editValue
    // console.log(index , editValue);
    renderTodo()
    
}


function renderTodo(){
    oli.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        oli.innerHTML += `<li>${arr[i]} 
        <button onclick="editTodo(${i})">Edit</button> 
        <button onclick="deleteTodo(${i})">Delete</button> 
        </li>`
    }
    input.value = ""
    // console.log(arr);
}

