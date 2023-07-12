  // Write your algorithm here

  function hasTargetSum(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {
      
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return true; 
        }
      }
    }
    return false; 
  }
  

/* 
  Write the Big O time complexity of your function here
   O(n^2), where n is the size of the input array
*/

/* 
  Add your pseudocode here
  function hasTargetSum(arr, target):
  for i from 0 to length(arr) - 1:
  for j from i + 1 to length(arr) - 1:
   if arr[i] + arr[j] equals target:
   return true
    return false

*/

/*
  Add written explanation of your solution here
  The function utilizes a nested loop approach to compare each element in the array with every other element that follows it.

The outer loop iterates over each element in the array, starting from the first element and going up to the second-to-last element. This is achieved by using the loop variable i that ranges from 0 to length(arr) - 1.
The inner loop is nested within the outer loop and starts from the element next to the current element in the outer loop. It iterates through the remaining elements in the array.
This ensures that each pair of elements is checked only once and that duplicate pairs are not considered. The loop variable j ranges from i + 1 to length(arr) - 1.
Within the inner loop, the function checks whether the sum of the current element at index i and the element at index j equals the target value. 
If a pair with the target sum is found, the function returns true immediately, indicating the presence of a valid pair.
If the nested loops complete without finding a pair that sums up to the target, the function returns false to indicate that no such pair exists in the array.
The time complexity of this solution is O(n^2), as the function checks all possible pairs of elements in the array.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
