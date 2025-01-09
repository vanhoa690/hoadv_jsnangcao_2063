// console.log("jsnc chay dc chua");
// khai bao bien PHP $ten_bien my_name thichPhims, sanphams products
// js: var let const ES6
// var
var myName1 = "hoadv"; // bo qua
// let
let myName = "hoadv"; // thay doi
myName = 5555;
// const
const myAge = 35; // hang so
// myAge = 36;
console.log(myName, myAge);

// kieu du lieu
// boolean true/false
const likeJS = false;
//number
const price = 1000;

//string
const name = "Iphone 16";

// object {} key: value,
const product = {
  name: "Iphone 16",
  price: 1000,
  isStock: true,
};

// array []

const productIds = [1, 2, 3, 4]; // 0: 1, 1: 2

const productList = [
  {
    id: 1,
    name: "Iphone 16",
    price: 1000,
    isStock: true,
  },
  {
    id: 2,
    name: "Iphone 17",
    price: 1000,
    isStock: true,
  },
];

function deleteProduct() {
  if (confirm("Xoa san pham ko?")) {
    console.log("deleteProduct");
  }
}

// deleteProduct();
var myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000, // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener("shake", shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur() {
  console.log("â");

  //put your own code here etc.
  alert("shake!");
}
