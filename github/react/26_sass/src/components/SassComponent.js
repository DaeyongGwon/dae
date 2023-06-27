import "../styles/SassComponent.scss";

const SassComponent = () => {
    return (
        <>
            <div className="SassComponent">
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
                <div className="box green"></div>
                <div className="box blue"></div>
                <div className="box indigo"></div>
                <div className="box purple"></div>
            </div>

            <div className="CircleComponent">
                <div className="circle small pink"></div>
                <div className="circle small yellow"></div>
                <div className="circle small green"></div>
            </div>
        </>
    );
};

export default SassComponent;
