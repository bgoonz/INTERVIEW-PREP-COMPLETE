class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        m, n = len(nums1), len(nums2)
        if m > n:
            return self.findMedianSortedArrays(nums2, nums1)
        start, end, half = 0, m, (m + n + 1) // 2
        A, B = nums1, nums2
        while start <= end:
            i = (start + end) // 2
            j = half - i
            if i < m and A[i] < B[j - 1]:
                start = i + 1
            elif i > 0 and A[i - 1] > B[j]:
                end = i - 1
            else:
                if j == 0:
                    left_max = A[i - 1]
                elif i == 0:
                    left_max = B[j - 1]
                else:
                    left_max = max(A[i - 1], B[j - 1])
                if (m + n) % 2 == 1:
                    return left_max
                if i == m:
                    right_min = B[j]
                elif j == n:
                    right_min = A[i]
                else:
                    right_min = min(A[i], B[j])
                return (left_max + right_min) / 2
