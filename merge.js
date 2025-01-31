function merge(arr1, arr2) {
    let out = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            out.push(arr1[i]);
            i++;
        } else {
            out.push(arr2[j]);
            j++;
        }
    }

    if (i === arr1.length) {
        for (let k = j; k < arr2.length; k++) {
            out.push(arr2[k]);
        }
    } else if (j === arr2.length) {
        for (let k = i; k < arr1.length; k++) {
            out.push(arr1[k]);
        }
    }

    return out;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let middleIdx = Math.floor((arr.length) / 2);
    let arr1 = arr.slice(0, middleIdx);
    let arr2 = arr.slice(middleIdx);

    return merge(mergeSort(arr1), mergeSort(arr2));
}

module.exports = { merge, mergeSort };