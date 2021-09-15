# Union Find
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        length = {}
        unions = {}
        nums = set(nums)

        def union(x, y):
            root1 = find(x)
            root2 = find(y)
            if root1 != root2:
                unions[root2] = root1
                length[root1] += length[root2]

        def find(x):
            root = x
            while unions[root] != root:
                root = unions[root]
            while x != root:
                x, unions[x] = unions[x], root
            return root

        for n in nums:
            length[n] = 1
            unions[n] = n
        for n in nums:
            if n - 1 in nums:
                union(n, n - 1)
            if n + 1 in nums:
                union(n, n + 1)

        return max(length.values())


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        result = 0
        for num in nums:
            if num - 1 not in nums:
                next = num + 1
                while next in nums:
                    next += 1
                result = max(result, next - num)
        return result


# Without the constraint of O(N) time complexity
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums or len(nums) == 0:
            return 0
        if len(nums) < 2:
            return 1
        nums.sort()
        result, l = 1, 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                continue
            if nums[i] - nums[i - 1] == 1:
                l += 1
            else:
                l = 1
            result = max(result, l)
        return result
