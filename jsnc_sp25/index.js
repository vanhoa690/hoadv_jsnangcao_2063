// code javascript
// on tap javascript PHP $tenbien $my_age // snake case
// JS: var, let, const (ECMA - ES6) // camelcase

var mySchool = "FPOLY"; // bo qua

let myName = "hoadv"; // khai bao bien ma gia tri sau nay se thay doi
myName = "hoadv21";

const myAge = 35; // hang so, ko dc gia tri cua bien
// myAge = 36;

console.log(myName, myAge);

// Kieu du lieu null undefined
//boolean: true / false
const likeJS = true;

//number
const myAge2 = 35;

//string
myName = "hoadv21222";

// object  {} key: value
const student = {
  name: "hoadv",
  age: 35,
  subject: "JSNC",
};

const product = {
  id: 1,
  name: "Iphone 16",
  price: 1000,
};

//array
const productIds = [1, 2, 3, 4]; // 0: 1, 1: 2
const productList = [
  {
    id: 1,
    name: "Iphone 14",
    price: 1000,
  },
  {
    id: 2,
    name: "Iphone 15",
    price: 1000,
  },
  {
    id: 3,
    name: "Iphone 16",
    price: 1000,
  },
];

// function
function deleteProduct() {
  if (confirm("Xoa san pham")) {
    console.log("Xoa san pham");
  }
}

// deleteProduct();
