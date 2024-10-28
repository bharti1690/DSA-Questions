# Implement the Quick Sort algorithm in Python.
# Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array
# and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
# The sub-arrays are then sorted recursively.

# Example usage:
# arr = [10, 7, 8, 9, 1, 5]
# quick_sort(arr)
# print("Sorted array is:", arr)

def partition(arr, low, high):
    i = low - 1  # index of smaller element
    pivot = arr[high]  # pivot element
    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort_helper(arr,low,high):
    if low < high:
        # pi is partitioning index, arr[pi] is now at right place
        pi = partition(arr, low, high)
        # Separately sort elements before partition and after partition
        quick_sort_helper(arr, low, (pi - 1))
        quick_sort_helper(arr, pi + 1, high)

def quick_sort(arr):
    quick_sort_helper(arr, 0, (len(arr) - 1))

# Time complexity: O(n log n) in average case, O(n^2) in worst case

# Space complexity: O(log n) in average case, O(n) in worst case

if __name__ == "__main__":
    arr = [10, 7, 8, 9, 1, 5]
    quick_sort(arr)
    print("Sorted array is:", arr)
