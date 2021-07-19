function privateFun(){
  console.log('this is privet function');
}

export function add(a, b) {
  return a + b;
}


export function subtract(a, b) {
  return a - b;
}

class MyClass {
  foo(){
    console.log('foo');
  }
}

export default MyClass;