async function handleSubmit(event) {
  // 1.chặn hành động lan truyền lên phía trên
  event.preventDefault();

  // 2. Lay data tu input nhap vao
  const titleElement = document.getElementById("title");
  const priceElement = document.getElementById("price");

  // 3. Call API add product POST
  const newProduct = {
    title: titleElement.value,
    price: Number(priceElement.value),
  };

  console.log(newProduct);

  await axios.post("http://localhost:3000/products", newProduct);
  location.href = "/";
}
