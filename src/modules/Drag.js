/* eslint-disable class-methods-use-this */
export default class Drag {
  static drag() {
    const listItem = document.querySelectorAll('.list_item');
    listItem.forEach((item) => {
      item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });

      item.addEventListener('dragenter', () => {
        item.classList.add('highlight');
      });

      item.addEventListener('dragleave', () => {
        item.classList.remove('highlight');
      });

      item.addEventListener('drop', () => {
        item.classList.remove('highlight');
      });
    });
  }

  static getNextElem(container, y) {
    const dragElems = [...container.querySelectorAll('.list_item:not(.dragging)')];
    return dragElems.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 7;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  static runDrag() {
    Drag.drag();
    const container = document.querySelector('.list');
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const nextElem = Drag.getNextElem(container, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (nextElem === undefined || draggable === null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, nextElem);
      }
    });
  }
}