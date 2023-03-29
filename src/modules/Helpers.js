import todoTasks from './todoTasks.js';

const sortedTasks = todoTasks.sort((a, b) => a.index - b.index);

const setList = sortedTasks.map((task) => (
  `<li class='list_item'>
      <div>
        <input type='checkbox' class='check_item' data-id=${task.index}>
        <span class='description'>${task.description}</span>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </li>`
)).join('');

export default setList;