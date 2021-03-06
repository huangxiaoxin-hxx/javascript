- 模块
  我对模块的理解是：模块对应着java中的方法，将方法写在一个类中，要使用这个方法的时候
  就定义一个 变量 来接收这个类
    java代码如下:
      class CoolModule(){
        foo(){
          ...
        }
      }
      CoolModule coolModule = new CoolModule();
      coolModule.foo();
    javascript:
      见例1
      与java不同的是，JavaScript 必须在函数中将方法return{}
      - 首先，CoolModule() 只是一个函数，必须要通过调用它来创建一个模块实例。如果不执行 外部函数，内 部作用域和闭包都无法被创建。
      - 其次，CoolModule() 返回一个用对象字面量语法 { key: value, ... } 来表示的对象。这 个返回的对象中含有对内部函数而不是内部数据变量的引用。我们保持内部数据变量是隐 藏且私有的状态。可以将这个对象类型的返回值看作本质上是模块的公共 API(接口))。
      - 这个对象类型的返回值最终被赋值给外部的变量 foo，然后就可以通过它来访问 API 中的 属性方法，比 如 foo.doSomething()。
      - 模块模式必须要掌握两个条件：
        1. 必须有外部的封闭函数，该函数必须至少被调用一次(每次调用都会创建一个新的模块 实例)。
        2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并 且可以访问或者修改私有的状态。
      ⚠️一个具有函数属性的对象本身并不是真正的模块。从方便观察的角度看，一个从函数调用 所返回的，只有数据属性而没有闭包函数的对象并不是真正的模块。
      我们将例1改进一下 => 变成例2：
      我们将模块函数转换成了 IIFE(参见第 3 章)，立即调用这个函数并将返回值直接赋值给 单例的模块实例标识符 foo。

      模块也是普通的函数，因此可以接受参数(见例3)

      模块模式另一个简单但强大的变化用法是，命名将要作为公共 API 返回的对象:
        见例4
      通过在模块实例的内部保留对公共 API 对象的内部引用，可以从内部对模块实例进行修 改，包括添加或删除方法和属性，以及修改它们的值。
