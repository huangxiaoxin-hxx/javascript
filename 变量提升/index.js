// 例1

a = 2;
var a;
console.log(a);

// 例2

console.log(b);
var b = 2;

// 例3

foo(); // 2

function foo() {
  a = 2;
  console.log(a)
  var a;
}

// 例4

foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function bar() { // ...
};

// 例5

foo(); // TypeError
bar(); // ReferenceError: bar is not defined
var foo = function bar() { // ...
};