## Given two binary trees, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

    Example 1:

    Input:     1         1
              / \       / \
             2   3     2   3

            [1,2,3],   [1,2,3]

    Output: true

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def isSameTree(self, p, q): :type p: TreeNode :type q: TreeNode :rtype: bool if not p and not q: return True

            stack = [(p, q)]

            while stack:
                node1, node2 = stack.pop()
                if node1 and node2 and node1.val == node2.val:
                    stack.append((node1.left, node2.left))
                    stack.append((node1.right, node2.right))
                else:
                    if not node1 == node2:
                        return False

            return True

## Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

    For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3

    But the following [1,2,2,null,3,null,3] is not:

        1
       / \
      2   2
       \   \
       3    3

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

    class Solution(object): def isSymmetric(self, root):  :type root: TreeNode :rtype: bool  if not root: return True

            def dfs(left, right):
                if not left and not right:
                    return True

                if not left or not right:
                    return False
                return (
                    (left.val == right.val)
                    and dfs(left.left, right.right)
                    and dfs(left.right, right.left)
                )

            return dfs(root, root)

## Given a binary tree, return the level order traversal of its nodes’ values. (ie, from left to right, level by level).

    For example:
    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

    return its level order traversal as:

    [
      [3],
      [9,20],
      [15,7]
    ]

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def levelOrder(self, root): :type root: TreeNode :rtype: List\[List\[int\]\]

            if not root:
                return []

            queue = [(root, 0)]
            levelMap = {}

            while queue:
                node, level = queue.pop(0)
                if node.left:
                    queue.append((node.left, level + 1))
                if node.right:
                    queue.append((node.right, level + 1))

                if level in levelMap:
                    levelMap[level].append(node.val)
                else:
                    levelMap[level] = [node.val]

            result = []
            for key, value in levelMap.iteritems():
                result.append(value)
            return result

## Given a binary tree, return the zigzag level order traversal of its nodes’ values. (ie, from left to right, then right to left for the next level and alternate between).

    For example:
    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

    return its zigzag level order traversal as:

    [
      [3],
      [20,9],
      [15,7]
    ]

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def zigzagLevelOrder(self, root): :type root: TreeNode :rtype: List\[List\[int\]\]

            if not root:
                return []

            queue = [(root, 0)]
            levelMap = {}

            while queue:
                node, level = queue.pop(0)
                if node.left:
                    queue.append((node.left, level + 1))
                if node.right:
                    queue.append((node.right, level + 1))

                if level in levelMap:
                    levelMap[level].append(node.val)
                else:
                    levelMap[level] = [node.val]

            result = []
            spiral = False
            for key, value in levelMap.iteritems():
                if spiral:
                    value = value[::-1]
                result.append(value)
                spiral = not spiral
            return result

## Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

    Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.
    Example 1:

    Input: s = "leetcode", wordDict = ["leet", "code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def buildTree(self, preorder, inorder): :type preorder: List\[int\] :type inorder: List\[int\] :rtype: TreeNode self.index = 0

            def recursive(preorder, inorder, start, end):
                if start > end:
                    return None

                node = TreeNode(preorder[self.index])
                self.index += 1
                if start == end:
                    return node

                search_index = 0
                for i in range(start, end + 1):
                    if inorder[i] == node.val:
                        search_index = i
                        break

                node.left = recursive(preorder, inorder, start, search_index - 1)
                node.right = recursive(preorder, inorder, search_index + 1, end)
                return node

            return recursive(preorder, inorder, 0, len(inorder) - 1)

## Given inorder and postorder traversal of a tree, construct the binary tree.

    Note:
    You may assume that duplicates do not exist in the tree.

    For example, given

    inorder = [9,3,15,20,7]
    postorder = [9,15,7,20,3]
    Return the following binary tree:

        3
       / \
      9  20
        /  \
       15   7

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def buildTree(self, inorder, postorder): :type inorder: List\[int\] :type postorder: List\[int\] :rtype: TreeNode self.index = len(inorder) - 1

            def recursive(postorder, inorder, start, end):
                if start > end:
                    return None

                node = TreeNode(postorder[self.index])
                self.index -= 1
                if start == end:
                    return node

                search_index = 0
                for i in range(start, end + 1):
                    if inorder[i] == node.val:
                        search_index = i
                        break
                node.right = recursive(postorder, inorder, search_index + 1, end)
                node.left = recursive(postorder, inorder, start, search_index - 1)
                return node

            return recursive(postorder, inorder, 0, len(inorder) - 1)

## Given a binary tree, return the bottom-up level order traversal of its nodes’ values. (ie, from left to right, level by level from leaf to root).

    For example:
    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

    return its bottom-up level order traversal as:

    [
      [15,7],
      [9,20],
      [3]
    ]

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def levelOrderBottom(self, root): :type root: TreeNode :rtype: List\[List\[int\]\]

            if not root:
                return []

            queue = [(root, 0)]
            levelMap = {}

            while queue:
                node, level = queue.pop(0)
                if node.left:
                    queue.append((node.left, level + 1))
                if node.right:
                    queue.append((node.right, level + 1))

                if level in levelMap:
                    levelMap[level].append(node.val)
                else:
                    levelMap[level] = [node.val]

            result = []
            for key, value in levelMap.iteritems():
                result.append(value)
            return result[::-1]

## Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

          0
         / \
       -3   9
       /   /
     -10  5

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def sortedArrayToBST(self, nums): :type nums: List\[int\] :rtype: TreeNode

            def constructTree(nums, start, end):
                if start > end:
                    return None

                mid = (start + end) / 2
                node = TreeNode(nums[mid])

                if start == end:
                    return node

                node.left = constructTree(nums, start, mid - 1)
                node.right = constructTree(nums, mid + 1, end)
                return node

            return constructTree(nums, 0, len(nums) - 1)

## Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

    return its minimum depth = 2.

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def minDepth(self, root): if not root: return 0 depth = float(“inf”) stack = \[(root, 1)\]

            while stack:
                node, level = stack.pop()
                if node:

                    if not node.left and not node.right:
                        depth = min(depth, level)

                    stack.append((node.left, level + 1))
                    stack.append((node.right, level + 1))

            return depth

## Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

    Note: A leaf is a node with no children.

    Example:

    Given the below binary tree and sum = 22,

          5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def hasPathSum(self, root, sum): :type root: TreeNode :type sum: int :rtype: bool if not root: return False

            if not root.left and not root.right and root.val == sum:
                return True

            return self.hasPathSum(root.left, sum - root.val) or self.hasPathSum(
                root.right, sum - root.val
            )

## Given a binary tree and a sum, find all root-to-leaf paths where each path’s sum equals the given sum.

    Note: A leaf is a node with no children.

    Example:

    Given the below binary tree and sum = 22,

          5
         / \
        4   8
       /   / \
      11  13  4
     /  \    / \
    7    2  5   1
    Return:

    [
       [5,4,11,2],
       [5,8,4,5]
    ]

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

class Solution(object): def pathSum(self, root, sum): :type root: TreeNode :type sum: int :rtype: List\[List\[int\]\]

            result = []

            def dfs(root, curr_sum, sum, path, result):
                if not root:
                    return

                curr_sum += root.val
                if curr_sum == sum and not root.left and not root.right:
                    result.append(path + [root.val])
                    return

                if root.left:
                    dfs(root.left, curr_sum, sum, path + [root.val], result)
                if root.right:
                    dfs(root.right, curr_sum, sum, path + [root.val], result)

            dfs(root, 0, sum, [], result)
            return result

## Given a string S and a string T, count the number of distinct subsequences of S which equals T.

    A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

    Example 1:

    Input: S = "rabbbit", T = "rabbit"
    Output: 3
    Explanation:

    As shown below, there are 3 ways you can generate "rabbit" from S.
    (The caret symbol ^ means the chosen letters)

    rabbbit
    ^^^^ ^^
    rabbbit
    ^^ ^^^^
    rabbbit
    ^^^ ^^^

class Solution(object): def numDistinct(self, s, t): :type s: str :type t: str :rtype: int

            row, col = len(s), len(t)

            if col > row:
                return 0

            dp = [[0 for _ in range(col + 1)] for _ in range(row + 1)]

            for r in range(row + 1):
                for c in range(col + 1):
                    if r == 0 and c == 0:
                        dp[r][c] = 1
                    elif r == 0:
                        dp[r][c] = 0
                    elif c == 0:
                        dp[r][c] = 1
                    else:
                        dp[r][c] = dp[r - 1][c]
                        if s[r - 1] == t[c - 1]:
                            dp[r][c] += dp[r - 1][c - 1]
            return dp[row][col]

’’’ Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
    Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

    Initially, all next pointers are set to NULL
    Example:

    Given the following perfect binary tree,

         1
       /  \
      2    3
     / \  / \
    4  5  6  7
    After calling your function, the tree should look like:

         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL

’’’

---

### Definition for binary tree with next pointer.

### class TreeLinkNode:

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

### self.next = None

class Solution: \# <span class="citation" data-cites="param"><span class="citation" data-cites="param">@param</span></span> root, a tree link node \# <span class="citation" data-cites="return"><span class="citation" data-cites="return">@return</span></span> nothing def connect(self, root): def recursive(node): if node is None: return

                if node.left:
                    node.left.next = node.right
                if node.right:
                    if node.next:
                        node.right.next = node.next.left
                    else:
                        node.right.next  = None
                recursive(node.left)
                recursive(node.right)

            if root != None:
                root.next = None
                recursive(root)

## Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
    Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

    Initially, all next pointers are set to NULL.

    Example:

    Given the following binary tree,

         1
       /  \
      2    3
     / \    \
    4   5    7
    After calling your function, the tree should look like:

         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL

---

### Definition for binary tree with next pointer.

### class TreeLinkNode:

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

### self.next = None

class Solution: \# <span class="citation" data-cites="param"><span class="citation" data-cites="param">@param</span></span> root, a tree link node \# <span class="citation" data-cites="return"><span class="citation" data-cites="return">@return</span></span> nothing def connect(self, root): if root == None: return queue = \[root\] queue.append(None)

            while queue:
                front = queue.pop(0)
                if front is not None:
                    front.next = queue[0]
                    if front.left:
                        queue.append(front.left)
                    if front.right:
                        queue.append(front.right)
                elif queue:
                    queue.append(None)

---

### Definition for binary tree with next pointer.

### class TreeLinkNode:

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

### self.next = None

class Solution: \# <span class="citation" data-cites="param"><span class="citation" data-cites="param">@param</span></span> root, a tree link node \# <span class="citation" data-cites="return"><span class="citation" data-cites="return">@return</span></span> nothing def connect(self, root): if not root: return None

            root.next = None

            while root:
                temp = root
                while temp:
                    if temp.left:
                        if temp.right:
                            temp.left.next = temp.right
                        else:
                            temp.left.next = self.getNext(temp)
                    if temp.right:
                        temp.right.next = self.getNext(temp)

                    temp = temp.next
                if root.left:
                    root = root.left
                elif root.right:
                    root = root.right
                else:
                    root = self.getNext(root)

        def getNext(self, node):
            node = node.next
            while node:
                if node.left:
                    return node.left
                if node.right:
                    return node.right
                node = node.next
            return None

## Given a non-negative integer numRows, generate the first numRows of Pascal’s triangle.

    Example:

    Input: 5
    Output:
    [
         [1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]
    ]

class Solution(object): def generate(self, numRows): :type numRows: int :rtype: List\[List\[int\]\] triangle = \[\]

            for row in range(numRows):
                new_row = [0 for _ in range(row + 1)]
                new_row[0], new_row[-1] = 1, 1

                for col in range(1, len(new_row) - 1):
                    new_row[col] = triangle[row - 1][col - 1] + triangle[row - 1][col]
                triangle.append(new_row)
            return triangle

## Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal’s triangle.

    Note that the row index starts from 0.

class Solution(object): def getRow(self, rowIndex): :type rowIndex: int :rtype: List\[int\] row = \[1\] \* (rowIndex + 1) for i in range(1, rowIndex + 1): for j in range(i - 1, 0, -1): row\[j\] += row\[j - 1\] return row

    ---

    ```py

    ## Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

        For example, given the following triangle

        [
             [2],
            [3,4],
           [6,5,7],
          [4,1,8,3]
        ]
        The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).



    class Solution(object): def minimumTotal(self, triangle):  :type triangle: List[List[int]] :rtype: int  length = len(triangle) columns = len(triangle[length - 1])
    ```py
            matrix = [[0 for col in range(columns)] for row in range(length)]
            row_index = 0

            for row in range(length):
                elements = triangle[row]
                col_index = 0

                for val in elements:
                    matrix[row_index][col_index] = val
                    col_index += 1
                row_index += 1

            for row in range(length - 2, -1, -1):
                for col in range(row + 1):
                    matrix[row][col] += min(matrix[row + 1][col + 1], matrix[row + 1][col])
            return matrix[0][0]

     Say you have an array for which the ith element is the price of a given stock on day i.

        Design an algorithm to find the maximum profit. You may complete at most two transactions.

        Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

        Example 1:

        Input: [3,3,5,0,0,3,1,4]
        Output: 6
        Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
                     Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.



    class Solution(object): def maxProfit(self, prices):  :type prices: List[int] :rtype: int  if len(prices) < 2: return 0 dp = [[0 for _ in range(len(prices))] for _ in range(3)] for i in range(1, 3): maxDiff = -prices[0] for j in range(1, len(prices)): dp[i][j] = max(dp[i][j - 1], prices[j] + maxDiff) maxDiff = max(maxDiff, dp[i - 1][j] - prices[j])

            return dp[2][len(prices) - 1]

---

    ## Given a non-empty binary tree, find the maximum path sum.

        For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

        Example 1:

        Input: [1,2,3]

               1
              / \
             2   3

        Output: 6
        Example 2:

        Input: [-10,9,20,null,null,15,7]

           -10
           / \
          9  20
            /  \
           15   7

        Output: 42

---

### Definition for a binary tree node.

### class TreeNode(object):

### def **init**(self, x):

### self.val = x

### self.left = None

### self.right = None

    class Solution(object): def maxPathSum(self, root):  :type root: TreeNode :rtype: int  self.result = float(“-inf”) self.dfs(root) return self.result

        def dfs(self, root):
            if not root:
                return 0

            l = self.dfs(root.left)
            r = self.dfs(root.right)

            max_one_end = max(max(l, r) + root.val, root.val)
            max_path = max(max_one_end, l + r + root.val)
            self.result = max(self.result, max_path)
            return max_one_end

    class Solution(object): def numDistinct(self, s, t):  :type s: str :type t: str :rtype: int

            row, col = len(s), len(t)

            if col > row:
                return 0

            dp = [[0 for _ in range(col + 1)] for _ in range(row + 1)]

            for r in range(row + 1):
                for c in range(col + 1):
                    if r == 0 and c == 0:
                        dp[r][c] = 1
                    elif r == 0:
                        dp[r][c] = 0
                    elif c == 0:
                        dp[r][c] = 1
                    else:
                        dp[r][c] = dp[r - 1][c]
                        if s[r - 1] == t[c - 1]:
                            dp[r][c] += dp[r - 1][c - 1]
            return dp[row][col]

    ### Time: O(N^2)

    ### Space: O(N^2)

    ’’’ Given two words (beginWord and endWord), and a dictionary’s word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

        Only one letter can be changed at a time.
        Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
        Note:

        Return 0 if there is no such transformation sequence.
        All words have the same length.
        All words contain only lowercase alphabetic characters.
        You may assume no duplicates in the word list.
        You may assume beginWord and endWord are non-empty and are not the same.
        Example 1:

        Input:
        beginWord = "hit",
        endWord = "cog",
        wordList = ["hot","dot","dog","lot","log","cog"]

        Output: 5

        Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
        return its length 5.

    ’’’

    class Solution(object): def ladderLength(self, beginWord, endWord, wordList):  :type beginWord: str :type endWord: str :type wordList: List[str] :rtype: int  d = {} for word in wordList: for i in range(len(word)): s = word[:i] + "_" + word[i+1:] if s in d: d[s].append(word) else: d[s] = [word] print d queue, visited = [], set() queue.append((beginWord, 1)) while queue: word, steps = queue.pop(0) if word not in visited: visited.add(word)

                    if word == endWord:
                        return steps
                    else:
                        for index in range(len(word)):
                            s = word[:index] + "_" + word[index+1:]
                            neigh_words = []
                            if s in d:
                                neigh_words = d[s]

                            for neigh in neigh_words:
                                if neigh not in visited:
                                    queue.append((neigh, steps+1))
            return 0

    Solution().ladderLength(“hit”, “cog”, [“hot”,“dot”,“dog”,“lot”,“log”,“cog”] ) ## Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

        Your algorithm should run in O(n) complexity.

        Example:

        Input: [100, 4, 200, 1, 3, 2]
        Output: 4
        Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.



    class Solution(object): def longestConsecutive(self, nums):  :type nums: List[int] :rtype: int  result = 0 nums = set(nums)

            for num in nums:
                if num - 1 not in nums:
                    curr = num
                    length = 1

                    while curr + 1 in nums:
                        curr += 1
                        length += 1
                    result = max(result, length)
            return result

---

    ## Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

    An example is the root-to-leaf path 1->2->3 which represents the number 123.

    Find the total sum of all root-to-leaf numbers.

    Note: A leaf is a node with no children.

    Example:

    Input: [1,2,3] 1 /
    2 3 Output: 25 Explanation: The root-to-leaf path 1->2 represents the number 12\. The root-to-leaf path 1->3 represents the number 13\. Therefore, sum = 12 + 13 = 25\.

    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def sumNumbers(self, root):  :type root: TreeNode :rtype: int  if not root: return 0

            def dfs(root, num, total):
                if not root:
                    return total
                num = num * 10 + root.val
                if not root.left and not root.right:
                    total += num
                    return total

                return dfs(root.left, num) + dfs(root.right, num)

            return dfs(root, 0, 0)

    ## Given a 2D board containing ‘X’ and ‘O’ (the letter O), capture all regions surrounded by ‘X’.

        A region is captured by flipping all 'O's into 'X's in that surrounded region.

        Example:

        X X X X
        X O O X
        X X O X
        X O X X
        After running your function, the board should be:

        X X X X
        X X X X
        X X X X
        X O X X



    class Solution(object): def solve(self, board):  :type board: List[List[str]] :rtype: void Do not return anything, modify board in-place instead.  if len(board) == 0: return for row in range(len(board)): if board[row][0] == “O”: self.merge(board, row, 0) if board[row][len(board[0]) - 1] == “O”: self.merge(board, row, len(board[0]) - 1)

            for col in range(len(board[0])):
                if board[0][col] == "O":
                    self.merge(board, 0, col)

                if board[len(board) - 1][col] == "O":
                    self.merge(board, len(board) - 1, col)

            for row in range(len(board)):
                for col in range(len(board[0])):
                    if board[row][col] == "O":
                        board[row][col] = "X"
                    elif board[row][col] == "#":
                        board[row][col] = "O"

        def merge(self, board, row, col):
            if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
                return
            if board[row][col] != "O":
                return

            board[row][col] = "#"
            self.merge(board, row + 1, col)
            self.merge(board, row, col - 1)
            self.merge(board, row, col + 1)
            self.merge(board, row - 1, col)

    ## Given a string s, partition s such that every substring of the partition is a palindrome.

        Return all possible palindrome partitioning of s.



    class Solution(object): def partition(self, s): result = []

            def valid(s):
                for i in range(len(s) / 2):
                    if s[i] != s[-(i + 1)]:
                        return False
                return True

            def partitionRec(curr, s, i):
                if i == len(s):
                    result.append(curr)
                else:
                    for j in range(i, len(s)):
                        if valid(s[i : j + 1]):
                            partitionRec(curr + [s[i : j + 1]], s, j + 1)

            partitionRec([], s, 0)
            return result

    ## Given a string s, partition s such that every substring of the partition is a palindrome.

        Return the minimum cuts needed for a palindrome partitioning of s.

        Example:

        Input: "aab"
        Output: 1
        Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.



    class Solution(object): def minCut(self, s):  :type s: str :rtype: int  if not s: return 0

            P = [[False for _ in range(len(s))] for _ in range(len(s))]
            cuts = [0 for _ in range(len(s))]

            for index in range(len(s)):
                P[index][index] = True

            for length in range(2, len(s) + 1):
                for i in range(len(s) - length + 1):
                    j = i + length - 1

                    if length == 2:
                        P[i][j] = s[i] == s[j]
                    else:
                        P[i][j] = (s[i] == s[j]) and P[i + 1][j - 1]

            for index in range(len(s)):
                if P[0][index]:
                    cuts[index] = 0
                else:
                    cuts[index] = float("inf")
                    for j in range(index):
                        if P[j + 1][index] and (cuts[index] > 1 + cuts[j]):
                            cuts[index] = 1 + cuts[j]

            return cuts[len(s) - 1]

    ### Time: O(N^2)

    ### Space: O(N^2)

     There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

        You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

        Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.



    class Solution(object): def canCompleteCircuit(self, gas, cost):  :type gas: List[int] :type cost: List[int] :rtype: int  start, curr_sum, total_sum = 0, 0, 0 for index in range(len(gas)): diff = gas[index] - cost[index] total_sum += diff curr_sum += diff

                if curr_sum < 0:
                    start = index + 1
                    curr_sum = 0

            if total_sum >= 0:
                return start
            return -1

    ## Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

        Note:

        The same word in the dictionary may be reused multiple times in the segmentation.
        You may assume the dictionary does not contain duplicate words.
        Example 1:

        Input: s = "leetcode", wordDict = ["leet", "code"]
        Output: true
        Explanation: Return true because "leetcode" can be segmented as "leet code".



    class Solution(object): def wordBreak(self, s, wordDict):  :type s: str :type wordDict: List[str] :rtype: bool  dp = [False for _ in range(len(s) + 1)] dp[0] = True for index in range(len(s)): for j in range(i, -1, -1): if dp[j] and s[j : i + 1] in wordDict: dp[i + 1] = True break return dp[len(s)]

    class Solution(object): def wordBreak(self, s, wordDict):  :type s: str :type wordDict: List[str] :rtype: List[str]  self.result = [] self.dfs(s, wordDict, "") return self.result

        def dfs(self, s, wordDict, currStr):
            if self.check(s, wordDict):
                if len(s) == 0:
                    self.result.append(currStr[1:])
                for i in range(1, len(s) + 1):
                    if s[:i] in wordDict:
                        self.dfs(s[i:], wordDict, currStr + " " + s[:i])

        def check(self, s, wordDict):
            dp = [False for _ in range(len(s) + 1)]
            dp[0] = True

            for i in range(len(s)):
                for j in range(i, -1, -1):
                    if dp[j] and s[j : i + 1] in wordDict:
                        dp[i + 1] = True
                        break

            return dp[len(s)]

    ## Given a linked list, determine if it has a cycle in it.

        Follow up:
        Can you solve it without using extra space?



    ---

    ### Definition for singly-linked list.

    ### class ListNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.next = None

    class Solution(object): def hasCycle(self, head):  :type head: ListNode :rtype: bool

            if not head:
                return False

            slow, fast = head, head
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
                if slow == fast:
                    return True
            return False

---

    ## Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

        Note: Do not modify the linked list.

        Follow up:
        Can you solve it without using extra space?

     # Definition for singly-linked list. # class ListNode(object): # def **init**(self, x): # self.val = x # self.next = None

    class Solution(object): def detectCycle(self, head):  :type head: ListNode :rtype: ListNode  if not head: return None

            slow, fast = head, head.next

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
                if slow == fast:
                    break

            if slow == fast:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow
            return None

    ---

    ### Definition for singly-linked list.

    ### class ListNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.next = None

    class Solution(object): def reorderList(self, head):  :type head: ListNode :rtype: void Do not return anything, modify head in-place instead.  if not head: return None

            slow, fast = head, head.next

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

            head1, head2 = head, slow.next
            slow.next = None
            prev = None
            curr = head2
            while curr:
                nex = curr.next
                curr.next = prev
                prev = curr
                curr = nex
            head2 = prev

            while head2:
                n1 = head1.next
                n2 = head2.next
                head1.next = head2
                head1.next.next = n1
                head2 = n2
                head1 = head1.next.next

            head = head1

---

    ## Given a binary tree, return the preorder traversal of its nodes’ values.

        Example:

        Input: [1,null,2,3]
           1
            \
             2
            /
           3

        Output: [1,2,3]
        Follow up: Recursive solution is trivial, could you do it iteratively?



    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def preorderTraversal(self, root):  :type root: TreeNode :rtype: List[int]  if not root: return []

            stack, result = [root], []
            while stack:
                element = stack.pop()
                result.append(element.val)

                if element.right:
                    stack.append(element.right)
                if element.left:
                    stack.append(element.left)

            return result

    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def preorderTraversal(self, root):  :type root: TreeNode :rtype: List[int]  result = []

            def recursive(root, result):
                if not root:
                    return
                result.append(root.val)
                recursive(root.left, result)
                recursive(root.right, result)

            recursive(root, result)
            return result

---

    ## Given a binary tree, return the postorder traversal of its nodes’ values.

        Example:

        Input: [1,null,2,3]
           1
            \
             2
            /
           3

        Output: [3,2,1]
        Follow up: Recursive solution is trivial, could you do it iteratively?



    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def postorderTraversal(self, root):  :type root: TreeNode :rtype: List[int]

            result = []

            def recursive(root, result):
                if not root:
                    return
                recursive(root.left, result)
                recursive(root.right, result)
                result.append(root.val)

            recursive(root, result)
            return result

    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def postorderTraversal(self, root):  :type root: TreeNode :rtype: List[int]

            if not root:
                return []

            stack, result = [], []

            while True:
                while root:
                    if root.right:
                        stack.append(root.right)
                    stack.append(root)
                    root = root.left

                root = stack.pop()

                if root.right and stack and stack[-1] == root.right:
                    stack.pop()
                    stack.append(root)
                    root = root.right
                else:
                    result.append(root.val)
                    root = None

                if len(stack) <= 0:
                    break

            return result

---

     Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

        get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
        put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

        Follow up:
        Could you do both operations in O(1) time complexity?

        Example:

        LRUCache cache = new LRUCache( 2 /* capacity */ );

        cache.put(1, 1);
        cache.put(2, 2);
        cache.get(1);       // returns 1
        cache.put(3, 3);    // evicts key 2
        cache.get(2);       // returns -1 (not found)
        cache.put(4, 4);    // evicts key 1
        cache.get(1);       // returns -1 (not found)
        cache.get(3);       // returns 3
        cache.get(4);       // returns 4

---

    class Node(object): def **init**(self, key, value): self.key = key self.value = value self.next = None self.prev = None

    class LRUCache(object): def **init**(self, capacity):  :type capacity: int  self.capacity = capacity self.mapping = dict() self.head = Node(0, 0) self.tail = Node(0, 0) self.head.next = self.tail self.tail.prev = self.head

        def get(self, key):

            :type key: int
            :rtype: int

            if key in self.mapping:
                node = self.mapping[key]
                self.remove(node)
                self.add(node)
                return node.value
            return -1

        def put(self, key, value):

            :type key: int
            :type value: int
            :rtype: void


            if key in self.mapping:
                self.remove(self.mapping[key])

            node = Node(key, value)
            if len(self.mapping) >= self.capacity:
                next_head = self.head.next
                self.remove(next_head)
                del self.mapping[next_head.key]

            self.add(node)
            self.mapping[key] = node

        def add(self, node):
            tail = self.tail.prev
            tail.next = node
            self.tail.prev = node
            node.prev = tail
            node.next = self.tail

        def remove(self, node):
            prev_node = node.prev
            prev_node.next = node.next
            node.next.prev = prev_node

    ### Your LRUCache object will be instantiated and called as such:

    ### obj = LRUCache(capacity)

    ### param_1 = obj.get(key)

    ### obj.put(key,value)

    ---

    ### Definition for singly-linked list.

    ### class ListNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.next = None

    class Solution(object): def insertionSortList(self, head):  :type head: ListNode :rtype: ListNode

            if not head:
                return None

            sortedList = head
            head = head.next
            sortedList.next = None

            while head:
                curr = head
                head = head.next
                if curr.val <= sortedList.val:
                    curr.next = sortedList
                    sortedList = curr
                else:
                    temp = sortedList
                    while temp.next and temp.next.val < curr.val:
                        temp = temp.next
                    curr.next = temp.next
                    temp.next = curr
            return sortedList

     Sort a linked list in O(n log n) time using constant space complexity.

        Example 1:

        Input: 4->2->1->3
        Output: 1->2->3->4



    ---

    ### Definition for singly-linked list.

    ### class ListNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.next = None

    class Solution(object): def sortList(self, head):  :type head: ListNode :rtype: ListNode

            if not head or not head.next:
                return head

            slow, fast = head, head.next

            while fast.next and fast.next.next:
                slow = slow.next
                fast = fast.next.next

            head1, head2 = head, slow.next
            slow.next = None
            head1 = self.sortList(head1)
            head2 = self.sortList(head2)
            head = self.merge(head1, head2)
            return head

        def merge(self, head1, head2):
            if not head1:
                return head2
            if not head2:
                return head1

            result = ListNode(0)
            p = result

            while head1 and head2:
                if head1.val <= head2.val:
                    p.next = ListNode(head1.val)
                    head1 = head1.next
                    p = p.next
                else:
                    p.next = ListNode(head2.val)
                    head2 = head2.next
                    p = p.next

            if head1:
                p.next = head1
            if head2:
                p.next = head2
            return result.next

     Evaluate the value of an arithmetic expression in Reverse Polish Notation.

        Valid operators are +, -, *, /. Each operand may be an integer or another expression.

        Note:

        Division between two integers should truncate toward zero.
        The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
        Example 1:

        Input: ["2", "1", "+", "3", "*"]
        Output: 9
        Explanation: ((2 + 1) * 3) = 9
        Example 2:

        Input: ["4", "13", "5", "/", "+"]
        Output: 6
        Explanation: (4 + (13 / 5)) = 6



    class Solution(object): def evalRPN(self, tokens):  :type tokens: List[str] :rtype: int

            if not tokens:
                return 0

            stack = []
            for val in tokens:
                if val == "+":
                    val1 = stack.pop()
                    val2 = stack.pop()
                    stack.append(val1 + val2)
                elif val == "-":
                    val1 = stack.pop()
                    val2 = stack.pop()
                    stack.append(val2 - val1)
                elif val == "*":
                    val1 = stack.pop()
                    val2 = stack.pop()
                    stack.append(val2 * val1)
                elif val == "/":
                    val1 = stack.pop()
                    val2 = stack.pop()
                    if val1 * val2 < 0:
                        stack.append(-(-val2 / val1))
                    else:
                        stack.append(val2 / val1)
                else:
                    stack.append(int(val))
            return stack[0]

---

    ## Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

        Example 1:

        Input: [2,3,-2,4]
        Output: 6
        Explanation: [2,3] has the largest product 6.

        Example 2:

        Input: [-2,0,-1]
        Output: 0
        Explanation: The result cannot be 2, because [-2,-1] is not a subarray.



    class Solution(object): def maxProduct(self, nums):  :type nums: List[int] :rtype: int

            if not nums:
                return 0

            max_so_far, min_so_far, result = nums[0], nums[0], nums[0]

            for index in range(1, len(nums)):
                if nums[index] > 0:
                    max_so_far = max(max_so_far * nums[index], nums[index])
                    min_so_far = min(min_so_far * nums[index], nums[index])
                else:
                    temp = max_so_far
                    max_so_far = max(min_so_far * nums[index], nums[index])
                    min_so_far = min(temp * nums[index], nums[index])

                result = max(result, max_so_far)
            return result

     Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    Find the minimum element.

    You may assume no duplicate exists in the array.

    Example 1:

    Input: [3,4,5,1,2] Output: 1 Example 2:

    Input: [4,5,6,7,0,1,2] Output: 0

    class Solution(object): def findMin(self, nums):  :type nums: List[int] :rtype: int  if not nums: return 0

            if len(nums) == 1:
                return nums[0]
            left, right = 0, len(nums) - 1

            if nums[left] < nums[right]:
                return nums[left]
            while left <= right:
                while nums[left] == nums[right] and left != right:
                    left += 1

                if nums[left] <= nums[right]:
                    return nums[left]

                mid = (left + right) / 2
                if nums[mid] >= nums[left]:
                    left = mid + 1
                else:
                    right = mid
            return -1

    ’’’ Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

        push(x) -- Push element x onto stack.
        pop() -- Removes the element on top of the stack.
        top() -- Get the top element.
        getMin() -- Retrieve the minimum element in the stack.
        Example:
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        minStack.getMin();   --> Returns -3.
        minStack.pop();
        minStack.top();      --> Returns 0.
        minStack.getMin();   --> Returns -2.

    ’’’

    class MinStack(object):

        def __init__(self):

            initialize your data structure here.

            self.stack = []
            self.minimum = float('inf')

        def push(self, x):

            :type x: int
            :rtype: void

            if not self.stack:
                self.stack.append(x)
                self.minimum = x
            else:
                if x < self.minimum:
                    self.stack.append(2*x-self.minimum)
                    self.minimum = x
                else:
                    self.stack.append(x)

            print self.stack

        def pop(self):

            :rtype: void

            if self.stack:
                top = self.stack.pop()
                if top < self.minimum:
                    self.minimum = 2*self.minimum - top

        def top(self):

            :rtype: int

            if not self.stack:
                return None
            else:
                top = self.stack[-1]
                if top < self.minimum:
                    return self.minimum
                else:
                    return top

        def getMin(self):

            :rtype: int

            if self.stack:
                return self.minimum
            else:
                return None

    ### Your MinStack object will be instantiated and called as such:

    ### obj = MinStack()

    ### obj.push(x)

    ### obj.pop()

    ### param_3 = obj.top()

    ### param_4 = obj.getMin()

    ’’’ Given a string, find the longest substring that contains only two unique characters. For example, given “abcbbbbcccbdddadacb”, the longest substring that contains 2 unique character is “bcbbbbcccb”. ’’’

    class Solution(object): def lengthOfLongestSubstringTwoDistinct(self, s):  :type s: str :rtype: int  if not s: return 0

            unique_char, start, result = {}, 0, 0
            for index, char in enumerate(s):
                if char in unique_char:
                    unique_char[s] += 1
                else:
                    unique_char[s] = 1

                if len(unique_char) <= 2:
                    result = max(result, index-start+1)
                else:
                    while len(unique_char) > 2:
                        char_index = s[start]
                        count = unique_char[char_index]
                        if count == 1:
                            del unique_char[char_index]
                        else:
                            unique_char[char_index] -= 1
                        start += 1
            return result

     Write a program to find the node at which the intersection of two singly linked lists begins.

        For example, the following two linked lists:

        A:          a1 → a2
                           ↘
                             c1 → c2 → c3
                           ↗
        B:     b1 → b2 → b3
        begin to intersect at node c1.



    ---

    ### Definition for singly-linked list.

    ### class ListNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.next = None

    class Solution(object): def getIntersectionNode(self, headA, headB):  :type head1, head1: ListNode :rtype: ListNode  if not headA or not headB: return None

            pa, pb = headA, headB
            while pa != pb:
                pa = pa.next if pa is not None else headB
                pb = pb.next if pb is not None else headA

            return pa if pa else None

     A peak element is an element that is greater than its neighbors.

        Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

        The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

        You may imagine that nums[-1] = nums[n] = -∞.

        Example 1:

        Input: nums = [1,2,3,1]
        Output: 2
        Explanation: 3 is a peak element and your function should return the index number 2.



    class Solution(object): def findPeakElement(self, nums):  :type nums: List[int] :rtype: int  left, right = 0, len(nums) - 1 while left < right: mid = (left + right) / 2 if nums[mid] > nums[mid + 1]: right = mid else: left = mid + 1 return left

    class Solution(object): def findPeakElement(self, nums):  :type nums: List[int] :rtype: int  left = [False] * len(nums) right = [False] * len(nums) left[0], right[len(nums) - 1] = True, True

            for index in range(1, len(nums)):
                if nums[index] > nums[index - 1]:
                    left[index] = True

            for index in range(len(nums) - 2, -1, -1):
                if nums[index] > nums[index + 1]:
                    right[index] = True

            for index in range(len(left)):
                if left[index] and right[index]:
                    return index
            return -1

    ’’’ Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

    For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return [“2”, “4->49”, “51->74”, “76->99”]. ’’’

    class Solution(object): def missingRange(self, A, lower, upper): if not A: return []

            result = []
            if A[0] != lower:
                end = A[0] - 1
                if end == lower:
                    m_r = str(lower)
                else:
                    m_r = str(lower) + "->" + str(end)
                result.append(m_r)

            for index in range(1, len(A)):
                if A[index] != A[index-1] + 1:
                    start = A[index-1] + 1
                    end = A[index] - 1
                    if start == end:
                        m_r = str(start)
                    else:
                        m_r = str(start) + "->" + str(end)
                    result.append(m_r)

            if A[len(A) - 1] != upper:
                start = A[len(A)-1] + 1
                if start == upper:
                    m_r = str(start)
                else:
                    m_r = str(start) + "->" + str(upper)
                result.append(m_r)
            return result

    solution = Solution() print solution.missingRange([0, 1, 3, 50, 75], 0, 99) print solution.missingRange([4, 10, 50, 98], 0, 99) print solution.missingRange([0], 0, 1)  Design and implement a TwoSum class. It should support the following operations: add and find.

    add – Add the number to an internal data structure. find – Find if there exists any pair of numbers which sum is equal to the value.

    For example, add(1); add(3); add(5); find(4) -> true find(7) -> false

    class TwoSum(object): def **init**(self):  initialize your data structure here  self.value_count = {}

        def add(self, number):

            Add the number to an internal data structure.
            :rtype: nothing

            if number in self.value_count:
                self.value_count[number] += 1
            else:
                self.value_count[number] = 1

        def find(self, value):

            Find if there exists any pair of numbers which sum is equal to the value.
            :type value: int
            :rtype: bool

            for val in self.value_count:
                diff = value - val
                if diff in self.value_count and (diff != val or self.value_count[val] > 1):
                    return True
            return False

    ### Your TwoSum object will be instantiated and called as such:

    ### twoSum = TwoSum()

    ### twoSum.add(number)

    ### twoSum.find(value)

     Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

        Calling next() will return the next smallest number in the BST.

        Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.



    ---

    ### Definition for a binary tree node

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class BSTIterator(object): def **init**(self, root):  :type root: TreeNode  self.stack = [] while root: self.stack.append(root) root = root.left

        def hasNext(self):

            :rtype: bool

            return self.stack

        def next(self):

            :rtype: int

            node = self.stack.pop()
            new_node = node.right
            while new_node:
                self.stack.append(new_node)
                new_node = new_node.left
            return node.val

    ### Your BSTIterator will be called like this:

    ### i, v = BSTIterator(root), []

    ### while i.hasNext(): v.append(i.next())

---

    ## Given a list of non negative integers, arrange them such that they form the largest number.

        Example 1:

        Input: [10,2]
        Output: "210"
        Example 2:

        Input: [3,30,34,5,9]
        Output: "9534330"

    ###

    class Solution: # <span class="citation" data-cites="param">@param</span> {integer[]} nums # <span class="citation" data-cites="return">@return</span> {string} def largestNumber(self, nums): nums = [str(num) for num in nums] nums.sort(cmp=lambda x, y: cmp(y + x, x + y)) return "“.join(nums).lstrip(”0“) or”0"

    class Solution: # <span class="citation" data-cites="param">@param</span> n, an integer # <span class="citation" data-cites="return">@return</span> an integer def reverseBits(self, n): res = 0 for i in range(32): res += n & 1 n = n >> 1 if i != 31: res = res << 1 return res

    print Solution().reverseBits(12) class Solution(object): def hammingWeight(self, n):  :type n: int :rtype: int  bits = 0 mask = 1

            for i in range(32):
                if (n & mask) != 0:
                    bits += 1
                mask <<= 1

            return bits

---

    ## Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

        Example:

        Input: [1,2,3,null,5,null,4]
        Output: [1, 3, 4]
        Explanation:

           1            <---
         /   \
        2     3         <---
         \     \
          5     4       <---



    ---

    ### Definition for a binary tree node.

    ### class TreeNode(object):

    ### def **init**(self, x):

    ### self.val = x

    ### self.left = None

    ### self.right = None

    class Solution(object): def rightSideView(self, root):  :type root: TreeNode :rtype: List[int]  if not root: return []

            stack, node_depth = [(root, 0)], {}

            while stack:
                node, depth = stack.pop(0)
                if depth not in node_depth:
                    node_depth[depth] = node.val

                if node.right:
                    stack.append((node.right, depth + 1))
                if node.left:
                    stack.append((node.left, depth + 1))
            return node_depth.values()
