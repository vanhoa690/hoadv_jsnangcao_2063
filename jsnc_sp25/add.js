const id = location.search.split("=")[1]; // [?id, 8] hoac underfined

async function getProductDetail() {
  if (!id) return; // stop funtion
  try {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    console.log("Product:", res.data);

    document.getElementById("name").value = res.data.name;
    document.getElementById("price").value = res.data.price;
    document.getElementById("category").value = res.data.category;
  } catch (error) {
    alert(error.message);
  }
}

getProductDetail();

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

    if (id) {
      console.log("edit product");
      await axios.put(`http://localhost:3000/products/${id}`, data);
    } else {
      await axios.post("http://localhost:3000/products", data);
    }

    location.href = "/";

    alert(id ? "edit thanh cong" : "them thanh cong");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
