num_list = [1, 2, 3, 22, 32, 37, 46, 5];

function recurrsive_peak_finder(array_list, length_of_array) {

  if (length_of_array != 0)
    i = Math.floor(length_of_array / 2) - 1;
  else { return "Invalid"; }

  if (length_of_array == 2)
    return array_list[i] > array_list[i + 1] ? peak = array_list[i] : peak = array_list[i + 1]

  if (length_of_array == 1)
    return array_list;

  if (array_list[i] > array_list[i + 1])
    if (array_list[i] > array_list[i - 1]) {
      return array_list[i];
    }
    else {
      array_list.splice(i + 1)
      return recurrsive_peak_finder(array_list, array_list.length);
    }
  else {
    array_list.splice(0, (i + 1))
    return recurrsive_peak_finder(array_list, array_list.length);
  }
}

peak = recurrsive_peak_finder(num_list, num_list.length);
console.log("Peak is " + peak);
