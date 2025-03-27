let currentTaskDiv = null; // Stores the task being edited
let currentInputText = null;
let updateTask;
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
        currentTaskDiv = taskDiv; // Store the task being edited globally
        currentInputText = inputText; //So, note that till now there has been no updation in the input field
        // hence, you get null or "" in beginning

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
    // console.log(taskDiv.getElementsByTagName("span")[0].textContent)
    inputText.value = taskDiv.getElementsByTagName("span")[0].textContent
    // this worked, basically the content which was present inside the span got copied in the input field
    // user can edit directly on top of it
    // Once hit the "Edit":
    // 1.The content should be copied in input field, that happened
    // 2.The button should change from Add ---> Update

    // 2.The button should change from Add ---> Update
    document.getElementById("inputButton").textContent = "Update"
    // Now, user will edit the text in input field and then he will click "Update"
    // We need to take whatever is in the input field and modify the content inside textLabel
    updateTask = function () {

        let inputText = document.getElementById("taskInput")
        // let taskText = inputText.value.trim();
        // console.log(taskText)

        if (inputText === "") return

        taskDiv.getElementsByTagName("span")[0].textContent = inputText.value
        // Clean the input field
        inputText.value = ""; // Clear input field after updating task

        // Change the inputButton from Update ---> ADD
        document.getElementById("inputButton").textContent = "Add"
    };

}

document.getElementById("inputButton").addEventListener("click", function () {
    if (document.getElementById("inputButton").textContent === "Add") {
        addTask();
    } else if (document.getElementById("inputButton").textContent === "Update") {
        updateTask();
    }
});

// document.getElementById("inputButton").addEventListener("keydown", function (event) {
//     console.log("I am in script.js Event listner")
//     if (event.key === "Enter") {
//         updateTask();
//     }
// });

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (document.getElementById("inputButton").textContent === "Add")
            addTask();  // Call addTask() when Enter is pressed
        else updateTask(); // Call updateTask() when Enter is pressed
    }
});
