function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

function isPositive(a) {
  return a > 0;
}

const isPositive2 = a => a > 0;

function randomNumber() {
  return Math.random();
}

const randomNumber2 = () => Math.random();

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => console.log("click"));

// this
class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    setTimeout(function () {
      console.log("Function:", this.name);
    }, 100);
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 100);
  }
}

const mario = new Person("Mario");
mario.printName();
mario.printNameArrow();
