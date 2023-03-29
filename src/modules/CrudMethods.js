function addTask(arr, task) {
  const newTask = {
    index: arr.length,
    completed: false,
    descrption: task,
  };

  arr.push(newTask);
}