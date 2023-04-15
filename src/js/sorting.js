export default function sorting(obj, arr) {
  const object = { ...obj };
  const result = [];

  arr.forEach((item) => {
    result.push({ key: item, value: object[item] });
    delete object[item];
  });

  const temp = [];
  // eslint-disable-next-line
  for (const key in object) {
    temp.push({ key, value: object[key] });
  }

  // eslint-disable-next-line array-callback-return, consistent-return
  temp.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
  result.push(...temp);

  return result;
}
