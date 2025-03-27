let updateTask;
const inputButton = document.getElementById("inputButton")
function addTask() {
    let inputText = document.getElementById("taskInput")
    let taskText = inputText.value.trim();

    if (taskText === "") return

    let taskDiv = document.createElement("div")

    let taskLabel = document.createElement("span")
    taskLabel.textContent = taskText

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

function clearAll() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // This clears all child elements    
}

function del(taskDiv) {
    taskDiv.remove();
}

function updateText(taskDiv, inputText) {
    inputText.value = taskDiv.getElementsByTagName("span")[0].textContent

    document.getElementById("inputButton").textContent = "Update"
    // Now, user will edit the text in input field and then he will click "Update"
    // We need to take whatever is in the input field and modify the content inside textLabel
    updateTask = function () {

        let inputText = document.getElementById("taskInput")
        let taskText = inputText.value.trim();

        if (taskText === "") return

        taskDiv.getElementsByTagName("span")[0].textContent = taskText
        // Clean the input field
        inputText.value = ""; // Clear input field after updating task

        // Change the inputButton from Update ---> ADD
        inputButton.textContent = "Add"
    };

}

document.getElementById("inputButton").addEventListener("click", function () {
    if (inputButton.textContent === "Add") {
        addTask();
    } else if (inputButton.textContent === "Update") {
        updateTask();
    }
});

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (inputButton.textContent === "Add")
            addTask();  // Call addTask() when Enter is pressed
        else if (inputButton.textContent === "Update") {
            updateTask();
        }
    }
});
