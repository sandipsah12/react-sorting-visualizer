const BarView = ({ dataArray }) => {
    return (
        <div className="data-view">
            {dataArray.map((data, i) => (
                <div
                    className="bar"
                    style={{
                        height: data.height + "px",
                        backgroundColor: data.color,
                    }}
                    key={i}
                >
                    {/* <span>{data.height} </span> */}
                </div>
            ))}
        </div>
    );
};

export default BarView;
