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