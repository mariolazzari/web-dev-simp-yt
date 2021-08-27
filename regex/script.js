const str =
  "The fat cat ran down the street. It was searching for a mouse to eat";

let regex = /cat/g;
let res = str.match(regex);
console.log(regex, res);

regex = /at/g;
res = str.match(regex);
console.log(regex, res);

regex = /at/;
res = str.match(regex);
console.log(regex, res);
