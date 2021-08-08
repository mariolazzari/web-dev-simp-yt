// reduce
const items = [
  { name: "Item1", price: 5 },
  { name: "Item2", price: 10 },
  { name: "Item3", price: 15 },
  { name: "Item4", price: 20 },
];

let totalPrice = 0;
items.forEach(item => {
  totalPrice += item.price;
});

totalPrice = items.reduce((total, item) => {
  console.log("Total:", total);
  console.log("Item", item);

  return total + item.price;
}, 0);

console.log("Total items price:", totalPrice);

// group by
const people = [
  { name: "Mario", age: 46 },
  { name: "Mariarosa", age: 45 },
  { name: "Maria", age: 70 },
  { name: "Gino", age: 70 },
];

const groups = people.reduce((group, person) => {
  const { age } = person;
  if (!group[age]) {
    group[age] = [];
  }

  group[age].push(person);
  return group;
}, {});

console.log("People groups", groups);

// sum (no default -> first value)
const numbers = [1, 3, 5, 7, 9];
const sum = numbers.reduce((sum, number, index, array) => {
  console.log("sum:", sum);
  console.log("number", number);
  console.log("index", index);
  console.log("array", array);

  return sum + number;
});
console.log("Sum:", sum);
