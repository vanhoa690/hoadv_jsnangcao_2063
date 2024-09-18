// 1. Truy cap DOM: document.getElementById(id)
const listElement = document.getElementById("list");
console.log(listElement);

// 2. innerHTML: update DOM, su dung ``: Huyen doi (ben trai so 1)

// 3: Chen Du Lieu
const product = {
  title: "San pham AA+",
  price: 100000,
};

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
          <tr>
            <th scope="row">1</th>
            <td>${product.title}</td>
            <td>${product.price} VND</td>
            <td>
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-info">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      `;
