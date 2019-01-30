// Some data to work with
interface IPerson {
  name: string;
  age: number;
}

const BOSS: IPerson = { 
  name: 'Big Boss',
  age: 45.25
}

const RETIREMENT_AGE: number = 62;

/**
 * PURE FUNCTION - ALWAYS returns the same result with the same given parameters:
 *  * has a predictable outcome
 *  * doesn't change the input value, creates a new value
 *  * doesn't change an outside scope variable
 */  

function yearsLeft_pureFunction(person: IPerson, retirementAge: number = 62): number {
  return retirementAge - Math.abs(Math.floor(person.age));
}

/**
 * IMPURE FUNCTION might 
 */
//  - access global scope/variables
function yearsLeft_impureFunction1(person: IPerson): number {
  return RETIREMENT_AGE - Math.abs(Math.floor(BOSS.age)); 
}

// - change/mutate the input
function yearsLeft_impureFunction2(person: IPerson, retirementAge: number = 62): number {
  person.age = Math.abs(Math.floor(person.age));
  return retirementAge - person.age;
}

// - pass the input to another function - that can do anything with it
function correctPersonData(person: IPerson): void {
  // this function mutates the input object
  person.age = 32.2;
}

function yearsLeft_impureFunction3(person: IPerson, retirementAge: number = 62): number {
  correctPersonData(person); // the input object is mutated
  return retirementAge - Math.abs(Math.floor(person.age));
}

// - mutates other variables outside its scope
function yearsLeft_impureFunction4(person: IPerson, retirementAge: number = 62): number {
  BOSS.name = 'Mark Zuckerberg'; // this will change a global variable
  return retirementAge - Math.abs(Math.floor(person.age));
}

console.log(yearsLeft_pureFunction(BOSS)); 
console.log(BOSS);
console.log(yearsLeft_impureFunction1(BOSS));
console.log(BOSS);
console.log(yearsLeft_impureFunction2(BOSS));
console.log(BOSS);
console.log(yearsLeft_impureFunction3(BOSS));
console.log(BOSS);


// As we can see an impure function doesn't have a predictable outcome: 17, 17, 30...