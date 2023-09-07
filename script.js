const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
// const addInput = document.querySelector("input-box");
function addTask(){   //funtion to add task
    if(inputBox.value == ""){
        alert("Please enter a task!");
    }else{
        let liElement = document.createElement("li");
        liElement.innerHTML = inputBox.value;
        listContainer.appendChild(liElement);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  
        liElement.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}

inputBox.addEventListener('keyup', (event) => { //function to add task using enter/return key
    if(event.which == 13) {
      addTask();
    }
  });

listContainer.addEventListener("click", function(e){ //function to check or remove the task
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){  // function to save data in local storage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){  // function to get the data from the local storage after refreshing/reopening
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();