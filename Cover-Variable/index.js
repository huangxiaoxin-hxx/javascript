function foo() {
  // var i = 0;  无论是定义全局变量
  function bar(a) {
    // i = 3
    var i = 3;
    console.log(`bar的i=${a + i}`);
  }
  for(var i = 0; i<10; i++){  //还是将i定义在for循环里
    bar(i * 2);     //bar函数 中的i 都不会影响到 
    console.log(`for循环i=${i}`);
  }
}
foo();