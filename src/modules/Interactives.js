import Helpers from './Helpers.js';

const item = new Helpers();

export default class Interactions {

  toggleCompleted(id, taskList, elem) {
    taskList.forEach((task) => {
      if (task.index === id && elem.checked === true) {
        task.completed = true
        elem.dataset.id = 'true';
        console.log(task)
      } else if (task.index === id && elem.checked === false) {
        task.completed = false;
        elem.dataset.id = 'false'
        console.log(task)
      }
    })

  }

  checkCompleted(taskList) {
    const checkBox = [...document.querySelectorAll('.check_item')];
    const desc = [...document.querySelectorAll('.description')];
    taskList.forEach((task, i) => {
      if (task.completed === true) {
        checkBox[i].checked = true;
        desc[i].classList.toggle('blur_text');
      }
    });
  }
}