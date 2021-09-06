"use strict";
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
// var name = "window";
// var funcWin = function() {
//   var name = "func-win";
//   console.log(this.name, "--line11"); //window
// };
//funcWin();

// var obj = {
//   name: "func-obj",
//   funcObj: function() {
//     console.log(this.name, "--line19"); //func-obj
//   },
// };
//obj.funcObj();

// var obj2 = {
//   name: "func-obj2",
//   funcObj2: () => {
//     console.log(this.name, "--line27"); //window
//   },
// };
//obj2.funcObj2();

// 由此得出： 箭头函数的this 指向上层作用域

// var obj = {
//   name: "obj",
// };

// var name = "window";
// var func = function() {
//   console.log(this.name);
// };
// window.func.call(obj);//obj

var name = "window";

var obj = {
  name: "obj",
  func: () => {
    console.log(this.name);
  },
};
obj.func();
// console.log(obj.func, "--line52");
