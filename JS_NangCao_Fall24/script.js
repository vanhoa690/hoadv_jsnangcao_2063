const listElement = document.getElementById("list");

async function handleDelete(id) {
  if (confirm("Xoa?")) {
    await axios.delete(`http://localhost:3000/products/${id}`);
  }
}

// 1 Function Render Row Table
function renderRowTable(product) {
  return `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.title}</td>
            <td>${product.price} VND</td>
            <td>
              <button class="btn btn-danger" onClick=handleDelete('${product.id}')>Delete</button>
              <button class="btn btn-info">Edit</button>
            </td>
          </tr>
 `;
}

// 2 Function Get Product List
async function getProductList() {
  const { data } = await axios.get("http://localhost:3000/products");

  listElement.innerHTML = `
  <table class="table">
         <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Title</th>
             <th scope="col">Price</th>
             <th scope="col">Actions</th>
           </tr>
         </thead>
         <tbody>
         ${data.map(renderRowTable).join("")}
         </tbody>
       </table>
       `;
}

// Run Function
getProductList();
