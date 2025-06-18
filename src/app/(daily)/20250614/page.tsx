// // コールバック関数を使った超シンプルな例

// function callName(callback: (name: string) => void) {
//   //「callbackは string を受け取って、何も返さない関数である」と宣言
//   callback("たろう");
// }

// // 名前を受け取って挨拶する関数
// function sayHello(name: string): void {
//   console.log(`こんにちは、${name}さん！`);
// }

// // "こんにちは、たろうさん！"
// callName(sayHello);

function sayHello(name: string): void {
  console.log(`こんにちは、${name}さん！`);
}

sayHello("たろう");
