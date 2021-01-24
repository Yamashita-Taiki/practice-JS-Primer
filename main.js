// うるう年の条件は次のとおりです。

// 西暦で示した年が4で割り切れる年はうるう年です
// ただし、西暦で示した年が100で割り切れる年はうるう年ではありません
// ただし、西暦で示した年が400で割り切れる年はうるう年です

// const year = new Date().getFullYear();  ←動かない
const year = "2021"　　　　　　　　　　　　　
// ←動く

switch (year) {
    case "2020":
        console.log("2020");
        break;
    case "2021": 
        console.log("2021");
        break;
    case "2022": 
        console.log("2022");
        break;
    default:    
        console.log("しらない");
}

// 型変換について
1 + "2"; // => "12"
"1" + "2"; // => "12"

1 - "2"; // => -1
1 - 2; // => -1
// プラス演算子（+）は、数値の加算と文字列の結合を両方実行できるように多重定義されています。
// 文字列に対するマイナス演算子（-）の定義はありません。

// 文字列から数値に変換する典型的なケースとしては、ユーザー入力として数字を受け取ることがあげられます。 ユーザー入力は文字列でしか受け取ることができないため、それを数値に変換してから利用する必要があります。
// 文字列から数値へ明示的に変換するにはNumberコンストラクタ関数が利用できます。
// const input = window.prompt("数字を入力してください", "42");
// 文字列を数値に変換する
// const num = Number(input);
console.log(typeof num); // => "number"

console.log(typeof NaN); // => "number"

// デフォルト引数
function echo(x = 100) {
  return x;
}

console.log(echo(1)); // => 1
console.log(echo()); // => "デフォルト値"

// const array = [1, 2, 3];
// // 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
// const doubleArray = array.map(function(value) {
//     return value * 2; // 返した値をまとめた配列ができる
// });
// console.log(doubleArray); // => [2, 4, 6]

const array = [1,2,3];
const doubleArray = array.map(value => value * 2)
console.log(doubleArray)

const a = [1,2,3]
a.forEach(v => {
    console.log(v)
});

const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name: name
};
console.log(obj); // => { name: "名前" }

const color = "blue";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj2 = {
    name: color
};
console.log(obj2); // => { name: "名前" }

const obj3 = {
    key: "value",
    123:456
};
// ドット記法で参照
console.log(obj3.key); // => "value"
// ブラケット記法で参照
console.log(obj3["key"]); // => "value"
// console.log(obj.123); NG
console.log(obj3[123]);

const languages = {
    ja: "日本語",
    en: "英語"
};
const ja = languages.ja;
const en = languages.en;
console.log(ja); // => "日本語"
console.log(en); // => "英語"
// 何度もlanguages.ja;と書くのはだるい

// 未定義の箇所が1つ含まれる疎な配列
// インデックスが1の値を省略しているので、カンマが2つ続いていることに注意
const sparseArray = [1,, 3];
console.log(sparseArray.length); // => 3
// 1番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined


// 疎な配列で該当するインデックスに要素がない場合はundefinedを返します。 しかし、undefinedという値も存在するため、配列にundefinedという値がある場合に区別できません。
// 次のコードでは、undefinedという値を要素として定義した密な配列と、要素そのものがない疎な配列を定義しています。 どちらも要素にアクセスした結果はundefinedとなり、区別できていないことがわかります。

// 要素として`undefined`を持つ密な配列
const denseArray = [1, undefined, 3];
// 要素そのものがない疎な配列
const sparseArray = [1, , 3];
console.log(denseArray[1]); // => undefined
console.log(sparseArray[1]); // => undefined