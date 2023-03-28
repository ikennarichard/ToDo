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


const sortedTasks = todoTasks.sort((a,b) => a.index - b.index)
list.innerHTML = sortedTasks.map((item) => `<li>${item.description}</li>`).join('');
