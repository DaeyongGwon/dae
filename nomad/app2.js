const h1 = document.querySelector(".hello:first-child h1");


//클릭으로 text컬러 바꾸기
// function handleMouseEnter(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//         console.log("토마토");
//     }else{
//         newColor = "blue";
//         console.log("블루");
//     }
//     h1.style.color = newColor;
// }
function handleTitleClick(){
    const clickedClass = "clicked sexy-font"
    if(h1.classList === "clickedClass"){
        h1.classList = "";
    }else{
        h1.className = "clickedClass";
    }
}
h1.addEventListener("click", handleTitleClick);
