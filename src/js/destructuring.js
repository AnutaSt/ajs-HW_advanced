export default function destructuring({ ...obj }) {
  const { special } = obj;
  const temp = [];
  special.forEach((item) => {
    // eslint-disable-next-line object-curly-newline
    const { id, name, icon, description = 'Описание недоступно' } = item;
    // eslint-disable-next-line object-curly-newline
    temp.push({ id, name, icon, description });
  });
  return temp;
}
