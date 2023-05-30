const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "PC", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// filter
const filtered = items.filter(item => item.price <= 100);
console.log("Items", items);
console.log("Filtered", filtered);

// map
const names = items.map(item => item.name);
console.log("Items", items);
console.log("Names", names);

// find
let book = items.find(item => item.name === "Book");
console.log("Items", items);
console.log("Book", book);

// forEach
items.forEach(item => {
  console.log(`${item.name}: ${item.price}`);
});

// some
const inexpensiveItem = items.some(item => item.price < 10);
console.log("Items", items);
console.log("Inexpensive item", inexpensiveItem);

// every
const anyItem = items.every(item => item.price < 10);
console.log("Items", items);
console.log("Everyitem", anyItem);

// reduce
const total = items.reduce((acc, cur) => (acc += cur.price), 0);
console.log("Items", items);
console.log("Total price", total);

// includes
book = items.includes(item => item.name === "Book");
console.log("Items", items);
console.log("Book included?", book);
