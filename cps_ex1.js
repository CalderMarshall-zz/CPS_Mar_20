
var x = 4;
var y = 3;
square (x, function (x2){
     square (y, function (y2){
          var sum = x2 + y2;
          console.log(sum);
     });
});
function square(num) {
     return num * num;
}
console.log(square(x));
