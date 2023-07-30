//img 파일을 불러오기 위해 import
import Image from "next/image";
export default function Home() {
    let name = "권대용";

    return (
        <div>
            <div className="MainHeaderContent">
                <h1 className="main-title">
                    - {name} -<br />웹 개발자 포트폴리오
                </h1>
                <hr className="underLine"></hr>
                <div className="title-sub">
                    {/* 안녕하세요. <br />
                    공부가 취미인 풀 스택 웹 개발자입니다. <br />
                    매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다. */}
                    안녕하세요 안녕하세요 안녕하세요
                </div>
            </div>

            <div className="AboutMeContent">
                <div className="about-container">
                    <div className="black-link">
                        <img className="black-link-img" src="/black-link.png"></img>
                    </div>
                    <div className="title">ABOUT ME</div>
                </div>
                <div className="about-detail-container">
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/person-fill.svg"></img>
                                </div>
                                <div>
                                    <div className="AboutMe_field-label">이름</div>
                                    <div className="AboutMe_field-content">권대용</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/calendar-fill.svg"></img>
                                </div>
                                <div>
                                    <div className="AboutMe_field-label">생년월일</div>
                                    <div className="AboutMe_field-content">1998.03.08</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/geo-alt-fill.svg"></img>
                                </div>
                                <div>
                                    <div className="AboutMe_field-label">주소지</div>
                                    <div className="AboutMe_field-content">울산광역시 북구</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/telephone-fill.svg"></img>
                                </div>
                                <div>
                                    <div className="AboutMe_field-label">연락처</div>
                                    <div className="AboutMe_field-content">010-4230-0605</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/envelope-fill.svg"></img>
                                </div>
                                <div>
                                    <div className="AboutMe_field-label">이메일</div>
                                    <div className="AboutMe_field-content">cys964@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <div className="name-box">
                            <div className="AboutMe_field">
                                <div className="AboutMe_icon-img">
                                    <img src="/pencil-fill.svg"></img>
                                </div>
                                <div className="AboutMe_field-label">학력</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe-textBox">*문의 또는 개인 연락은 위 연락처/이메일로 부탁드립니다.</div>
                </div>
            </div>
        </div>
    );
}
