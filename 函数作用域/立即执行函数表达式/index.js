var a = 2;
(function foo() {
  var a = 3;
  console.log(a); //3
})();

console.log(a); //2

//进阶方法，把他们当作函数调用并传递参数进去。

var a = 2;
(function IIFE(global) {
  var a = 3;
  console.log(a); //3
  console.log(global.a); //2
})(window); 
//将全局变量a传递进了函数IIFE中，当使用global参数调用a的时候，实际上调用了全局变量中的a

console.log(a); //2

// 这个模式的另外一个应用场景是解决 undefined 标识符的默认值被错误覆盖导致的异常(虽 然不常见)。将一个参数命名为 undefined，但是在对应的位置不传入任何值，这样就可以 保证在代码块中 undefined 标识符的值真的是 undefined

