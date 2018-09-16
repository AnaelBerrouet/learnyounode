//console.log(process.argv);
var input = process.argv.slice(2,);
//console.log(input);
var sum = 0;
for (var i = 0; i < input.length; i++) {
  sum += Number(input[i]);
}
console.log(sum);