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
                <div className="title-container">
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
                                    <img className="AboutMe_icon-img-detail" src="/person-fill.svg"></img>
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
                                    <img className="AboutMe_icon-img-detail" src="/calendar-fill.svg"></img>
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
                                    <img className="AboutMe_icon-img-detail" src="/geo-alt-fill.svg"></img>
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
                                    <img className="AboutMe_icon-img-detail" src="/telephone-fill.svg"></img>
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
                                    <img className="AboutMe_icon-img-detail" src="/envelope-fill.svg"></img>
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
                                    <img className="AboutMe_icon-img-detail" src="/pencil-fill.svg"></img>
                                </div>
                                <div className="AboutMe_field-label">학력</div>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMe-textBox">*문의 또는 개인 연락은 위 연락처/이메일로 부탁드립니다.</div>
                </div>
            </div>

            <div className="SkillsContent">
                <div className="title-container2">
                    <div className="black-link">
                        <img className="black-link-img" src="/black-link.png"></img>
                    </div>
                    <div className="skills-title">SKILLS</div>
                </div>
                <div className="skills-container">
                    <div className="skills-box">
                        <div className="skills-title-sub">Frontend</div>
                        <img className="skills-img" src="/frontend.png"></img>
                    </div>
                    <div className="skills-box">
                        <div className="skills-title-sub">Backend</div>
                        <img className="skills-img" src="/backend.png"></img>
                    </div>
                    <div className="skills-box">
                        <div className="skills-title-sub">Version Control</div>
                        <img className="skills-img" src="/version-control.png"></img>
                    </div>
                    <div className="skills-box">
                        <div className="skills-title-sub">Deployment</div>
                        <img className="skills-img" src="/deployment.png"></img>
                    </div>
                    <div className="skills-box">
                        <div className="skills-title-sub">Communication</div>
                    </div>
                </div>
            </div>

            <div className="ArchivingContent">
                <div className="title-container">
                    <div className="black-link">
                        <img className="black-link-img" src="/white-link.png"></img>
                    </div>
                    <div className="archiving-title">ARCHIVING</div>
                </div>
                <div className="archiving-container">
                    <a className="archiving-box" href="https://github.com/DaeyongGwon">
                        <div className="archiving-img-box">
                            <img className="archiving-img" src="/git-hub.png"></img>
                        </div>
                        <a className="archiving-link" href="https://github.com/DaeyongGwon">
                            https://github.com/DaeyongGwon
                        </a>
                        <p>
                            <b>소스 코드 저장소</b>입니다.
                        </p>
                        <ul>
                            <li>과거 프로젝트, 프로그램, 앱의 소스 코드.</li>
                            <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                        </ul>
                    </a>
                    <a className="archiving-box" href="https://iffyong.tistory.com/">
                        <div className="archiving-img-box">
                            <img className="archiving-img" src="/tistory.png"></img>
                        </div>
                        <a className="archiving-link" href="https://iffyong.tistory.com/">
                            https://iffyong.tistory.com/
                        </a>
                        <p>
                            <b>공부 및 지식 공유 목적의 블로그</b>입니다.
                        </p>
                        <ul>
                            <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
                            <li>웹 개발자의 길을 걸으며 공부한 웹 관련 지식 정리</li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
    );
}
