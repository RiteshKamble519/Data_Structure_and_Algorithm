//Unsorted array
//a = [8, 2, 4, 9, 3, 6];
a = [9, 8, 7, 6, 5, 4, 3, 2, 1];
for (j = 1; j < a.length; j++) {


    next_ele_pointer = j;//Next element pointer
    next_ele = a[j];//Next element to insert

    //Find position to insert the new element
    insert_position = j
    for (i = 0; i < next_ele_pointer; i++) {
        if (a[i] > next_ele) {
            i == 0 ? insert_position = 0 : insert_position = i;
            //console.log("I", i);
            break;
        }
    }
    //Make space for element at insert_position
    for (k = next_ele_pointer; k > insert_position; k--) {
        a[k] = a[k - 1];
    }
    //Insert element @insert_position
    a[insert_position] = next_ele;
}

console.log("Sorted array:", a);