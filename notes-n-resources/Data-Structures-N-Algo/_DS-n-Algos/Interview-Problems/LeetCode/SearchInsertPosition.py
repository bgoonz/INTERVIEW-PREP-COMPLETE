class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        def binary(nums, low, high, target):
            if low <= high:
                mid = low + (high - low) // 2
                if nums[mid] == target:
                    return mid
                elif nums[mid] > target:
                    return binary(nums, low, mid - 1, target)
                else:
                    return binary(nums, mid + 1, high, target)
            else:
                return high + 1

        return binary(nums, 0, len(nums) - 1, target)


# Iterative Binary Search


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                high = mid - 1
            else:
                low = mid + 1
        else:
            return high + 1
