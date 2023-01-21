function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

// Pseudocode:
// 1. Initialize two loops, one nested inside the other
// 2. In the inner loop, check if the current element plus the next element is equal to the target
// 3. If it is, return true
// 4. If the loops finish and no matching pair is found, return false

// Explanation:
// This solution uses two nested loops to check every pair of elements in the array. 
// If a pair is found that adds up to the target, the function returns true. 
// If the loops finish and no such pair is found, the function returns false.

if (require.main === module) {
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
