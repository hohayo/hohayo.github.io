// process.env.NODE_ENV 是 webpack 內建的環境變數，由 webpack mode 設定取得
console.log(process.env.NODE_ENV); 

console.log('hi webpack');


var apiURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost'
  : 'https://5xruby.tw/';

console.log(apiURL);


if (process.env.NODE_ENV === 'development') {
  var someTestCode = 'development';
  alert(someTestCode);
}