/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivVal = arr[start];
    let pivIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivVal > arr[i]) {
            pivIdx++;

            [arr[i], arr[pivIdx]] = [arr[pivIdx], arr[i]];
        }
    }

    [arr[start], arr[pivIdx]] = [arr[pivIdx], arr[start]];

    return pivIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (arr.length < 2) return arr;

    let pivIdx = pivot(arr);
    let arr1 = arr.slice(0, pivIdx);
    let arr2 = arr.slice(pivIdx);


    return quickSort(arr, pivot(arr))
}

module.exports = { quickSort, pivot };