const myArr = [
  {
    lesson: 1,
    vocabulary: [
      'わたし',
      'わたしの',
      'わたしたち',
      'わたしたちの',
      'あなた',
      'あなたの',
      'あなたたち',
      'あなたたちの',
      'あのひと (あのかた)',
      'みなさん (みなさま)',
      'さん',
      'ちやん',
      'くん',
      'じん',
      'せんせい',
      'きようし',
      'がくせい',
      'かいしやいん',
      'しやいん',
      'ぎんこういん',
      'いしや',
      'けんきゆうしや',
      'だいがく',
      'びよういん',
      'でんき',
      'だれ (どなた)',
      'さい',
      'なんさい (おいくつ)',
      'はい',
      'いいえ',
      'しつれいですが',
      'はじめまして',
      'どうぞよろしくおねがいします',
      'こちらはみらさんです',
      'ばんぐらからきました',
      'かんこく',
      'ちゆうごく',
      'にほん',
      'エンジニア',
      'アメリカ',
      'イギリス',
      'インド',
      'インドネシア',
      'タイ',
      'ドイツ',
      'フランス',
      'ブラジル']
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
  reArr.push(myArrResult[result]);  // .split(" - ")
}

console.log(reArr);

// console.log(reArr.map(item => item[1]));
