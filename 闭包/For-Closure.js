// 例1
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
}

// 例2
for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })();

}

// 例3
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })(i);
}

// 例4
for (var i = 1; i <= 5; i++) {
  let j = i;
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}

// 例5
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(j);
  }, i * 1000);
}