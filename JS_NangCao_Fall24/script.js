document.addEventListener("DOMContentLoaded", init);

function init() {
  displayProductList();
}

function displayProductList() {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
    },
  ];

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
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-info">Edit</button>
          </td>
        </tr>
      `
       )
       .join("")}
      </tbody>
    </table>
  `;
}
