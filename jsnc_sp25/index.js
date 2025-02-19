// show html = javascript
// 1. innerHTML
// 2. Template Literals `` (canh so 1) ko phai ' ""
// 3. map, callback trong map
// 4. arrow function () => {}
// 5 nodejs
// 6 json server: npm i json-server@0.17.4
// 7 db.json
// 8 chay server: json-server --watch db.json
// 9 Kiểm tra API: REST API
// 10. gọi API trong JavaScript:
// 4 cach:
// 1.fetch().then(callback function)
// 2.fetch() async/await
// 3.axios().then()
// 4.axios() async/await (chon cach nay)
// 10.1: fetch()
// 10.2 : axios
// 11. Xu ly bat dong bo trong javascript: async/await or then
// 12 delete: buttononClick=funtion delete(product.id)
// 13 call api: axios.delete("API_URL/id")

// callback(currentValue) dung cho map
function renderRow(product) {
  return `
   <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>Giá: ${product.price} VNĐ</td>
       <td>${product.category}</td>
      <td>
        <button onClick=deleteProduct(${product.id}) class="btn btn-danger">Delete</button>
        <a href="/add.html?id=${product.id}"><button class="btn btn-info">Edit</button></a>
      </td>
    </tr>
  `;
}

// Call API Lay danh sach san pham
async function getProducts() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    console.log("Products:", response.data); // response: config, header, data, status

    const products = response.data;

    // Tạo HTML từ mảng sản phẩm
    const htmlContent = products.map(renderRow).join("");

    document.getElementById("list").innerHTML = htmlContent;
  } catch (error) {
    console.error("Show ra loi Error fetching products:", error);
  }
}

// chay ham hien thi danh sach san pham
getProducts();

// xoa san pham
async function deleteProduct(id) {
  if (confirm("Xoa?")) {
    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      alert(`Xoa thanh cong ID: ${id}`);
      console.log(res);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }
}
