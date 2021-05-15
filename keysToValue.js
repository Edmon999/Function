const convertKeyToValue = (obj) => {
  let res = {};
  for (let key in obj) {
    if (!res[obj[key]]) {
      res[obj[key]] = [];
    }
    res[obj[key]].push(key);
  }
  for (let key in res) {
    if (res[key].length === 1) {
      res[key] = res[key].join("");
    }
  }
  return res;
};
