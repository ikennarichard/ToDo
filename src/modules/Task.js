export default class Task {
  constructor(index, description, completed=false) {
    this.index = index;
    this.completed = completed;
    this.description = description;
  };
}