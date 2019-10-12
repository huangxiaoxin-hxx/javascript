- 块级作用域
  - with
    用 with 从对象中创建出的作用域仅在 with 声明中而非外部作用域中有效
  - try/catch
    catch 分句会创建一个块作用域，其中声明的变量仅在catch内部有效
    (可见index.js中的<例1>)
  - let
    ES6 改变了现状，引入了新的 let 关键字，提供了除 var 以外的另一种变量声明方式。
    let 关键字可以将变量绑定到所在的任意作用域中
    (可见index.js中的<例2>)
    注意：let 进行的声明不会在块作用域中进行提升
    (可见index.js中的<例3>)
  - const 
    除了 let 以外，ES6 还引入了 const，同样可以用来创建块作用域变量，但其值是固定的 (常量)。
    注意：const 有着 final 属性 不可被人修改
    (可见index.js中的<例4>)