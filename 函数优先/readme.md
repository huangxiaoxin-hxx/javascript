- 函数优先
  函数声明和变量声明都会被提升。但是一个值得注意的细节(这个细节可以出现在有多个
  “重复”声明的代码中)是函数会首先被提升，然后才是变量。
  见例1
    由此可见，function 被提升的优先级要不 var 高
    代码可以理解为：
      function foo() { 
        console.log( 1 );
      }
      foo(); 
      foo = function() { 
        console.log( 2 );
      };
      foo(); 
      ⚠️var foo 尽管出现在 function foo()... 的声明之前，
      但它是重复的声明(因此被忽略了)，因为函数声明会被提升到普通变量之前。
      尽管重复的 var 声明会被忽略掉，但出现在后面的函数声明还是可以覆盖前面的。 
      foo(); // 3
      function foo() { 
        console.log( 1 );
      }
      var foo = function() { 
        console.log( 2 );
      };
      function foo() { 
        console.log( 3 );
      }
      我们习惯将var a = 2;看作一个声明，而实际上JavaScript引擎并不这么认为。它将var a
      和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。