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
            <button class="btn btn-info"  type="button"
        data-toggle="modal"
        data-target="#exampleModal" id='${product.id}'>Edit</button>
         <a class="btn btn-info"  type="button"
      href='/edit.html?id=${product.id}'
       >Link Edit</a>
          </td>
        </tr>
      `
       )
       .join("")}
      </tbody>
    </table>
  `;
}

async function handleSubmit(event) {
  event.preventDefault();
  console.log("id", event.relatedTarget.id);

  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  const { data } = await axios.post("http://localhost:3000/products", {
    title,
    price,
  });
}

displayProductList();
