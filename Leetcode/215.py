import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def quickSelect(low, high, k):
            i = low
            for j in range(low, high):
                if nums[j] <= nums[high]:
                    nums[i], nums[j] = nums[j], nums[i]
                    i += 1
            nums[i], nums[high] = nums[high], nums[i]
            count = high - i + 1
            if count == k:
                return nums[i]
            if count > k:
                return quickSelect(i + 1, high, k)
            else:
                return quickSelect(low, i - 1, k - count)

        return quickSelect(0, len(nums) - 1, k)


# Time complexity: O(nlogn)
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        q = []
        for i, n in enumerate(nums):
            heapq.heappush(q, (-n, i))

        result = None
        for _ in range(k):
            result = -heapq.heappop(q)[0]
        return result
