const myArr = [
  {
    lesson: 1,
    vocabulary: ["bangla - বাংলা", "english - ইংলিশ"]
  },
  {
    lesson: 2,
    vocabulary: ["japanese - জাপানিজ", "chinese - চাইনিজ"]
  },
  {
    lesson: 3,
    vocabulary: ["arabic - এরাবিক", "hindi - হিন্দি"]
  },
]

const myArrResult = myArr.map(item => item.vocabulary).flat()

// console.log(myArrResult);



const reArr = []

for (let i = 0; i < 5; i++) {
  const result = Math.floor(Math.random() * myArrResult.length);
  reArr.push(myArrResult[result].split(" - "));
}

console.log(reArr.map(item => item[1]));
