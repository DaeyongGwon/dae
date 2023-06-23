import { useEffect } from "react";
import axios from "axios";

function KakaoLogin() {
    const REDIRECT_URI = "http://localhost:3000/oauth";
    const REST_API_KEY = "0e7377b94feee243ccd11f920c3c3bba";

    useEffect(() => {
        axios({
            method: "post",
            url: "https://kauth.kakao.com/oauth/token",
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            data: {
                grant_type: "authorization_code",
                client_id: REST_API_KEY,
                redirect_uri: REDIRECT_URI,
                code: "SgtW4yXVT8gIwVEJv2RBqWMUhet5hw4GVhhq-t5z44aGCMdJVah2fa_5tvf_XNo2WW21qQopyV4AAAGI5sKW1g",
            },
        });

        // 컴포넌트 JSX 반환
        return (
            <div>
                <a href="https://kauth.kakao.com/oauth/authorize?client_id=5b6c3d6d2d2c6e4a0b3d0b5e9c5b0c6f&redirect_uri=http://localhost:3000/login&response_type=code">
                    <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="Kakao Login" />
                </a>
            </div>
        );
    }, []);
}

export default KakaoLogin;
