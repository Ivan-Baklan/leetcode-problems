// 11. Container With Most Water

// https://leetcode.com/problems/container-with-most-water/

let maxArea = function (height) {
  // storage for max area
  let maximumArea = Number.MIN_SAFE_INTEGER;
  // Left and right pointers
  let left = 0;
  let right = height.length - 1;
  // Loop until left and right meet
  while (left < right) {
    // Shorter pole/vertical line
    let shorterLine = Math.min(height[left], height[right]);
    // Update maximum area if required
    maximumArea = Math.max(maximumArea, shorterLine * (right - left));
    // If there is a longer vertical line present
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
console.log(maxArea([1, 1]));
