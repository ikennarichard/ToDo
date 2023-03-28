import './style.css';

const list = document.querySelector('.list');

const todoTasks = [
  {
    index: 0,
    completed: true,
    description: 'Walk the dog'
  },
  {
    index: 1,
    completed: false,
    description: 'Wash the dishes'
  },
  {
    index: 2,
    completed: false,
    description: 'Exercise'
  },
];


const sortedTasks = todoTasks.sort((a,b) => a.index - b.index);

const listStructure = 
  sortedTasks.map((item) => {
    return (
      `<li class='list_item' id=${item.index}>
      <input type='checkbox' class='check_item'>
      <span class='description'>${item.description}</span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </li>`
    );
  })

list.innerHTML = listStructure.join('')

