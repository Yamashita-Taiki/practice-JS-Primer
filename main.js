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