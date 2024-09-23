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


function show() {

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

  console.log(reArr);
  console.log(verbArr);

  vocab.innerHTML = `
  <h2>Dynamic Data from JavaScript</h2>
  <p>This paragraph is injected using <strong>innerHTML</strong> method.</p>
  <ul>
      ${reArr.map((item, i) => `<li>${item}</li>`).join('')}
  </ul>
`;

  verb.innerHTML = `
  <h2>Dynamic Data from JavaScript</h2>
  <p>This paragraph is injected using <strong>innerHTML</strong> method.</p>
  <ul>
      ${verbArr.map((item, i) => `<li>${item}</li>`).join('')}
  </ul>
`;
}


// console.log(reArr.map(item => item[1]));
