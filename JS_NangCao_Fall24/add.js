const form = document.getElementById("form");

window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSubmit);
}

async function handleSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  const { data } = await axios.post("http://localhost:3000/products", {
    title,
    price,
  });
  console.log(data);
}
