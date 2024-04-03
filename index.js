let inputElement = document.querySelector(".input-1");
let buttonElement = document.querySelector(".radial");
let taskContainer = document.querySelector("#tasks-container");

function addItem() {
  let input1 = inputElement.value;
  let listItem = document.createElement("li");//creating a list element
  listItem.innerText = input1;// adding text to the listItem variable
  taskContainer.appendChild(listItem);// adds the list item 

  inputElement.value = ""; //clears the value after submitting with the button


  //check for tasks stored previously on the local storage
  let storedValue = localStorage.getItem("tasks");
  if(storedValue !== null){
    let taskArray = JSON.parse(storedValue);
    taskArray.push(input1);// this method adds the input1 to the array
    localStorage.setItem('tasks', JSON.stringify(taskArray));// this method stores the tasks array to the local storage, the second value to be stored must be converted to be able to be stored in the local storage

  }else{

  //saving to local storage
  //declare an empty array for storing in 
  let taskArray = [];
  taskArray.push(input1);// this method adds the input1 to the array
  localStorage.setItem('tasks', JSON.stringify(taskArray));// this method stores the tasks array to the local storage, the second value to be stored must be converted to be able to be stored in the local storage
  }



  
}

buttonElement.addEventListener("click", addItem);

//load tasks from the local storage

let tasks = localStorage.getItem('tasks');
if (tasks !== null){
    let taskArray = JSON.parse(tasks);
    let taskElement = taskArray.map((value, id)=>{
        let listItem = document.createElement("li");
        listItem.innerText = value;
        listItem.id = id;

        return listItem;
    })
    taskContainer.append(...taskElement);
}