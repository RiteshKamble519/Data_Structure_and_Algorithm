a = [340, 1, 3, 3, 76, 23, 4, 1215, 122, 7642, 646];
function merge_sort(arr_1) {
    arr_length = arr_1.length;
    if (arr_1.length < 2) {
        return arr_1;
    }
    if (arr_length % 2 == 0) {
        arr = arr_1.splice(0, (arr_length / 2));
    }
    else {
        arr = arr_1.splice(0, Math.floor(arr_length / 2) + 1);
    }

    return merge(merge_sort(arr), merge_sort(arr_1));
}

function merge(leftArr, rightArr) {

    mergedArr = [];
    i = 0;
    j = 0;
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            mergedArr.push(leftArr[0]);
            leftArr.shift();
        }
        else {
            mergedArr.push(rightArr[0]);
            rightArr.shift();
        };
    }

    if (leftArr.length) {
        mergedArr = mergedArr.concat(leftArr);
    } else if (rightArr.length) {
        mergedArr = mergedArr.concat(rightArr);
    }
    return mergedArr;
}

console.log("Sorted Array", merge_sort(a));
