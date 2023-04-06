/**
 * @jest-environment jsdom
 */
import Helpers from './src/modules/Helpers.js';
import Interactives from './src/modules/Interactives.js';

describe('add list item', () => {
  const task = new Helpers();

  test('Add task to array', () => {
    document.body.innerHTML = '<ul class="list"></ul>';
    task.addTask(task.taskList.length + 1, 'Task 1');
    expect(task.taskList).toHaveLength(1);
  });

  test('Add task to DOM element', () => {
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });

  test('remove task from array', () => {
    task.removeTask(1);
    expect(task.taskList.length).toBe(0);
  });

  test('remove task from dom element', () => {
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(0);
  });
});

describe('status and content updates', () => {
  const task = new Helpers();
  const utils = new Interactives();

  test('editing task items', () => {
    document.body.innerHTML = '<ul class="list"></ul>';
    task.addTask(task.taskList.length + 1, 'Task 1');
    task.editTaskList('Edit task', 1);
    expect(task.taskList[0].description).toBe('Edit task');
  });
});