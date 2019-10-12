/* <例1> */

try {
  undefined();
} catch (error) {
  console.log(error);
}

console.log(error);

/* <例2> */

var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}

console.log(bar); //ReferenceError

/* <例3> */

{
  console.log(bar); //ReferenceError
  let bar = 2;
}

/* <例4> */

var foo = true;
if (foo) {
  var a = 2;
  const b = 3; // 包含在 if 中的块作用域常量
  a = 3; // 正常!
  b = 4; // 错误! 
}
  console.log(a); // 3
  console.log(b); // ReferenceError