async function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn reload trang

  // Lấy dữ liệu từ form
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  //image, desc

  // Kiểm tra dữ liệu đầu vào
  if (!name) {
    return alert("Vui long dien name");
  }

  try {
    const data = {
      name,
      price: Number(price),
      category,
    };
    await axios.post("http://localhost:3000/products", data);

    location.href = "/";
    alert("Them thanh cong");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
