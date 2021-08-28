const getJson = async url => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

getJson("companies.json").then(data => {
  const companies = data;
  const items = companies.map(c => `<li>${c.name}</li>`);

  const list = document.getElementById("list");
  list.innerHTML = items;
});
