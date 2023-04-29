answer = Math.floor(Math.random()*10) + 1;
console.log(answer);
const num = Number(prompt("UP and DOWN 게임을 시작합니다"));


while(true) {
  switch(num){
    
    
    case num === answer:
      alert(answer ,"!! 정답입니다!");
      break;
    case num<answer:
      alert("UP");

    case num>answer:
      alert("DOWN");
      
      // default: 
      // if(num==='q'||"포기"){
      //   break;
      //   }
    }

}
// function printMultiplicationTable() {  
//   alert(i + " x \" + j + \" = \" + (i*j));  
//   j++;
//   if (j > 9) {
//     j = 1;
//     i++;
//     if (i > 9) {
//       i = 2;
//     }  
//   }
// }/* Alert 확인 버튼 클릭 시 printMultiplicationTable() 함수 실행 */
// while(true) {
//   printMultiplicationTable();
//   if (!confirm("계속 하시겠습니까?")) {
//     break;}
//   }