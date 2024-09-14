const form = document.getElementById("form");

window.addEventListener("DOMContentLoaded", init);
let productId = null;
function init() {
  getProductDetail();
  form.addEventListener("submit", handleSubmit);
}

async function getProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  productId = urlParams.get("id");
  if (!productId) return;
  const { data } = await axios.get(
    "http://localhost:3000/products/" + productId
  );
  document.getElementById("title").value = data.title;
  document.getElementById("price").value = data.price;
}

async function handleSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  await axios.put("http://localhost:3000/products/" + productId, {
    title,
    price,
  });
  window.location.href = "/";
}
