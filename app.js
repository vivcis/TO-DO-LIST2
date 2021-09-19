let inputContainerButton = document.getElementById('input-container');
let toDoContainer = document.getElementById('to-do-container');
let newTask = document.getElementById('new-task');
let done = document.getElementById('done');
let cancel = document.getElementById('cancel');

inputContainerButton.addEventListener('click', function(e){
	e.preventDefault();
	var list = document.createElement('li')
	list.classList.add('list-styling');
	list.innerText = newTask.value;
	toDoContainer.appendChild(list);
	newTask.value = "";
	done.addEventListener('click', function(){
		done.style.textDecoration = 'line-through';
	})
	cancel.addEventListener('click', function(){
		toDoContainer.removeChild(cancel):
	})
})