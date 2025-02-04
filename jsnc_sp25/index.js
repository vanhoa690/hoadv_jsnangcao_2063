// show html = javascript
// 1. innerHTML
// 2. Template Literals ``
// 3. map, callback trong map
// 4. arrow function () => {}
// 5 nodejs
// 6 json server
// 7 db.json
// 8 chay server: json-server --watch db.json
// 9 Kiểm tra API: REST API
// 10. gọi API trong JavaScript:
// 4 cach: 1.fetch().then() 2.fetch() async/await 3.axios().then() 4.axios() async/await
// 10.1: fetch()
// 10.2 : axios
// 11. Xu ly bat dong bo trong javascript: async/await or then

const products = [
  { id: 1, name: "Sản phẩm A", price: 100 },
  { id: 2, name: "Sản phẩm B", price: 200 },
  { id: 3, name: "Sản phẩm C", price: 300 },
  { id: 4, name: "Sản phẩm D", price: 400 },
  { id: 5, name: "Sản phẩm E", price: 500 },
  { id: 6, name: "Sản phẩm F", price: 600 },
  { id: 7, name: "Sản phẩm H", price: 700 },
  { id: 8, name: "Sản phẩm H", price: 700 },
];

// callback(currentValue) dung cho map
function renderRow(product) {
  return `
   <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>Giá: ${product.price} VNĐ</td>
      <td>
        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-info">Edit</button>
      </td>
    </tr>
  `;
}

// Tạo HTML từ mảng sản phẩm
const htmlContent = products.map(renderRow).join("");

document.getElementById("list").innerHTML = htmlContent;
