var inputTask = document.getElementById("new-task");
var deleteButton = document.getElementsByClassName("deleteTaskBtn");

var todoTasks = document.getElementById("uncompleted-tasks");
var completedTasks = document.getElementById("completed-tasks");

function createNewTask(task) {
	var newItem = document.createElement("li");
	//adding attribute for sorting tasks
	//newItem.setAttribute('class', 'todo');
	var inputValue = document.createTextNode(inputTask.value);
	//adding delete button
	var deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.className = "deleteTaskBtn";
	//adding check box for marking tasks
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.name = "name";
	checkBox.value = "value";

	// checkBox.addEventListener('click', function (ev) {
	// 	if (newItem.className === 'todo') {
	// 		newItem.setAttribute('class', 'completed-task');
	// 		completedTasks.appendChild(newItem);
	// 	} else {
	// 		newItem.setAttribute('class', 'todo');
	// 		todoTasks.appendChild(newItem);
	// 	}
	// });

	newItem.appendChild(checkBox);
	newItem.append(" ");
	newItem.appendChild(inputValue);
	newItem.append(" ");
	newItem.appendChild(deleteBtn);

	// deleteBtn.onclick = deleteTask;
	deleteBtn.addEventListener('click', function(ev) {
		ev.stopPropagation();
		ev.target.parentNode.parentNode.removeChild(newItem);
	});

	return newItem;
}

function addTask() {
	if (inputTask.value) {
		var listItem = createNewTask(inputTask.value);
		listItem.setAttribute('class', 'todo');
		listItem.addEventListener('click', function (ev) {
			if (listItem.className === 'todo') {
				listItem.setAttribute('class', 'completed-task');
				completedTasks.appendChild(listItem);
			} else {
				listItem.setAttribute('class', 'todo');
				todoTasks.appendChild(listItem);
			}
		})
		todoTasks.appendChild(listItem);
	} else {
		alert("Input your task");
	}
	document.getElementById("new-task").value = "";
}


// function deleteTask(ev) {
// 	ev.target.parentNode.remove(ev.target);
// }
