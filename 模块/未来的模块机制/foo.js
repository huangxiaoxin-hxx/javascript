// 仅从 "bar" 模块导入 hello() 
import hello from "bar";
var hungry = "hippo";
function awesome() {
  console.log(
    hello(hungry).toUpperCase()
  );
}
awesome();
export default awesome;