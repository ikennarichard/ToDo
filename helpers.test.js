/**
 * @jest-environment jsdom
 */
import Helpers from './src/modules/Helpers.js';

describe('add list item', () => {
  const task = new Helpers();
  document.body.innerHTML = '<ul class="list"></ul>';
  task.addTask(task.taskList.length + 1, 'Task 1');

  test('Add task to array', () => {
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