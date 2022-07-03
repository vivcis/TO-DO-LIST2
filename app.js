let inputContainerButton = document.getElementById('input-container');
let toDoContainer = document.getElementById('to-do-container');
let newTask = document.getElementById('new-task');
let done = document.getElementById('done');
let cancel = document.getElementById('cancel');

inputContainerButton.addEventListener('click', function (e) {
	e.preventDefault();
	var list = document.createElement('li')
	list.classList.add('list-styling');

	list.innerText = newTask.value;
	if(list.innerText===""){
		alert('Please input text')
	}else{
		toDoContainer.appendChild(list);
	}
	var liNumber = document.querySelectorAll("ol li").length
	if (liNumber === 6) {
		alert('You have reached the maximum number of entries');
		toDoContainer.removeChild(list);
	}
		newTask.value = "";
})

cancel.addEventListener('click', function (e) {
	e.preventDefault();
	const item = toDoContainer.lastChild;
	item.parentElement.removeChild(item);
})

