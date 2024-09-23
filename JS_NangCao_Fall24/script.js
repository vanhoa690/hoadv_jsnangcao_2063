async function handleDelete(id) {
  if (window.confirm("Xoa")) {
    await axios.delete("http://localhost:3000/products/" + id);
  }
}

async function displayProductList() {
  const { data: products } = await axios.get("http://localhost:3000/products");

  const list = document.getElementById("list");

  list.innerHTML = `
   <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
     ${products
       .map(
         (product) => `
         <tr>
          <th scope="row">${product.id}</th>
          <td>${product.title}</td>
          <td>${product.price} VND</td>
          <td>
            <button class="btn btn-danger" onClick="handleDelete('${product.id}')">Delete</button>
            <a class="btn btn-info" type="button" href='/add.html?id=${product.id}'>Edit</a>
          </td>
        </tr>
      `
       )
       .join("")}
      </tbody>
    </table>
  `;
}

displayProductList();
