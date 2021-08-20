let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a === 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

p.then(message => console.log("then:", message)).catch(err =>
  console.log("catch:", err)
);
