import updateTaskDescription from './update-taskinput.js';

jest.mock('./renderTask.js');
jest.mock('./index.js');

describe('update input', () => {
  test('update the task input in local storage', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
    const index = 2;
    const newdescription = 'Updated Task';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const uptasks = updateTaskDescription(tasks, index, newdescription);
    expect(uptasks[index].description).toBe(newdescription);
  });

  test('update the task input in local storage', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];
    const index = 1;
    const newdescription = 'new Updated Task';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const uptasks = updateTaskDescription(tasks, index, newdescription);
    expect(uptasks[index].description).toBe(newdescription);
  });
});