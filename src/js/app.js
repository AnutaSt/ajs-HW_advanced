import sorting from './sorting';
import destructuring from './destructuring';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const sort = sorting(obj, ['name', 'defence']);
// eslint-disable-next-line no-console
console.log(sort);

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

const arr = destructuring(character);

// eslint-disable-next-line no-console
console.log(arr);

// eslint-disable-next-line no-console
console.log(character);
