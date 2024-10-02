const titleElement = document.getElementById("title");
const priceElement = document.getElementById("price");
const imageElement = document.getElementById("image");

// Lay id from Url ?id=xxxx
const productId = location.search.split("=")[1]; // new URLSearchParams(location.search).get("id")

async function getProductDeltai() {
  // check productId: undefined ko call api
  const { data } = await axios.get(
    `http://localhost:3000/products/${productId}`
  );
  titleElement.value = data.title;
  priceElement.value = data.price;
  imageElement.value = data.image;
}

getProductDeltai();

async function handleSubmit(event) {
  // 1.chặn hành động lan truyền lên phía trên
  event.preventDefault();

  // 2. Call API add product POST
  const product = {
    title: titleElement.value,
    price: Number(priceElement.value),
    image: imageElement.value,
  };

  // 3. Check Product ID
  if (productId) {
    await axios.put(`http://localhost:3000/products/${productId}`, product);
  } else {
    await axios.post("http://localhost:3000/products", product);
  }

  location.href = "/";

  alert("Add Product Done");
}
