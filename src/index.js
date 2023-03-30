import Helpers from './modules/Helpers.js';
import './style.css';

const task = new Helpers();

const list = document.querySelector('.list');
const form = document.querySelector('form');
const inputField = document.querySelector('.list_input');

function clearInputs() {
  inputField.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  task.addTask(task.taskList.length + 1, document.querySelector('.list_input').value);
  clearInputs();
});

list.addEventListener('click', (e) => {
  const target = e.target.closest('.fa-ellipsis-vertical');
  const trash = e.target.closest('.fa-trash-can');
  const description = e.target.closest('.description');

  if (target) {
    target.nextElementSibling.classList.toggle('show');
    target.style.display = 'none';
  }
  if (trash) {
    task.removeTask(Number(trash.id));
  }

  if (description) {
    task.editTask(description);
  }
});

list.addEventListener('focusout', (e) => {
  const description = e.target.closest('.description');
  if (description) {
    task.displayEditedTask(description, Number(description.dataset.id));
  }
});

window.onload = task.displayList();
