class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums1) > len(nums2):
            i = 0
            while i < len(nums2):
                if nums2[i] in set(nums1):
                    nums1.remove(nums2[i])
                    i += 1
                else:
                    nums2.remove(nums2[i])
            return nums2
        else:
            i = 0
            while i < len(nums1):
                if nums1[i] in set(nums2):
                    nums2.remove(nums1[i])
                    i += 1
                else:
                    nums1.remove(nums1[i])
            return nums1


# Alternate Approach

from collections import Counter


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list((Counter(nums1) & Counter(nums2)).elements())
