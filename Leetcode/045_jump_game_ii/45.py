class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return 0
        jumps = 0
        curr_state, max_state = 0, 0

        for i, v in enumerate(nums[:-1]):
            max_state = max(max_state, i + v)
            if i == curr_state:
                jumps += 1
                curr_state = max_state
            if curr_state >= len(nums) - 1:
                break
        return jumps
