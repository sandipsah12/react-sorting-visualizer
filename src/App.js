import { useEffect, useState } from "react";
import BarView from "./components/BarView";
import Controls from "./components/Controls";

function randomArray() {
    const randomArray = [];

    for (let i = 0; i < 50; i++) {
        randomArray.push({
            height: Math.ceil(Math.random() * 500),
            color: "turquoise",
        });
    }
    return randomArray;
}

function App() {
    const [dataArray, setDataArray] = useState([]);

    const resetDataArray = () => {
        const dataArray = randomArray();
        setDataArray(dataArray);
    };

    useEffect(() => {
        const dataArray = randomArray();
        setDataArray(dataArray);
    }, [setDataArray]);

    return (
        <div className="App">
            <BarView dataArray={dataArray} />
            <Controls
                resetDataArray={resetDataArray}
                dataArray={dataArray}
                setDataArray={setDataArray}
            />
        </div>
    );
}

export default App;
