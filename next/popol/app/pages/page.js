import Link from "next/link";
//라우팅 이름을 list로 정하고 싶다면

export default function Pages() {
    const PISTACHIO = "https://pstachio.pages.dev/";
    const TYPEQUEST = "https://web-typequest-20zynm2mljxnpenj.sel4.cloudtype.app/";
    return (
        <div>
            <h4 className="title-sub">개발 페이지 목록</h4>
            <div className="pages">
                <h4>Pistachio</h4>
                <Link href={PISTACHIO}>피스타치오</Link>
            </div>
            <div className="pages">
                <h4>TypeQuest</h4>
                <Link href={TYPEQUEST}>타입퀘스트</Link>
                <p>기술스텍 ✓</p>
            </div>
        </div>
    );
}
