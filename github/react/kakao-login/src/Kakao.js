function Kakao() {
    const REDIRECT_URI = "http://localhost:3000/oauth";
    const REST_API_KEY = "0e7377b94feee243ccd11f920c3c3bba";
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    const onClick = () => {
        window.location.href = url;
    };
    return (
        <>
            <img src="kakao_login_medium_narrow.png" alt="" onClick={onClick}></img>
        </>
    );
}

export default Kakao;
