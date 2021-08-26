let myName = "Mario";

function printName() {
  console.log(myName);
}

myName = "Mariarosa";
printName();

myName = "Maria";
printName();

// inner function
function outerFunction(outerValue) {
  const outer2 = "outer2";

  return function innerFunction(innerValue) {
    console.log("outerValue", outerValue);
    console.log("innerValue", innerValue);
    console.log(outer2);
  };
}

const newFunction = outerFunction("outside");
newFunction("inner");

// ex
function getUrl(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

getUrl("https://jsonplaceholder.typicode.com/posts");
