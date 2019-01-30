const a: Array<number> = [5, 6, 7, 9, 1, 2];
const b: Array<number> = [ ...a ];

console.log('a =', a);
console.log('b =', b);

b[2] = 666;

console.log('a =', a);
console.log('b =', b);

interface IPerson {
  name: string;
  age: number;
}

const persons: Array<IPerson> = [
  {
    name: 'John',
    age: 25
  },
  {
    name: 'Janet',
    age: 46
  },
  {
    name: 'Merlin',
    age: 777
  }
];

const persons1: Array<IPerson> = [
  ...persons
]

console.log(persons);
console.log(persons1);
console.log('---------------------------');

persons1[2].name = 'Agarici';


console.log(persons);
console.log(persons1);
console.log('---------------------------');


persons1[2] = {
  name: 'Superman',
  age: 75
}

console.log(persons);
console.log(persons1);
console.log('---------------------------');


const persons2: Array<IPerson> = persons
.map((person: IPerson) => ({ ...person }));

persons2[2].name = 'Pacalici';


console.log(persons);
console.log(persons2);
console.log('---------------------------');