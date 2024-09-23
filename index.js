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
    vocabulary: [
      'これ',
      'それ',
      'あれ',
      'この',
      'その',
      'あの',
      'ほん',
      'じしよ',
      'ざっし',
      'しんぶん',
      'てちよう',
      'めいし',
      'えんぴつ',
      'かぎ',
      'とけい',
      'かさ',
      'かばん',
      'じどうしや',
      'つくえ',
      'いす',
      'えいご',
      'にほんご',
      'ご',
      'なん',
      'そう',
      'ちがいます',
      'そうですか',
      'あのう',
      'ほんのきもちです',
      'どうぞ',
      'どうも',
      'どうもありがとございます',
      'これからおせわになります',
      'こちらこそよろしく',
      'ノート',
      'カード',
      'テレホンカード',
      'ボールペン',
      'シヤープペンシル',
      'カセットテープ',
      'テープレコーダ',
      'テレビ',
      'ラジオ',
      'カメラ',
      'コンピユーター',
      'チヨコレート',
      'コーヒー'
    ]
  },
  {
    lesson: 3,
    vocabulary: [
      'ここ', 'そこ', 'あそこ',
      'どこ', 'こちら', 'そちら',
      'あちら', 'どちら', 'きよしつ',
      'しよくどう', 'じむしよ', 'かいぎしつ',
      'うけつけ', 'へや', 'おてあらい',
      'かい（がい）', 'かいだん', 'おくに',
      'かいしや', 'うち', 'でんわ',
      'くつ', 'うりば', 'ちか',
      'たばこ', 'なんがい', 'えん',
      'いくら', 'ひやく', 'せん',
      'まん', 'すみません', 'でございます',
      'をみせてください', 'じや', 'をください',
      'しんおおさか',
      'ロビ', 'トイレ', 'エレベータ', 'エスカレータ', 'ネクタイ', 'ワイン', 'イタリア', 'スイス'
    ]
  },
]

const arrayForVerb = [
  {
    lesson: 4,
    vocabulary: ['おきます', 'ねます', 'はたらきます', 'やすみます', 'べんきようします', 'おわります']
  },
  {
    lesson: 5,
    vocabulary: ['いきます', 'きます', 'かえります']
  },
  {
    lesson: 6,
    vocabulary: ['たべます', 'のみます',
      'すいます', 'みます',
      'ききます', 'よみます',
      'かきます', 'かいます',
      'とります', 'します',
      'あいます']
  },
  {
    lesson: 7,
    vocabulary: ['きります', 'おきります',
      'あげます', 'もらいます',
      'かします', 'かります',
      'おしえます', 'ならいます',
      'かけます']
  },
  {
    lesson: 9,
    vocabulary: ["わかります", "います", "あります", "かかります", "やすみます"]
  },
  {
    lesson: 13,
    vocabulary: [
      'あそびます',
      'およぎます',
      'むかえます',
      'つかれます',
      'だします',
      'はいります',
      'でます',
      'けっこんします',
      'かいものします',
      'しよくじします',
      'さんぽします']
  },
  {
    lesson: 14,
    vocabulary: ['つけます', 'けします',
      'あけます', 'しめます',
      'いそぎます', 'まちます',
      'とめます', 'まがります',
      'もちます', 'とります',
      'てつだいます', 'よびます',
      'はなします', 'みせます',
      'おしえます', 'はじめます',
      'ふります']
  },
  {
    lesson: 15,
    vocabulary: ['たちます',
      'すわります',
      'つかいます',
      'おきます',
      'つきります',
      'うります',
      'しります',
      'すみます',
      'けんきゆうします',
      'しっています',
      'すんでいます']
  }
]


/* function show() {

  const vocab = document.getElementById("vocab");
  const verb = document.getElementById("verb");

  const myArrResult = myArr.map(item => item.vocabulary).flat()
  const myVerbArrResult = arrayForVerb.map(item => item.vocabulary).flat()

  // console.log(myArrResult);

  const reArr = [];
  const verbArr = [];



  // vocab
  for (let i = 0; i < 10; i++) {
    const result = Math.floor(Math.random() * myArrResult.length);
    reArr.push(myArrResult[result]);  // .split(" - ")
  }

  // verb
  for (let i = 0; i < 10; i++) {
    const result = Math.floor(Math.random() * myVerbArrResult.length);
    verbArr.push(myVerbArrResult[result]);  // .split(" - ")
  }



  vocab.innerHTML = `
  <h2>Main Vocabulary</h2>
  <ul class="ul">
      ${reArr.map((item, i) => `<li class="list-items">${item}</li>`).join('')}
  </ul>
`;

  verb.innerHTML = `
  <h2>Verb(ます) Vocabulary</h2>
  <ul>
      ${verbArr.map((item, i) => `<li class="list-items">${item}</li>`).join('')}
  </ul>
`;
} */

let myArrResult = myArr.map(item => item.vocabulary).flat();
let myVerbArrResult = arrayForVerb.map(item => item.vocabulary).flat();

function show() {
  const vocab = document.getElementById("vocab");
  const verb = document.getElementById("verb");

  // Flatten the arrays (if they contain arrays of vocabulary)

  const reArr = [];
  const verbArr = [];

  // Randomly select unique vocabulary items (10 items)
  for (let i = 0; i < 10; i++) {

    if (myArrResult.length === 0) break;  // Stop if no more items are left

    const randomIndex = Math.floor(Math.random() * myArrResult.length);
    reArr.push(myArrResult[randomIndex]);  // Add the selected item to reArr
    myArrResult.splice(randomIndex, 1);    // Remove the selected item from the copy
  }

  // Randomly select unique verb vocabulary items (10 items)
  for (let i = 0; i < 10; i++) {

    if (myVerbArrResult.length === 0) break;  // Stop if no more items are left

    const randomIndex = Math.floor(Math.random() * myVerbArrResult.length);

    verbArr.push(myVerbArrResult[randomIndex]);  // Add the selected item to verbArr
    myVerbArrResult.splice(randomIndex, 1);      // Remove the selected item from the copy
  }

  // Inject vocabulary list into HTML
  vocab.innerHTML = `
    <h2>Main Vocabulary</h2>
    <ul class="ul">
        ${reArr.map((item) => `<li class="list-items">${item}</li>`).join('')}
    </ul>
  `;

  // Inject verb vocabulary list into HTML
  verb.innerHTML = `
    <h2>Verb(ます) Vocabulary</h2>
    <ul>
        ${verbArr.map((item) => `<li class="list-items">${item}</li>`).join('')}
    </ul>
  `;

  // Debugging outputs
  console.log(reArr);
  // console.log(myArrResult);
}


// console.log(reArr.map(item => item[1]));
