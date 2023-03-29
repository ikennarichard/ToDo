function addTask(arr, task) {
  const newTask = {
    index: arr.length,
    completed: false,
    descrption: task,
  };

  arr.push(newTask);
}

function deleteTask(arr, index) {
  const filteredList = arr.filter((item) => item.index !== index);
  return filteredList;
}

export { addTask, deleteTask };