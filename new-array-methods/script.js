// with
const people = ["Mario", "Mariarosa", "Roby"];
// const peopleCopy = [...people];
// people[2] = "Maria";
const peopleCopy = people.with(2, "Maria");

console.log("People", people);
console.log("People copy", peopleCopy);

// toSorted
// const sortedPeople = [...people].sort();
const sortedPeople = people.toSorted();
console.log("People", people);
console.log("Sorted people", sortedPeople);

// toReversed
// const revPeople = [...people].reverse();
const revPeople = people.toReversed();
console.log("People", people);
console.log("Reversed people", revPeople);

// toSpliced
//const modPeople = [...people].splice(0, 2, "Maria");
const modPeople = people.toSpliced(0, 2, "Maria");
console.log("People", people);
console.log("Mod people", modPeople);
