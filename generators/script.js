function* simpleGenerator() {
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");
  yield 2;
  console.log("After 2");
  console.log("Before 3");
  yield 3;
  console.log("After 3");
}

const genObj = simpleGenerator();
console.log(genObj);

const sg1 = simpleGenerator();
let obj = sg1.next();
console.log(obj);
obj = sg1.next();
console.log(obj);
obj = sg1.next();
console.log(obj);
obj = sg1.next();
console.log(obj);

const sg2 = simpleGenerator();
obj = sg2.next();
console.log(obj);
obj = sg2.next();
console.log(obj);

function* generateId() {
  let id = 1;

  while (true) {
    const inc = yield id;
    if (inc) {
      id += inc;
    } else {
      id++;
    }
  }
}

console.log("ID");
const id1 = generateId();
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());
console.log(id1.next());

const id2 = generateId();
console.log(id2.next());
console.log(id2.next());

function* iterator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

console.log("iterators");
const gen1 = iterator([1, 2, 3, 4, 5]);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

const id3 = generateId();
console.log(id3.next());
console.log(id3.next(4));
console.log(id3.next());
