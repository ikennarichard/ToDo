/* eslint-disable class-methods-use-this */
export default class Interactives {
  toggleCompleted(id, taskList, elem) {
    taskList.forEach((task) => {
      if (task.index === id && elem.checked === true) {
        task.completed = true;
      } else if (task.index === id && elem.checked === false) {
        task.completed = false;
      }
    });
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

  clearCompleted(elem) {
    const newList = elem.filter((item) => item.completed === false);
    newList.forEach((item, i) => {
      item.index = i + 1;
    });
    return newList;
  }
}