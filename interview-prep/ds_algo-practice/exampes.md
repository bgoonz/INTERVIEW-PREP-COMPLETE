# Exampes

```javascript
/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?
 
Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 
Constraints:
1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
At most 3 * 104 calls will be made to get and put.
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  let value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 
Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head,
    c = head,
    one = l1,
    two = l2,
    carry = 0;

  while (one || two) {
    let x = 0,
      y = 0,
      sum = carry,
      next,
      tmpNode;
    if (one.val) {
      x = one.val;
    }

    if (two.val) {
      y = two.val;
    }

    sum += x + y;
    carry = Math.floor(sum / 10);
    next = sum % 10;
    tmpNode = new ListNode(next);

    if (head == null) {
      head = new ListNode(next);
      c = head;
    } else {
      c.next = tmpNode;
      c = c.next;
    }

    if (one.next != null) {
      one = one.next;
    } else {
      one = false;
    }

    if (two.next != null) {
      two = two.next;
    } else {
      two = false;
    }
  }

  if (carry > 0) {
    let tmpNode = new ListNode(carry);
    c.next = tmpNode;
  }
  return head;
};

console.log(addTwoNumbers([3, 4, 5], [7, 9, 1]));
/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
Example 1:
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
Example 2:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
Example 3:
Input: l1 = [0], l2 = [0]
Output: [0]
 
Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 
Follow up: Could you solve it without reversing the input lists?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // make 2 stack
  let s1 = [];
  let s2 = [];

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  // similiar to 2. Add Two Numbers
  let list = new ListNode(0);
  let sum = 0;

  while (s1.length !== 0 || s2.length !== 0 || sum > 0) {
    sum = sum + (s1.length === 0 ? 0 : s1.pop());
    sum = sum + (s2.length === 0 ? 0 : s2.pop());

    // start to deal with linked list
    // update current node value
    list.val = sum % 10;

    // add new head node with carry, head.val could be 1 or 0
    sum = Math.floor(sum / 10);
    let head = new ListNode(sum);

    // connect
    head.next = list;

    // update the head
    list = head;
  }

  if (list.val === 0) {
    return list.next;
  } else {
    return list;
  }
};

const l1 = [7, 2, 4, 3],
  l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
/*
  Amazon Fresh Promo (example question)

  Amazon is running a promotion in which customers receive prizes for purchasing a secret combination of fruits. The combination will change each day, and the team running the promotion wants to use a code list to make it easy to change the combination. The code list contains groups of fruits. Both the order of the groups within the code list and the order of the fruits within the groups matter. However, between the groups of fruits, any number, and type of fruit is allowable. The term "anything" is used to allow for any type of fruit to appear in that location within the group.

  Consider the following secret code list: [[apple, apple], [banana, anything, banana]]
  Based on the above secret code list, a customer who made either of the following purchases would win the prize:
  orange, apple, apple, banana, orange, banana
  apple, apple, orange, orange, banana, apple, banana, banana

  Write an algorithm to output 1 if the customer is a winner else output 0.

  Input
  The input to the function/method consists of two arguments:
  codeList, a list of lists of strings representing the order and grouping of specific fruits that must be purchased in order to win the prize for the day.
  shoppingCart, a list of strings representing the order in which a customer purchases fruit.

  Output
  Return an integer 1 if the customer is a winner else return 0.

  Note
  'anything' in the codeList represents that any fruit can be ordered in place of 'anything' in the group. 'anything' has to be something, it cannot be "nothing."
  'anything' must represent one and only one fruit.
  If secret code list is empty then it is assumed that the customer is a winner.

  Example 1:

  Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [orange, apple, apple, banana, orange, banana]
  Output: 1
  Explanation:
  codeList contains two groups - [apple, apple] and [banana, anything, banana].
  The second group contains 'anything' so any fruit can be ordered in place of 'anything' in the shoppingCart. The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of groups in the codeList is also maintained in the shoppingCart.

  Example 2:

  Input: codeList = [[apple, apple], [banana, anything, banana]]
  shoppingCart = [banana, orange, banana, apple, apple]
  Output: 0
  Explanation:
  The customer is not a winner as the customer has added the fruits in order of groups but group [banana, orange, banana] is not following the group [apple, apple] in the codeList.

  Example 3:

  Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [apple, banana, apple, banana, orange, banana]
  Output: 0
  Explanation:
  The customer is not a winner as the customer has added the fruits in an order which is not following the order of fruit names in the first group.

  Example 4:

  Input: codeList = [[apple, apple], [apple, apple, banana]] shoppingCart = [apple, apple, apple, banana]
  Output: 0
  Explanation:
  The customer is not a winner as the first 2 fruits form group 1, all three fruits would form group 2, but can't because it would contain all fruits of group 1.

   * Complete the 'foo' function below.
   *
   * The function is expected to return an INTEGER.
   * The function accepts following parameters:
   *  1. STRING_ARRAY codeList
   *  2. STRING_ARRAY shoppingCart
*/

function hasOrder(shoppingCart, index, order) {
  for (let i = 0; i < order.length; i++) {
    let currentCart = shoppingCart[index]
      ? shoppingCart[index].includes(order[i])
      : false;
    if (
      (index < shoppingCart.length && order[i].includes("anything")) ||
      currentCart
    ) {
      index++;
    } else {
      return false;
    }
  }

  return true;
}

function foo(codeList, shoppingCart) {
  // Write your code here
  let splitCodeList = codeList.map((code) => {
    return code.split(" ");
  });

  let cartIndex = 0;
  let codeIndex = 0;

  while (cartIndex < shoppingCart.length && codeIndex < splitCodeList.length) {
    let current = shoppingCart[cartIndex];
    if (
      splitCodeList[codeIndex][0].includes("anything") ||
      (splitCodeList[codeIndex][0].includes(current) &&
        hasOrder(shoppingCart, cartIndex, splitCodeList[codeIndex]))
    ) {
      cartIndex += splitCodeList[codeIndex++].length;
    } else {
      cartIndex++;
    }
  }

  return codeIndex === codeList.length ? 1 : 0;
}
/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
 
Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:
Input: root = []
Output: []
Example 3:
Input: root = [1]
Output: [1]
Example 4:
Input: root = [1,2]
Output: [2,1]
Example 5:
Input: root = [1,null,2]
Output: [1,2]
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // recursive method
  let res = [];
  const inOrder = (root) => {
    if (root == null) return;
    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
  };
  inOrder(root);
  return res;

  // iterative method
  // const stack = [], result = [];
  // root && stack.push(root);

  // while (stack.length) {
  //     const item = stack.pop();
  //     if (item.left) {
  //         stack.push(item);
  //         stack.push(item.left);
  //         item.left = null;
  //     }
  //     else {
  //         result.push(item.val);
  //         item.right && stack.push(item.right);
  //     }
  // }

  // return result;
};

const root = [1, null, 2];
console.log(inorderTraversal(root));
/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:
Input: root = [1]
Output: [[1]]
Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const arr = [root],
    result = [];

  while (arr.length) {
    const size = arr.length,
      values = [];

    for (let i = 0; i < size; i++) {
      const node = arr.shift();
      values.push(node.val);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    result.push(values);
  }

  return result;
};

const root = [3, 9, 20, null, null, 15, 7];
console.log(levelOrder(root));
/*
  Amazon Logistics would like to quickly set up a roof over a parking lot. 
  There are many cars parked in the parking lot and the lot is in a straight line. There are n cars currently
  parked and a roofer needs to cover them with a roof . The requirement is that atleast k cars currently in the lot are covered
  by the roof. Determine the minimum length of the roof to cover k cars.

  Example 
  n = 4
  cars = [6,2,12,7]
  k = 3

  Two roofs that cover three cars are possible: one covering spots 2 through 7 with a length of 6, and another covering
  slots 6 through 12 with a length of 7. The shortest roof that meets the requirement is of length 6.
*/

function carParkingRoof(cars, k) {
  cars.sort((a, b) => {
    return a - b;
  });
  let length = cars.length;
  let min = cars[k - 1] - cars[0] + 1;
  for (let i = 0; i < length - k + 1; i++) {
    let temp = cars[i + k - 1] - cars[i];
    if (temp < min) {
      min = temp + 1;
    }
  }
  return min;
}
/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 
Constraints:
0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let curr = head;
  while (curr) {
    let copy = new Node(curr.val, curr.next, null);
    copy.next = curr.next;
    curr.next = copy;
    curr = curr.next;
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  curr = head;
  let result = head.next;
  let resPtr = result;
  while (curr) {
    curr.next = curr.next.next;
    curr = curr.next;
    resPtr.next = resPtr.next ? resPtr.next.next : null;
    resPtr = resPtr.next;
  }

  return result;
};

const head = [
  [3, null],
  [3, 0],
  [3, null],
];
console.log(copyRandomList(head));
/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
 
Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 
Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min;
  for (let i = 0; i < nums.length; i++) {
    if (!min && min != 0) {
      min = nums[i];
    } else {
      if (min > nums[i]) {
        min = nums[i];
      }
    }
  }

  return min;
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
 
Example 1:
Input: nums = [1,3,5]
Output: 1
Example 2:
Input: nums = [2,2,2,0,1]
Output: 0
 
Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
nums is sorted and rotated between 1 and n times.
 
Follow up: This is the same as Find Minimum in Rotated Sorted Array but with duplicates. Would allow duplicates affect the run-time complexity? How and why?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min;

  for (let i = 0; i < nums.length; i++) {
    if (min != nums[i]) {
      if (!min && min != 0) {
        min = nums[i];
      } else {
        if (min > nums[i]) {
          min = nums[i];
        }
      }
    }
  }

  return min;
};

const nums = [2, 2, 2, 0, 1];
console.log(findMin(nums));
/*
Given an integer n, return any array containing n unique integers such that they add up to 0.
 
Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:
Input: n = 3
Output: [-1,0,1]
Example 3:
Input: n = 1
Output: [0]
 
Constraints:
1 <= n <= 1000
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const result = [];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
    result.push(i);
  }
  result.push(-sum);
  return result;
};

console.log(sumZero(5));
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]
 
Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values());
};

var uniform = function (str) {
  return str.split("").sort().join(""); // /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
 
Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:
Example 2:
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:
Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 
Constraints:
The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) {
    return new TreeNode(val);
  }

  // insert into the right subtree
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    // insert into the left subtree
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
 
Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 
Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 
Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};
/*
Given a string s, return the longest palindromic substring in s.
 
Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb"
Example 3:
Input: s = "a"
Output: "a"
Example 4:
Input: s = "ac"
Output: "a"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

const longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.slice(Math.ceil(start), end + 1);
};

function expandAroundCenter(s, left, right) {
  let L = left,
    R = right;
  while (L > -1 && R < s.length) {
    if (s[L] !== s[R]) break;
    L--;
    R++;
  }
  return R - L - 1;
}

const s = "abb";
console.log(longestPalindrome(s));
/*
  A special event coordinator for Amazon Web Services is planning to host a series of presenations by different companies for a Day 1
  Orientation. The coordinator has a list of companies along with their respective arrival times and their duration
  of stay. Only one company can be presentation at any time. Given each company's arrival time and the diartion they
  will stay, determine the maximum number of presentations that can be hosted during the orientation

  example 
  n = 5
  arrival = [1,3,3,5,7]
  duration = [2,2,1,2,1]

  The first company arrives at time 1 and stays for 2 hours. At time 3, two companies arrive, but only 1 can stay for either 
  1 or 2 hours. The next companies arrive at time 5 and 7 and do not conflict with any others. In total, there can be a maximum of 4
  promotional events.
*/
function maxEvents(arrival, duration) {
  let counter = 1;

  for (let i = 1; i < arrival.length; i++) {
    const tempDuration = arrival[i - 1] + duration[i - 1] - 1;
    if (tempDuration <= arrival[i]) {
      counter++;
    }
  }

  return counter;
}

console.log(maxEvents([1, 3, 3, 5, 7], [2, 2, 1, 2, 1])); // 4
console.log(maxEvents([1, 2], [7, 3])); // 1
console.log(maxEvents([1, 3, 4, 6], [4, 3, 3, 2])); // 2

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
 
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:
Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:
Input: nums1 = [2], nums2 = []
Output: 2.00000
 
Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    const partitionX = (high + low) >> 1;
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    console.log((7 + 0) >> 1);

    const maxX =
      partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX =
      partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY =
      partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY);
      if ((x + y) % 2 == 1) {
        return lowMax;
      }
      return (lowMax + Math.min(minX, minY)) / 2;
    } else if (maxX < minY) {
      low = partitionX + 1;
    } else {
      high = partitionX - 1;
    }
  }
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const nums2 = [4, 5, 6, 7, 8, 9];
console.log(findMedianSortedArrays(nums1, nums2));

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
 
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 
Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
 
Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  let done = false;

  // sort the array Bubble Sort Method
  while (!done) {
    done = true;
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i - 1] > nums1[i]) {
        done = false;
        let temp = nums1[i - 1];
        nums1[i - 1] = nums1[i];
        nums1[i] = temp;
      }
    }
  }
};

const nums1 = [1],
  m = 1,
  nums2 = [],
  n = 0;
console.log(merge(nums1, m, nums2, n));
/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 
Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: l1 = [], l2 = []
Output: []
Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let preHead = new ListNode(-1);

  let prev = preHead;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // At least one of l1 and l2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
  prev.next = l1 === null ? l2 : l1;

  return preHead.next;
};
/*
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:
If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.
 
Example 1:
Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
Example 2:
Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3
 
Constraints:
1 <= students.length, sandwiches.length <= 100
students.length == sandwiches.length
sandwiches[i] is 0 or 1.
students[i] is 0 or 1.
*/

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
    if (students[0] == sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students.shift());
    }
  }
  return students.length;
};

const students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students, sandwiches));
/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 
Constraints:
0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    console.log(nums[j], nums[i]);
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const nums = [1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7];
console.log(removeDuplicates(nums));
/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.
 
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:
Input: head = [1,2]
Output: [2,1]
Example 3:
Input: head = []
Output: []
 
Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIteratively = function (head) {
  // iteratively
  if (!head) {
    return head;
  }

  let current = head.next;

  let node = head;
  node.next = null;

  while (current) {
    let temp = current;
    current = current.next;
    temp.next = node;
    node = temp;
  }

  return node;
};

var reverseListRecursively = function (head, prev = null) {
  // recursively
  if (!head) {
    return head;
  }

  const next = head.next;
  head.next = prev;

  return next ? reverseList(next, head) : head;
};
/*
Write a function that reverses a string. The input string is given as an array of characters s.
 
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
 
Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const s = ["h", "e", "l", "l", "o"];
const reverseString = (s) => {
  let reversedArray = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversedArray.push(s[i]);
  }
  for (let i = 0; i < reversedArray.length; i++) {
    s[i] = reversedArray[i];
  }
  return s;
};

console.log(reverseString(s));
/* 
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

const reverseWords = (s) => {
  s = s.trim();
  s = s.split(" ");

  let reversedArray = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversedArray.push(s[i]);
  }

  const indexToRemove = [];
  for (let i = 0; i < reversedArray.length; i++) {
    if (reversedArray[i] === "") {
      indexToRemove.push(i);
    }
  }

  for (let i = indexToRemove.length - 1; i >= 0; i--) {
    reversedArray.splice(indexToRemove[i], 1);
  }

  console.log(reversedArray.join(" "));
  return reversedArray.join(" ");
};

const s = "Alice does not even like bob";
reverseWords(s);
/*
Given a character array s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.
Your code must solve the problem in-place, i.e. without allocating extra space.
 
Example 1:
Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Example 2:
Input: s = ["a"]
Output: ["a"]
 
Constraints:
1 <= s.length <= 105
s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
There is at least one word in s.
s does not contain leading or trailing spaces.
All the words in s are guaranteed to be separated by a single space.
*/

const reverseWords = (s) => {
  const words = [];
  const reversedWords = [];
  let currentWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      currentWord = currentWord + s[i];
    } else {
      words.push(currentWord);
      currentWord = "";
    }

    if (i === s.length - 1) {
      words.push(currentWord);
      currentWord = "";
    }
  }

  if (words.length > 0) {
    for (let i = words.length - 1; i >= 0; i--) {
      reversedWords.push(words[i]);
    }
  }

  const result = reversedWords.join(" ").split("");

  for (let i = 0; i < result.length; i++) {
    s[i] = result[i];
  }

  console.log(s);

  return s;
};

const s = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
reverseWords(s);
/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:
Input: matrix = [[1]]
Output: [[1]]
Example 4:
Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
 
Constraints:
matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const rows = [];
  for (let m of matrix) {
    rows.push([]);
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      rows[j].push(row[j]);
    }
    matrix[i] = rows[i];
  }

  console.log(rows);
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);

/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 
Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let k = 0; k < row.length; k++) {
      if (row[k] === target) {
        return true;
      }
    }
  }

  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 13;
console.log(searchMatrix(matrix, target));
/*
Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 
Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] > target) {
      row--;
    } else if (matrix[row][col] < target) {
      col++;
    } else {
      // found it
      return true;
    }
  }
  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5;
console.log(searchMatrix(matrix, target));
/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1
 
Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
*/

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(search(nums, target));
/*
  Amazon Customer Reviews (example question)

  Amazon is building a way to help customers search reviews quicker by providing real-time suggestions to search
  terms when the customer starts typing. When given a minimum of two characters into the search field the system
  will suggest at most three keywords from the review word repository. As the customer continues to type in the reviews
  search bar the relevant keyword suggestions will update automatically.

  Write an algorith that will output a maximum of three keyword suggestions after each character is typed by the customer 
  in the search field.
  If there are more than three acceptable keywords, return the keywords that are first in alphabetical order.
  Only retun keyword suggestions after the customer has entered two characters.
  Keyword suggestions must start with the characters already typed Both the respository and the customerQuery should be
  compared in a case-insensitive way.

  Input 
  The input to the method/function consists of two arguments: repository, a list of unique strings representing the
  various keywords from the amazon review comment section;
  customerQuery, a string representing the full search query of the customer.

  Output
  Return a list of a list of strings in lower case, where each list represents the keyword suggestions made by the
  system as the customer types each character of the customerQuery. Assume the customer types characters in order
  without deleting or removing any characters. If an output is not possible, return an empty array([]).

  Example 

  Input: 
  repository = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
  customerQuery = 'mouse'

  output:
  ['mobile', 'moneypot', 'monitor']
  ['mouse', 'mousepad']
  ['mouse, 'mousepad']
  ['mouse, 'mousepad']

  Explanation 
  The chain of words that will generate in the search box will be mo, mou, mous, mouse
  and each line from output shows the suggestion of 'mo', 'mou','mous','mouse', respectively in each line.
  For the keyword suggestions made by the system that are generated for 'mo', the matches that will be generated are:
  ['mobile, 'mouse', 'moneypot','monitor','mousepad']
  Alphabetically, they will be reorderd to [mobile, moneypot, monitor, mouse, mousepad]
  Thus the keyword suggestions made by the system are [mobile, moneypot, monitor]

   * Complete the 'searchSuggestions' function below.
   *
   * The function is expected to return a 2D_STRING_ARRAY.
   * The function accepts following parameters:
   *  1. STRING_ARRAY repository
   *  2. STRING customerQuery
*/

function searchSuggestions(repository, customerQuery) {
  // Write your code here
  if (customerQuery.length < 2) {
    return;
  }

  let search = "";
  const matchedArray = [];

  for (let i = 0; i < customerQuery.length; i++) {
    search = search + customerQuery.charAt(i);
    const tempMatchedArray = [];
    if (search.length > 1) {
      repository.find((string) => {
        if (string.toLowerCase().startsWith(search.toLowerCase())) {
          tempMatchedArray.push(string.toLowerCase());
        }
      });
    }
    if (tempMatchedArray.length > 0) {
      matchedArray.push(tempMatchedArray.sort().slice(0, 3));
    }
  }

  return matchedArray;
}
/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
Follow up:
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 
Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 
Constraints:
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const indexToReplace = [];
  const rowToReplace = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        indexToReplace.push(j);
      }
    }
    if (row.includes(0)) {
      rowToReplace.push(i);
    }
  }

  for (let z = 0; z < rowToReplace.length; z++) {
    const row = matrix[rowToReplace[z]];
    for (let k = 0; k < row.length; k++) {
      row[k] = 0;
    }
  }

  for (let z = 0; z < indexToReplace.length; z++) {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];

      for (let j = 0; j < row.length; j++) {
        if (j === indexToReplace[z]) {
          row[j] = 0;
        }
      }
    }
  }
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
 
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:
Input: nums = [0]
Output: [0]
Example 4:
Input: nums = [1]
Output: [1]
 
Constraints:
n == nums.length
1 <= n <= 300
nums[i] is 0, 1, or 2.
 
Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let a = 0;
  let b = 0;
  let len = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = 2;
      nums[b++] = 1;
      nums[a++] = 0;
    } else if (nums[i] === 1) {
      nums[i] = 2;
      nums[b++] = 1;
    } else {
      nums[i] = 2;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
/*
Given an m x n matrix, return all elements of the matrix in spiral order.
 
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) {
    return [];
  }
  let result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  while (true) {
    // top
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;
    if (rowStart > rowEnd) {
      return result;
    }
    // right
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (colEnd < colStart) {
      return result;
    }
    // bottom
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;
    if (rowEnd < rowStart) {
      return result;
    }
    // left
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart]);
    }
    colStart++;
    if (colStart > colEnd) {
      return result;
    }
  }
  return result;
};

console.log(
  spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16],
  ])
);
console.log(spiralOrder([[7], [9], [6]]));
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
The algorithm for myAtoi(string s) is as follows:
Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:
Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

const s = "42";
const stringToInteger = (s) => {
  var i = 0;
  var sign = 1;
  var res = 0;
  var len = s.length;
  var INT_MAX = 2147483647;
  var INT_MIN = -INT_MAX - 1;

  while (s[i] === " ") i++;

  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  while (s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + (s[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }
  console.log(res * sign);
  return res * sign;
};

stringToInteger(s);
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/

var trap = function (height) {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    if (height[start] <= height[end]) {
      let current = height[start];
      while (height[++start] < current) {
        result += current - height[start];
      }
    } else {
      let current = height[end];
      while (height[--end] < current) {
        result += current - height[end];
      }
    }
  }
  return result;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
trap(height);
/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
const nums = [2, 7, 11, 15];
const target = 9;
const twoSums = (nums, target) => {
  const object = {};
  for (let i = 0; i < nums.length; i++) {
    if (object[nums[i]] >= 0) {
      return [object[nums[i]], i];
    }
    object[target - nums[i]] = i;
  }
  console.log(object);
  return object;
};

twoSums(nums, target);
/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/
const s = "A man, a plan, a canal: Panama";
const isPalindrome = (s) => {
  const re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  s = s.toLowerCase().replace(re, "");
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false
Example 4:
Input: s = "([)]"
Output: false
Example 5:
Input: s = "{[]}"
Output: true
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValidParantheses = (s) => {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

const s = "()[]{}";
console.log(isValidParantheses(s));
/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example 1:
Input: root = [2,1,3]
Output: true
Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 
Constraints:
The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validate(root, null, null);
};

var validate = function (root, low, high) {
  if (root === null) {
    return true;
  }

  if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
    return false;
  }

  return (
    validate(root.left, low, root.val) && validate(root.right, root.val, high)
  );
};

const root = [5, 1, 4, null, null, 3, 6];
console.log(isValidBST(root));

// Inorder Traversal
var isValidate2 = function (root) {
  let prev = null;
  validate2(root, prev);
};

var validate2 = function (root, prev) {
  if (root === null) {
    return true;
  }

  if (!validate2(root.left)) {
    return false;
  }

  if (prev != null && root.val <= prev) {
    return false;
  }

  prev = root.val;
  return validate2(root.right);

  // Time O(n)
  // Space O(n)
};

/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 
Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 
Follow up: Could you use search pruning to make your solution faster with a larger board?
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Helper Func
const isOutOfBound = (board, row, col) =>
  row < 0 || row >= board.length || col < 0 || col >= board[0].length;

const checkNeighbors = (board, word, row, col) => {
  // Check exit conditions
  if (!word.length) return true;
  if (isOutOfBound(board, row, col) || board[row][col] !== word[0])
    return false;

  // Save some stuff
  const curChar = board[row][col];
  const newWord = word.substr(1);

  board[row][col] = 0; // Disable the current character

  // Check if neighbors are fruitful
  const results =
    checkNeighbors(board, newWord, row + 1, col) ||
    checkNeighbors(board, newWord, row - 1, col) ||
    checkNeighbors(board, newWord, row, col + 1) ||
    checkNeighbors(board, newWord, row, col - 1);

  // Enable current character
  board[row][col] = curChar;

  return results;
};

var exist = function (board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (checkNeighbors(board, word, row, col)) return true;
    }
  }
  return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";
console.log(exist(board, word));
```
