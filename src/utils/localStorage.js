export const getTask = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setTask = (key, content) => {
  localStorage.setItem(key, JSON.stringify(content));
};
