/* eslint-disable class-methods-use-this */
import Task from './Task.js';

export default class Helpers {
  constructor() {
    this.taskList = [];
  }

  addTask(index, value) {
    if (value === '') return;
    const newTask = new Task(index, value);
    this.addToTaskList(newTask);
    this.sortTasks();
    this.displayList();
  }

  addToTaskList(task) {
    this.taskList.push(task);
  }

  displayList() {
    document.querySelector('.list').style.display = 'block';

    if (this.taskList.length === 0) {
      document.querySelector('.list').style.display = 'none';
    }
    document.querySelector('.list').innerHTML = `
    ${this.setListItems(this.taskList)}
    `;
  }

  removeTask(i) {
    this.taskList = this.taskList.filter((item) => item.index !== i);
    this.taskList.forEach((item, i) => {
      item.index = i + 1;
    });
    this.sortTasks();
    this.displayList();
  }

  setListItems(arr) {
    let listItems = '';
    for (let i = 0; i < arr.length; i += 1) {
      listItems += `
      <li class='list_item'>
      <div>
        <input type='checkbox' class='check_item'>
        <span class='description' data-id=${arr[i].index}>${arr[i].description}</span>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can" id=${arr[i].index}></i>
      </li>
      `;
    }
    return listItems;
  }

  sortTasks() {
    this.taskList.sort((a, b) => a.index - b.index);
  }

  editTask(desc) {
    desc.setAttribute('contenteditable', 'true');
    desc.focus();
  }

  displayEditedTask(elem, index) {
    elem.setAttribute('contenteditable', 'false');
    const objIndex = this.taskList.findIndex((obj) => obj.index === index);
    this.taskList[objIndex].description = elem.innerText;
  }
}