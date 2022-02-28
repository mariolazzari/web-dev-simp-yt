const users = [
  { name: "Mario", age: 46, admin: true },
  { name: "Luigi", age: 40, admin: false },
  { name: "Peach", age: 38, admin: true },
  { name: "Toad", age: 1, admin: false },
];

console.table(users);

const loop = () => {
  for (let i = 0; i < 100000000; i++) {
    // console.log(i);
  }
};

const start = new Date();
loop();
const end = new Date();
console.log("getTime:", end.getTime() - start.getTime());

console.time("loop");
loop();
console.timeEnd("loop");

let div = document.getElementById("grab");
console.log(div);
console.dir(div);

div = document.querySelector("div");
console.log(div);
console.dir(div);
