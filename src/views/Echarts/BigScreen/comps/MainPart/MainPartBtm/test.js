let src = [
  {
    name: "Egypt",
    value: [6, 5, 2],
  },
  {
    name: "Tanzania",
    value: [5, 3, 3],
  },
  {
    name: "Philippines",
    value: [0, 3, 3],
  },
  {
    name: "Gabon",
    value: [6, 1, 4],
  },
  {
    name: "Togo",
    value: [6, 4, 4],
  },
  {
    name: "India",
    value: [1, 7, 4],
  },
  {
    name: "Vietnam",
    value: [4, 0, 5],
  },
  {
    name: "Nigeria",
    value: [4, 1, 5],
  },
  {
    name: "Uganda",
    value: [3, 7, 6],
  },
  {
    name: "Indonesia",
    value: [7, 3, 6],
  },
  {
    name: "Malawi",
    value: [7, 6, 7],
  },
  {
    name: "Italy",
    value: [2, 0, 7],
  },
  {
    name: "Namibia",
    value: [5, 7, 8],
  },
  {
    name: "Niger",
    value: [5, 2, 8],
  },
  {
    name: "Angola",
    value: [3, 5, 9],
  },
  {
    name: "Botswana",
    value: [0, 4, 9],
  },
  {
    name: "Liberia",
    value: [7, 5, 9],
  },
  {
    name: "Swaziland",
    value: [4, 4, 10],
  },
  {
    name: "Zimbabwe",
    value: [5, 3, 10],
  },
  {
    name: "Benin",
    value: [7, 6, 11],
  },
  {
    name: "Ghana",
    value: [2, 5, 11],
  },
  {
    name: "Madagascar",
    value: [3, 1, 11],
  },
  {
    name: "Cameroon",
    value: [3, 1, 12],
  },
  {
    name: "Mozambique",
    value: [7, 1, 13],
  },
  {
    name: "France",
    value: [3, 7, 13],
  },
  {
    name: "Burkina Faso",
    value: [3, 6, 13],
  },
  {
    name: "Kazakhstan",
    value: [8, 5, 13],
  },
  {
    name: "Kenya",
    value: [4, 3, 14],
  },
  {
    name: "Cambodia",
    value: [1, 3, 14],
  },
  {
    name: "Peru",
    value: [8, 2, 15],
  },
  {
    name: "Sierra Leone",
    value: [7, 3, 17],
  },
  {
    name: "Ethiopia",
    value: [5, 3, 17],
  },
  {
    name: "Zambia",
    value: [0, 5, 17],
  },
  {
    name: "Greece",
    value: [7, 7, 18],
  },
  {
    name: "Lesotho",
    value: [0, 6, 19],
  },
  {
    name: "Rwanda",
    value: [7, 6, 20],
  },
];

let arr = src.map((i) => {
  return i.value[2];
});
console.log(arr, "--line151");

//定义变量
let width = 11;
let height = 11;
let orgX = 0;
let orgY = 0;
let currentx = 5;
let currenty = 5;

let level = 0;
let step = 3;
let index = 0;
//
let result = [];
// 上转向点条件
let up = function(n) {
  return 2 * (n + 1) * (2 * n + 1);
  /**
   * level num
   * 0     0
   */
};
// 右转向点条件
let right = function(n) {
  return 2 * (n + 1) * (2 * n + 1) + 2 * n + 2;
};
// 下转向点条件
let down = function(n) {
  return 2 * (n + 1) * (2 * n + 1) + 4 * n + 4;
};
// 左转向点条件
let left = function(n) {
  return 2 * (n + 1) * (2 * n + 1) + 6 * n + 7;
};

/**
let list  = [0,1,2,3,4]
list.forEach(i=>{
  console.log(`
up :    ${up(i)}    | index:${i},
right : ${right(i)} | index:${i},,
down :  ${down(i)}  | index:${i},,
left :  ${left(i)}  | index:${i},,
  `);
})
-----------
up :    2  | index:0,
right : 4  | index:0,,
down :  6  | index:0,,
left :  9  | index:0,,

up :    12  | index:1,
right : 16  | index:1,,
down :  20  | index:1,,
left :  25  | index:1,,

up :    30  | index:2,
right : 36  | index:2,,
down :  42  | index:2,,
left :  49  | index:2,,

up :    56  | index:3,
right : 64  | index:3,,
down :  72  | index:3,,
left :  81  | index:3,,
  
up :    90   | index:4,
right : 100  | index:4,,
down :  110  | index:4,,
left :  121  | index:4,,
 */
let levelEnd = function(n) {
  // 转向前的最后一个点，表示了层级和转向关键点的关系
  return (8 + (n - 1) * 4) * n;
  /**
   * level    num
   * 0        0
   * 1        8
   * 2        24
   * 3        48
   * 4        80
   * description: 第1层转向前圈内的最后一个点为8，第2层转向前圈内的最后一个点为24,....
   * */
};

arr.forEach((v) => {
  if(index === 0){
    let temp = {}; 
    temp.x = currentx;
    temp.y = currenty;
    temp.value = v;
    result.push(temp);//first point(center,center)
  }else if(index === 1){
    let temp = {}; 
    temp.x = currentx;
    temp.y = currenty - step;
    temp.value = v;
    currenty = currenty - step;
    result.push(temp);//second point (center,center-step)
  }else{
    index == 2
    if(index)
    // let temp = {};
    // temp.x = currentx;
    // temp.y = currenty - step;
    // temp.value = v;
    // currenty = currenty - step;
    // result.push(temp);    
    // 每次判断都是在判断下一个点的绘制位置


  }
  if (index == levelEnd(level)) {
   


    // result.push(temp);
  }
  index++;
});
