const STORAGE_SET = "tasks";

const get = () => {
  const tasksString = localStorage.getItem(STORAGE_SET);
  return tasksString ? JSON.parse(tasksString) : [];
};

const set = (tasks) => {
  localStorage.setItem(STORAGE_SET, JSON.stringify(tasks));
};

export { get, set };
