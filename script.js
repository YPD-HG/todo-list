function addTask() {
    let inputText = document.getElementById("taskInput")
    let taskText = inputText.value.trim();

    if (taskText === "") return

    let taskDiv = document.createElement("div")

    let taskLabel = document.createElement("span")
    taskLabel.textContent = inputText.value

    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.onclick = function () {
        del(taskDiv)
    };
    let editButton = document.createElement("button") //when we hit this, we don't know which task his being edited
    editButton.textContent = "Edit"
    editButton.onclick = function () {
        updateText(taskDiv, inputText)
    }

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(deleteButton);
    taskDiv.appendChild(editButton);

    document.getElementById("taskList").appendChild(taskDiv); // Append the task to the body or a task list
    inputText.value = ""; // Clear input field after adding task

}
console.log(document.getElementById("taskList"))

function clearAll() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // This clears all child elements    
}

function del(taskDiv) {
    taskDiv.remove();
}

function updateText(taskDiv, inputText) {
    inputText.value = taskDiv.getElementsByTagName("span")[0].textContent 
    // this worked, basically the content which was present inside the span got copied in the input field
    // user can edit directly on top of it

    //Once hit the "Edit":
    // 1.The content should be copied in input field, that happened
    // 2.The button should change from Add ---> Update

    // 2.The button should change from Add ---> Update
console.log(document.getElementById(inputButton.innerHTML))
}