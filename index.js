import { myArr } from "./data";



function show() {

  const myArrResult = myArr.map(item => item.vocabulary).flat()

  // console.log(myArrResult);



  const reArr = []

  for (let i = 0; i < 5; i++) {
    const result = Math.floor(Math.random() * myArrResult.length);
    reArr.push(myArrResult[result]);  // .split(" - ")
  }

  console.log(reArr);
}

// console.log(reArr.map(item => item[1]));
