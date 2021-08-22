const makeRequest = location => {
  return new Promise((resolve, reject) => {
    console.log("Making request to:", location);

    if (location === "Google") {
      resolve("Google says HI");
    } else {
      reject("We can only talk tp Google");
    }
  });
};

const processRequest = response => {
  return new Promise((resolve, reject) => {
    console.log("Processing request");
    resolve("Extra info: " + response);
  });
};

makeRequest("Google")
  .then(response => {
    console.log("Promise version");
    return processRequest(response);
  })
  .then(info => console.log(info))
  .catch(err => console.log(err));

const doWork = async () => {
  try {
    console.log("Async version");
    const res = await makeRequest("Google");
    const info = await processRequest(res);
    console.log("Async:", info);
  } catch (error) {
    console.log("Error:", error);
  }
};

doWork();
