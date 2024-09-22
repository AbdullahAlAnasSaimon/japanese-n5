const myArr = [
  {
    lesson: 1,
    vocabularry: ["bangla", "english"]
  },
  {
    lesson: 2,
    vocabularry: ["japanese", "chinese"]
  },
  {
    lesson: 3,
    vocabularry: ["arabic", "hindi"]
  },
]

const myArrResult = myArr.map(item => item.vocabularry).flat()
console.log(myArrResult);



const reArr = []

for (let i = 0; i < 5; i++) {
  const result = Math.floor(Math.random() * myArrResult.length);
  reArr.push(myArrResult[result]);
}

console.log(reArr);
