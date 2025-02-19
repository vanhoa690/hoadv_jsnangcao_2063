async function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn reload trang

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //   Kiem tra du lieu: Validate
  if (!email || !password || password.length < 6) {
    return alert("Vui lòng nhập tên email va password  hợp lệ!");
  }

  // Them du lieu vao db.json
  try {
    const data = {
      email,
      password,
    };

    console.log(data);

    await axios.post("http://localhost:3000/register", data);

    location.href = "/";

    alert("them thanh cong");
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
