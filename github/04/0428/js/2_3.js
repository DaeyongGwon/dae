let result = 0;

function sum(i){
  for(var n = 0; n<100; n++){
    if(n%2 ===0 || n%3 ===0){
      sum = sum+n
    }
  }

}
console.log(sum);