const loadLocalStorage = () => {
  const ls = localStorage.getItem("break-time");
  return ls;
};

export { loadLocalStorage };
