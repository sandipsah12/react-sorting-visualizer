import MergeSort from "./MergeSort";

const Controls = ({ dataArray, resetDataArray, setDataArray }) => {
    const generateRandomArray = () => {
        resetDataArray();
    };

    return (
        <div className="controls">
            <button onClick={generateRandomArray}>Generate Random Array</button>
            <MergeSort dataArray={dataArray} setDataArray={setDataArray} />
        </div>
    );
};

export default Controls;
