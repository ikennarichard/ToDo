import { setList, sortedTasks } from './modules/Helpers.js';
import { addTask, deleteTask } from './modules/CrudMethods.js';
import './style.css';

const list = document.querySelector('.list');
const form = document.querySelector('form');
const inputField = document.querySelector('.list_input');

function displayList(arr) {
  list.innerHTML = setList(arr);
}

function clearInputs() {
  inputField.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(sortedTasks, inputField.value);
  displayList(sortedTasks);
  clearInputs();
});

list.addEventListener('click', (e) => {
  const target = e.target.closest('.fa-ellipsis-vertical');
  const trash = e.target.closest('.fa-trash-can');
  if (target) {
    target.nextElementSibling.classList.add('show');
    target.style.display = 'none';
  } else if (trash) {
    trash.parentElement.remove();
  }
});

window.onload = displayList(sortedTasks);
