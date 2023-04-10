export default function sorting(obj, arr) {
  const result = [];
  const object = { ...obj };

  arr.forEach((item) => {
    if (item in object) {
    result.push({ key: item, value: object[item] });
    delete object[item];
    }
  });

  const temp = [];
  
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      temp.push({ key, value: object[key] });
    }
  }

  // eslint-disable-next-line array-callback-return, consistent-return
  temp.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  const arrKeys = Object.keys(object).sort();
  arrKeys.forEach((item) => {
    result.push({ key: item, value: object[item] });
  });

  return result;
}
