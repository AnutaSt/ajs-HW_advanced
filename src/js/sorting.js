export default function sorting(obj, array) {
  const result = [];
  const copyObj = { ...obj };

  array.forEach((elem) => {
    if (elem in copyObj) {
      result.push({ key: elem, value: copyObj[elem] });
      delete copyObj[elem];
    }
  });

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}
