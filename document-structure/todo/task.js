const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');

function removeTaskFunc(e) {
  e.preventDefault();
  e.target.parentElement.remove();
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tasksList = document.getElementById('tasks__list');
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    return;
  }

  const taskHtml = `
<div class="task">
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
 </div>
`;

  tasksList.insertAdjacentHTML('beforeend', taskHtml);
  let newTask = tasksList.lastElementChild;
  let removeBtn = newTask.querySelector('.task__remove');
  removeBtn.addEventListener('click', removeTaskFunc);
  taskInput.value = '';
  taskInput.focus();
});
