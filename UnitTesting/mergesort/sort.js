function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right]
}

function mergesort(array) {
  array = array.slice();
  const half = array.length / 2

  // Base case or terminating case
  if (array.length === 1) {
    return array
  }

  const left = array.splice(0, half)
  return merge(mergesort(left), mergesort(array))
}

console.log(mergesort([10, 5, 1]))

module.exports = mergesort;
