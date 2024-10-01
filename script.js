function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskInput.value} <span onclick="removeTask(this)">x</span>`;
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input after adding the task
    } else {
        alert("Please enter a task");
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
