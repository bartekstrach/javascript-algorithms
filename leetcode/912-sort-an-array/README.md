# Quicksort

- uses a divide-and-conquer approach
- is a comparison-based sorting algorithm
- pivot selection can be done in different ways:
    - choosing the first or the last element of the array,
    - choosing a random element,
    - selecting the median of three values (first, middle and last elements).
- average-case complexity of `O(n log n)`, the worst-case time complexity of `O(n^2)` (when the array is already sorted or nearly sorted and the pivot element is consistently chosen as the smallest or largest element)
- is an in-place sorting algorithm - it doesn't require extra space for sorting
- used widely as a default sorting algorithm due to its simplicity and efficiency

## How does it work
1. Choose a pivot element.
2. Partition the array into two subarrays, one containing elements smaller than the pivot and the other containing elements larger than the pivot. This is done by iterating through the array, comparing each element to the pivot, and moving elements smaller than the pivot to the left subarray (larger to the right one).
3. Recursively apply steps 1 and 2 to each subarray until the subarrays are of size 1 or 0. At this point, the subarrays are considered sorted.
4. Combine the sorted subarrays to form the final sorted array, this is done by concatenating the left subarray, pivot element and right subarray in that order.


