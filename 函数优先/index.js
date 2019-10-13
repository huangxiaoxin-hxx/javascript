foo(); // 1
var foo;
foo();  //1
function foo() { console.log( 1 );
}
foo();  //1
foo = function() { console.log( 2 );
};
foo();  //2