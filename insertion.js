function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    let val1 = arr[i]; // val that needs to be put first
                    let val2 = arr[j];
                    arr[j] = val1;
                    arr[i] = val2;
                }

            }
        }
    }

    return arr;
}

module.exports = insertionSort;