async function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn reload trang

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  //   Kiem tra du lieu: Validate
  if (!name || !price || price < 0) {
    return alert("Vui lòng nhập tên sản phẩm va gia hợp lệ!");
  }

  // Them du lieu vao db.json
  try {
    const data = {
      name,
      price: Number(price),
      category,
    };
    const product = await axios.post("http://localhost:3000/products", data);

    location.href = "/";

    alert("them thanh cong");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
