/**
 * Question: Implement the Quick Sort algorithm in JavaScript.
 * 
 * Quick Sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays.
 * A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot,
 * based on which the partition is made and another array holds values greater than the pivot value.
 * Quick sort partitions an array and then calls itself recursively twice to sort the two resulting sub-arrays.
 * This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n^2), 
 * respectively.
 * 
 * Steps to implement Quick Sort:
 * 1. Choose a pivot element from the array.
 * 2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
 * 3. Recursively apply the above steps to the sub-arrays.
 * 
 * Example:
 * Input: [10, 7, 8, 9, 1, 5]
 * Output: [1, 5, 7, 8, 9, 10]
 * 
 * Write a function `quickSort` that takes an array of numbers and returns a sorted array.
 */

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot_ele = arr[0];

    let left_arr = [];

    let right_arr = [];

        for(let i = 1; i < arr.length; i++){
            if(arr[i]<pivot_ele){
                left_arr.push(arr[i]);
            }else{
                right_arr.push(arr[i]);
            }
        }
   left_arr = quickSort(left_arr);
   right_arr = quickSort(right_arr);

   return left_arr.concat(pivot_ele,right_arr);
}
// concat Method
// The concat method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

// What This Line Does
// Combines the arrays: The concat method is called on left_arr, and it combines left_arr with pivot_ele and right_arr.
// Order of elements: The resulting array will have all elements of left_arr first, followed by pivot_ele, and then all elements of right_arr.

console.log(quickSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]


