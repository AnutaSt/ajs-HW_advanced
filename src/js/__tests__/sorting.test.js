import sorting from '../sorting';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test.each([
  [
    'with 2 arg',
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    'with 3 arg',
    ['name', 'defence', 'attack'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ],
  ],
  [
    'with non-existent property',
    ['name', 'level', 'property'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
]);

test('checking that the object has not changed', () => {
  const initial = { ...obj };
  sorting(obj, ['name', 'level']);
  expect(obj).toEqual(initial);
});
