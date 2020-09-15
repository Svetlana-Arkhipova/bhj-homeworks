function createTask(taskText) {
  let taskTitle = document.createElement('div');
  taskTitle.textContent = taskText;
  taskTitle.classList.add('task__title');

  let task = document.createElement('div');
  task.classList.add('task');

  task.insertAdjacentElement('afterBegin', taskTitle);
  task.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');
  return task;
}

function taskActions(e) {
    let tasksList = document.getElementById('tasks__list');
    let inputField = document.getElementById('task__input');
    let taskText = inputField.value;
    e.preventDefault();
    if (taskText) {
      let task = createTask(taskText);
      tasksList.insertAdjacentElement('beforeEnd', task);
      inputField.value = "";

      let removeBtn = task.querySelector('.task__remove');
      removeBtn.onclick = () => {
        removeBtn.closest('div.task').remove();
        return false;
      }
    }
}

let addButton = document.getElementById('tasks__add');
addButton.addEventListener('click', taskActions);
