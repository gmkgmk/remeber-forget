// Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// For example, Given input array A = [1,1,2],
// Your function should return length = 2, and A is now [1,2].

function removeDuplicates(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] != arr[i]) {
      arr[++j] = arr[i];
    }
  }
  return j + 1;
}

const result = removeDuplicates([1, 1, 2, 3, 4]);
console.log('result: ', result);
