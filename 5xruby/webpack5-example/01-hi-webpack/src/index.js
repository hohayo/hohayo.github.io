class WebpackClass{
  constructor(){
    console.log('WebpackClass constructor');
  }
  foo(){
    console.log('foo');
  }
}

const message = 'hi webpack';
console.log(message);

var obj = {name:'milkmidi'};

var spreadObj = {
  ...obj
}

(()=>{
  console.log(9527);
})();

var r = new WebpackClass();
r.foo();