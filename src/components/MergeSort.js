const MergeSort = ({ dataArray, setDataArray }) => {
    async function sort(arr, startIdx, endIdx) {
        const length = arr.length;

        if (length < 2) return;

        const mid = Math.floor(length / 2);

        const leftPart = arr.slice(0, mid); // left part doesn't contain mid element
        const rightPart = arr.slice(mid, length);

        await sort(leftPart, startIdx, endIdx - Math.ceil(length / 2));
        await sort(rightPart, endIdx - Math.ceil(length / 2) + 1, endIdx);

        const leftPartLength = leftPart.length;
        const rightPartLength = rightPart.length;
        let i = 0,
            j = 0,
            k = 0;

        while (i < leftPartLength && j < rightPartLength) {
            if (leftPart[i].height <= rightPart[j].height) {
                arr[k] = leftPart[i];
                i++;
            } else {
                arr[k] = rightPart[j];
                j++;
            }
            k++;
        }

        while (i < leftPartLength) {
            arr[k] = leftPart[i];
            i++;
            k++;
        }

        while (j < rightPartLength) {
            arr[k] = rightPart[j];
            j++;
            k++;
        }

        await updateBarView(arr, startIdx, endIdx);
        return arr;
    }

    async function updateBarView(array, start, end) {
        return new Promise(async (resolve) => {
            const oldIndexes = [];
            for (let i = start; i <= end; i++) oldIndexes.push(i);

            for (let i = 0; i < array.length; i++) {
                setDataArray((prev) => {
                    const updated = [...prev];
                    const el = { ...array[i] };
                    updated[oldIndexes[i]] = el;
                    updated[oldIndexes[i]].color = "red";
                    return updated;
                });

                await delay(10);

                setDataArray((prev) => {
                    const updated = [...prev];
                    updated[oldIndexes[i]].color = "turquoise";
                    return updated;
                });
            }
            resolve();
        });
    }

    const mergeSortHandler = async () => {
        await sort(dataArray, 0, dataArray.length - 1);
    };
    return <button onClick={mergeSortHandler}>Merge Sort Array</button>;
};

// adds delay in milliseconds
function delay(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

export default MergeSort;
