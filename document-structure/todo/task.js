const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tasksList = document.getElementById('tasks__list');
  const taskText = taskInput.value;

  const taskHtml = `
<div class="task">
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
 </div>
`;
  tasksList.insertAdjacentHTML('beforeend', taskHtml);
  taskInput.value = '';
  taskInput.focus();

  document.querySelectorAll('.task__remove').forEach((removeTask) => {
    removeTask.addEventListener('click', (e) => {
      e.preventDefault();

      removeTask.parentElement.remove();
    });
  });
});
