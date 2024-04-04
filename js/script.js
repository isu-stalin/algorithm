// let body = document.querySelector("body");
// let div = document.createElement("div");
// body.appendChild(div);

// // arrayni uziga qushish

// let arr = [
//   [1, 2],
//   [1, 2],
// ];
// let totalNum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     totalNum += arr[i][j];
//   }
// }

// div.innerHTML = totalNum;

///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////// 1 topshiriq

array = ["home", "joke", "laptop", "table", "chair", "book"];
array_length = array[array.length - 1].length;
console.log("array length:", array_length);

////////////// 2 topshiriq

input = "1.1.1.2.3.4;";
output = input.replaceAll(".", "[.]");
console.log(output);

/////////////// 3 topshiriq

let obj = {
  1: "Home",
  2: "Joke",
  3: "Laptop",
  4: "Table",
};

let objKeys = Object.keys(obj).length;
console.log("object keys length :", objKeys);

//////////////// 4 topshiriq

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));