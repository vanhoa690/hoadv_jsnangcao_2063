let productId = null;
const titleElement = document.getElementById("title");
const priceElement = document.getElementById("price");

async function getProductDetail() {
  productId = window.location.search.split("=")[1]; // ?productId=id
  // productId = new URLSearchParams(window.location.search).get("id");

  if (!productId) return;
  const { data } = await axios.get(
    "http://localhost:3000/products/" + productId
  );
  titleElement.value = data.title;
  priceElement.value = data.price;
}

getProductDetail();

async function handleSubmit(event) {
  event.preventDefault();
  const title = titleElement.value;
  const price = priceElement.value;
  if (!title) {
    alert("Title");
    return;
  }
  const data = {
    title,
    price,
  };
  if (productId) {
    await axios.put("http://localhost:3000/products/" + productId, data);
  } else {
    await axios.post("http://localhost:3000/products", data);
  }
  window.location.href = "/";
}
