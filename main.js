// うるう年の条件は次のとおりです。

// 西暦で示した年が4で割り切れる年はうるう年です
// ただし、西暦で示した年が100で割り切れる年はうるう年ではありません
// ただし、西暦で示した年が400で割り切れる年はうるう年です

const year = new Date().getFullYear();

switch (year) {
  case "2019":
    console.log('2019');
    break;
  case '2020':
    console.log('2020');
    break;
   case '2021':
    console.log('2021');
    break;
  default: 
   console.log('unknown');
   break;
}

// const version = "ES6";
// switch (version) {
//     case "ES5":
//         console.log("ECMAScript 5");
//     case "ES6": // 一致するケース
//         console.log("ECMAScript 2015");
//     case "ES7": // breakされないため条件無視して実行
//         console.log("ECMAScript 2016");
//     default:    // breakされないため条件無視して実行
//         console.log("しらないバージョンです");
// }