function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let val1 = arr[j];
                let val2 = arr[j + 1];
                arr[j] = val2;
                arr[j + 1] = val1;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;