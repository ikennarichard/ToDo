import setList from './modules/Helpers.js';
import './style.css';

const list = document.querySelector('.list');

function displayList() {
  list.innerHTML = setList;
}
window.onload = displayList();
