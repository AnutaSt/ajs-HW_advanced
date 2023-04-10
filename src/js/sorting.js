export default function sorting(obj, array) {
  const result = [];
  const copyObj = { ...obj };

  array.forEach((elem) => {
    if (elem in copyObj) {
      result.push({ key: elem, value: copyObj[elem] });
      delete copyObj[elem];
    }
  });

  const temp = [];

  for (const key in copyObj) {
    if (Object.hasOwn(copyObj, key)) {
      temp.push({ key, value: copyObj[key] });
    }
  }

  // eslint-disable-next-line array-callback-return, consistent-return
  array.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}
