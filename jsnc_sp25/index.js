// 1- innerHTML
// 2- Template string ``
// 3- map (callback(currentValue))
// 4- arrow funtion: tach rieng ham moi, or nhet ham vao map

const products = [
  { id: 1, name: "Sản phẩm A", price: 100 },
  { id: 2, name: "Sản phẩm B", price: 200 },
  { id: 3, name: "Sản phẩm C", price: 300 },
  { id: 4, name: "Sản phẩm D", price: 400 },
  { id: 5, name: "Sản phẩm E", price: 500 },
  { id: 6, name: "Sản phẩm F", price: 600 },
];

// callback(currentValue) cho map
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

const htmlContent = products.map(renderRow).join("");

document.getElementById("list").innerHTML = htmlContent;
