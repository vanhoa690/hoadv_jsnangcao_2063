// 1. Truy cap DOM: document.getElementById(id)
const listElement = document.getElementById("list");
console.log(listElement);

// 2. innerHTML: update DOM, su dung ``: Huyen doi (ben trai so 1)

// 3: Chen Du Lieu
const products = [
  {
    id: 1,
    title: "San pham AA+",
    price: 100000,
  },
  {
    id: 2,
    title: "San pham B+",
    price: 100000,
  },
  {
    id: 2,
    title: "San pham C+",
    price: 100000,
  },
];

function sayHello() {}
// arrow function
const sayHello2 = () => {};

// map: [1,2] => function (item x 2) => [2, 4]
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
        ${products.map(
          (product) => `
            <tr>
            <th scope="row">1</th>
            <td>${product.title}</td>
            <td>${product.price} VND</td>
            <td>
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-info">Edit</button>
            </td>
          </tr>
          `
        )}
        </tbody>
      </table>
      `;
