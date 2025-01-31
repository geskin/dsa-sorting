function selectionSort(arr, minStart = 0, min = minStart) {
    if (minStart === arr.length) return arr;

    for (let i = minStart; i < arr.length; i++) {
        if (arr[min] > arr[i]) {
            min = i;
        }
    }

    if (min !== minStart) {
        let val1 = arr[minStart]; //value at index you started with
        let val2 = arr[min]; //value that's smaller
        arr[minStart] = val2;
        arr[min] = val1;
    }

    minStart++; //next time start at next index
    return selectionSort(arr, minStart);
}

module.exports = selectionSort;