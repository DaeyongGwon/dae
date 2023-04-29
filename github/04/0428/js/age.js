



const age = 19;

function a() {
    if(age >= 20){
        console.log("성인");
    } else if(age>=17) {
        console.log("고등학생");
    } else if(age>=14&&age<17){
        console.log("중학생");
    } else if(age>=8&&age<14){
        console.log("초등학생");
    } else if(age>=0&&age<8){
        console.log("유아");
    }
}
a();