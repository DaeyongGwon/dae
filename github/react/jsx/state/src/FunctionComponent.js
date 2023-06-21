import { useState } from "react";

function FunctionComponent() {
    const [aaa, status] = useState("버튼 클릭!!!!");
    return (
        //setnumber을 클릭했을때는 입장했습니다 표시 sethi를 클릭했을때는 퇴장했습니다 표시
        <div>
            <h1>{aaa}</h1>
            <button onClick={() => status("입장하였습니다")}>입장</button>
            <button onClick={() => status("퇴장했습니다.")}>퇴장</button>
        </div>
    );
}

export default FunctionComponent;
