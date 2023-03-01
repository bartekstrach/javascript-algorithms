/**
 * Implementation based on my knowledge:
 */

function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    let pivotIndex = Math.floor((nums.length - 1) / 2);
    let pivot = nums[pivotIndex];

    let leftSubarr: number[] = [];
    let rightSubarr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (i !== pivotIndex) {
            const value = nums[i];

            if (value <= pivot) {
                leftSubarr = [...leftSubarr, value];
            } else {
                rightSubarr = [...rightSubarr, value];
            }
        }
    }

    return [...sortArray(leftSubarr), pivot, ...sortArray(rightSubarr)];
};

/**
 * It is correct in terms of functionality.
 * 
 * However, the ChatGPT spotted a few potential issues with performance and memory usage:
 *      - The pivot index is always chosen as the middle index which may not be the best choice for all arrays.
 *        In some cases, this can result in poor partitioning and degrade the performance.
 *      - The left and right subarrays are constructed using the spread operator and the array concatenation operator which can be slow and inefficient for large arrays.
 *        Instead, it's better to allocate the left and right subarrays up front and populate them using indexing.
 *      - The implementation creates new arrays for every recursive call to `sortArray`, which can lead to excessive memory usage and slow down the algorithm.
 *        Instead, it's better to pass the original array and the indices of the subarrays to the recursive calls.
 * 
 * Here is the implementation that addresses these issues:
 */

function quicksort(nums: number[], leftIndex: number, rightIndex: number): void {
    if (leftIndex >= rightIndex) {
        return;
    }

    let pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
    let pivot = nums[pivotIndex];

    let i = leftIndex;
    let j = rightIndex;

    while(i <= j) {
        while(nums[i] < pivot) {
            i++;
        }

        while (nums[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    quicksort(nums, leftIndex, j);
    quicksort(nums, i, rightIndex);
};

function improvedSortArray(nums: number[]): number[] {
    quicksort(nums, 0, nums.length - 1);
    return nums;
}

/**
 * The most liked solution on Leetcode:
 */
var quickSort = function(nums) {
    
    function quickSortHelper(nums, start, end) {
        if (start >= end) return nums
    
        var pivotValue = nums[start]
        var smaller = start
        for (var i = start + 1; i <= end; i++) {
            var bigger = i
            if (nums[bigger] < pivotValue) {
                smaller++
                var smallerValue = nums[bigger]
                nums[bigger] = nums[smaller]
                nums[smaller] = smallerValue
            }
        }
        var smallerCache = nums[smaller]
        nums[smaller] = nums[start]
        nums[start] = smallerCache
        
        quickSortHelper(nums, start, smaller - 1)
        quickSortHelper(nums, smaller + 1, end)
        return nums
    }
    
    return quickSortHelper(nums, 0, nums.length - 1)
};
