export const clamp = (val, min, max) => val < min ? min : val > max ? max : val;
export const sequence = (fns, delay, callback) => {
  let p = 0;
  fns.forEach((fn, index) => {
    let d = typeof delay === "number" ? delay * index : delay[clamp(index, 0, delay.length - 1)] + p;
    p = d;
    setTimeout(() => fn(), d);
  });
  if (callback) {
    setTimeout(callback, p);
  }
};
export const saveItems = (items) => {
  for (let key in items) {
    try {
      localStorage.setItem(key, items[key]);
    } catch (error) {
      console.error("error saving item to local storage", key, items[key], error);
    }
  }
};
export const getItem = (item) => {
  let result = localStorage.getItem(item);
  return result;
};
export const getItems = (items) => {
  let result = {};
  for (let key of items) {
    let r = localStorage.getItem(key);
    result[key] = r;
  }
  return result;
};
export const clearStorage = () => {
  localStorage.clear();
};
export const reduceFontSize = (element) => {
  if (element && element.parentElement) {
    let maxWidth = window.innerWidth * 0.8 - 30;
    let maxHeight = parseFloat(getComputedStyle(element.parentElement).getPropertyValue("max-height"));
    let currentSize = 40;
    while (element.clientHeight > maxHeight || element.scrollWidth - 1 > maxWidth) {
      currentSize -= 1;
      element.style.fontSize = `${currentSize}px`;
      element.style.lineHeight = `${currentSize}px`;
    }
  }
};
