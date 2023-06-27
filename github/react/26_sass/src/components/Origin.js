import "../styles/Origin.css";
import styled from "../styles/Origin.module.css";

const Origin = () => {
    return (
        <>
            <div className="Origin">
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
                <div className="box green"></div>
                <div className="box blue"></div>
                <div className="box indigo"></div>
                <div className="box purple"></div>
            </div>
            <hr />
            <div className={styled.Origin}>
                <div className={`${styled.box} ${styled.red}`}></div>
                <div className={`${styled.box} ${styled.orange}`}></div>
                <div className={`${styled.box} ${styled.yellow}`}></div>
                <div className={`${styled.box} ${styled.green}`}></div>
                <div className={`${styled.box} ${styled.blue}`}></div>
                <div className={`${styled.box} ${styled.indigo}`}></div>
                <div className={`${styled.box} ${styled.purple}`}></div>
            </div>
        </>
    );
};

export default Origin;
