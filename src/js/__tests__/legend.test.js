import { byField, persons } from '../legend';

const personsList = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const personListSorted = personsList.sort(byField('health'));

const datalist = [
  [personListSorted[0].health, 'healthy'],
  [personListSorted[1].health, 'healthy'],
  [personListSorted[2].health, 'critical'],
  [personListSorted[2].health = 45, 'wounded'],
  [personListSorted[2].health = 0, 'god mode or person death'],
];

const handler = test.each(datalist);
handler('test health status person, value: %i, status: %s', (val, statusHealth) => {
  const healthValue = persons(val);
  expect(healthValue).toEqual(statusHealth);
});
