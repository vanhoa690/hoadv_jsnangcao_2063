// show html = javascript
// 1. innerHTML
// 2. Template Literals ``
// 3. map, callback trong map
// 4. arrow function () => {}

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
    </tr>
  `;
}

// Tạo HTML từ mảng sản phẩm
const htmlContent = products.map(renderRow).join("");

document.getElementById("list").innerHTML = htmlContent;
