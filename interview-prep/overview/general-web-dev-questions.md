# General Web Dev Questions



## ASYMPTOTIC NOTATION <a href="a-idasymptotic-notationaasymptotic-notation" id="a-idasymptotic-notationaasymptotic-notation"></a>

#### Definition: <a href="span-stylecolorred-definition" id="span-stylecolorred-definition"></a>

Asymptotic Notation is the hardware independent notation used to tell the time and space complexity of an algorithm. Meaning it's a standardized way of measuring how much memory an algorithm uses or how long it runs for given an input.

#### Complexities <a href="span-stylecolorred-complexities" id="span-stylecolorred-complexities"></a>

The following are the Asymptotic rates of growth from best to worst:

* constant growth - `O(1)` Runtime is constant and does not grow with `n`
* logarithmic growth – `O(log n)` Runtime grows logarithmically in proportion to `n`
* linear growth – `O(n)` Runtime grows directly in proportion to `n`
* superlinear growth – `O(n log n)` Runtime grows in proportion _and_ logarithmically to `n`
* polynomial growth – `O(n^c)` Runtime grows quicker than previous all based on `n`
* exponential growth – `O(c^n)` Runtime grows even faster than polynomial growth based on `n`
* factorial growth – `O(n!)` Runtime grows the fastest and becomes quickly unusable for even

small values of `n`

[(source: Soumyadeep Debnath, _Analysis of Algorithms | Big-O analysis_)](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)\
Visualized below; the x-axis representing input size and the y-axis representing complexity:

![#](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/400px-Comparison\_computational\_complexity.svg.png)

[(source: Wikipedia, _Computational Complexity of Mathematical Operations_)](https://en.wikipedia.org/wiki/Computational\_complexity\_of\_mathematical\_operations)

#### Big-O notation <a href="span-stylecolorred-big-o-notation" id="span-stylecolorred-big-o-notation"></a>

Big-O refers to the upper bound of time or space complexity of an algorithm, meaning it worst case runtime scenario. An easy way to think of it is that runtime could be better than Big-O but it will never be worse.

#### Big-Ω (Big-Omega) notation <a href="span-stylecolorred-big-cf-89-big-omega-notation" id="span-stylecolorred-big-cf-89-big-omega-notation"></a>

Big-Omega refers to the lower bound of time or space complexity of an algorithm, meaning it is the best runtime scenario. Or runtime could worse than Big-Omega, but it will never be better.

#### Big-θ (Big-Theta) notation <a href="span-stylecolorred-big-ce-b8-big-theta-notation" id="span-stylecolorred-big-ce-b8-big-theta-notation"></a>

Big-Theta refers to the tight bound of time or space complexity of an algorithm. Another way to think of it is the intersection of Big-O and Big-Omega, or more simply runtime is guaranteed to be a given complexity, such as `n log n` .

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know" id="span-stylecolorred-what-you-need-to-know"></a>

* Big-O and Big-Theta are the most common and helpful notations
* Big-O does _not_ mean Worst Case Scenario, Big-Theta does _not_ mean average case, and Big-Omega does _not_ mean Best Case Scenario. They only connote the algorithm's performance for a particular scenario, and all three can be used for any scenario.
* Worst Case means given an unideal input, Average Case means given a typical input, Best case means a ideal input. Ex. Worst case means given an input the algorithm performs particularly bad, or best case an already sorted array for a sorting algorithm.
* Best Case and Big Omega are generally not helpful since Best Cases are rare in the real world and lower bound might be very different than an upper bound.
* Big-O isn't everything. On paper merge sort is faster than quick sort, but in practice quick sort is superior.

## DATA STRUCTURES <a href="data-structures" id="data-structures"></a>

#### Array <a href="span-stylecolorred-a-idarraya-array" id="span-stylecolorred-a-idarraya-array"></a>

#### Definition <a href="span-stylecolorred-definition-1" id="span-stylecolorred-definition-1"></a>

* Stores data elements based on an sequential, most commonly 0 based, index.
* Based on [tuples](http://en.wikipedia.org/wiki/Tuple) from set theory.
* They are one of the oldest, most commonly used data structures.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-1" id="span-stylecolorred-what-you-need-to-know-1"></a>

* Optimal for indexing; bad at searching, inserting, and deleting (except at the end).
* **Linear arrays**, or one dimensional arrays, are the most basic.
  * Are static in size, meaning that they are declared with a fixed size.
* **Dynamic arrays** are like one dimensional arrays, but have reserved space for additional elements.
  * If a dynamic array is full, it copies its contents to a larger array.
* **Multi dimensional arrays** nested arrays that allow for multiple dimensions such as an array of arrays providing a 2 dimensional spacial representation via x, y coordinates.

#### Time Complexity <a href="span-stylecolorred-time-complexity" id="span-stylecolorred-time-complexity"></a>

* Indexing: Linear array: `O(1)`, Dynamic array: `O(1)`
* Search: Linear array: `O(n)`, Dynamic array: `O(n)`
* Optimized Search: Linear array: `O(log n)`, Dynamic array: `O(log n)`
* Insertion: Linear array: n/a, Dynamic array: `O(n)`

#### Linked List <a href="span-stylecolorred-a-idlinked-lista-linked-list" id="span-stylecolorred-a-idlinked-lista-linked-list"></a>

#### Definition <a href="span-stylecolorred-definition-2" id="span-stylecolorred-definition-2"></a>

* Stores data with **nodes** that point to other nodes.
  * Nodes, at its most basic it has one datum and one reference (another node).
  * A linked list _chains_ nodes together by pointing one node's reference towards another node.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-2" id="span-stylecolorred-what-you-need-to-know-2"></a>

* Designed to optimize insertion and deletion, slow at indexing and searching.
* **Doubly linked list** has nodes that also reference the previous node.
* **Circularly linked list** is simple linked list whose **tail**, the last node, references the **head**, the first node.
* **Stack**, commonly implemented with linked lists but can be made from arrays too.
  * Stacks are **last in, first out** (LIFO) data structures.
  * Made with a linked list by having the head be the only place for insertion and removal.
* **Queues**, too can be implemented with a linked list or an array.
  * Queues are a **first in, first out** (FIFO) data structure.
  * Made with a doubly linked list that only removes from head and adds to tail.

#### Time Complexity <a href="span-stylecolorred-time-complexity-1" id="span-stylecolorred-time-complexity-1"></a>

* Indexing: Linked Lists: `O(n)`
* Search: Linked Lists: `O(n)`
* Optimized Search: Linked Lists: `O(n)`
* Append: Linked Lists: `O(1)`
* Prepend: Linked Lists: `O(1)`
* Insertion: Linked Lists: `O(n)`

#### Hash Table or Hash Map <a href="span-stylecolorred-a-idhasha-hash-table-or-hash-map" id="span-stylecolorred-a-idhasha-hash-table-or-hash-map"></a>

#### Definition <a href="span-stylecolorred-definition-3" id="span-stylecolorred-definition-3"></a>

* Stores data with key value pairs.
* **Hash functions** accept a key and return an output unique only to that specific key.
  * This is known as **hashing**, which is the concept that an input and an output have a one-to-one correspondence to map information.
  * Hash functions return a unique address in memory for that data.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-3" id="span-stylecolorred-what-you-need-to-know-3"></a>

* Designed to optimize searching, insertion, and deletion.
* **Hash collisions** are when a hash function returns the same output for two distinct inputs.
  * All hash functions have this problem.
  * This is often accommodated for by having the hash tables be very large.
* Hashes are important for associative arrays and database indexing.

#### Time Complexity <a href="span-stylecolorred-time-complexity-2" id="span-stylecolorred-time-complexity-2"></a>

* Indexing: Hash Tables: `O(1)`
* Search: Hash Tables: `O(1)`
* Insertion: Hash Tables: `O(1)`

#### Binary Tree <a href="span-stylecolorred-a-idbinary-treea-binary-tree" id="span-stylecolorred-a-idbinary-treea-binary-tree"></a>

#### Definition <a href="span-stylecolorred-definition-4" id="span-stylecolorred-definition-4"></a>

* Is a tree like data structure where every node has at most two children.
  * There is one left and right child node.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-4" id="span-stylecolorred-what-you-need-to-know-4"></a>

* Designed to optimize searching and sorting.
* A **degenerate tree** is an unbalanced tree, which if entirely one-sided, is essentially a linked list.
* They are comparably simple to implement than other data structures.
* Used to make **binary search trees**.
  * A binary tree that uses comparable keys to assign which direction a child is.
  * Left child has a key smaller than its parent node.
  * Right child has a key greater than its parent node.
  * There can be no duplicate node.
  * Because of the above it is more likely to be used as a data structure than a binary tree.

#### Time Complexity <a href="span-stylecolorred-time-complexity-3" id="span-stylecolorred-time-complexity-3"></a>

* Indexing: Binary Search Tree: `O(log n)`
* Search: Binary Search Tree: `O(log n)`
* Insertion: Binary Search Tree: `O(log n)`

## ALGORITHMS <a href="algorithms" id="algorithms"></a>

### Algorithm Basics <a href="algorithm-basics" id="algorithm-basics"></a>

#### Recursive Algorithms <a href="span-stylecolorred-recursive-algorithms" id="span-stylecolorred-recursive-algorithms"></a>

#### Definition <a href="span-stylecolorred-definition-5" id="span-stylecolorred-definition-5"></a>

* An algorithm that calls itself in its definition.
  * **Recursive case** a conditional statement that is used to trigger the recursion.
  * **Base case** a conditional statement that is used to break the recursion.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-5" id="span-stylecolorred-what-you-need-to-know-5"></a>

* **Stack level too deep** and **stack overflow**.
  * If you've seen either of these from a recursive algorithm, you messed up.
  * It means that your base case was never triggered because it was faulty or the problem was so massive you ran out of alloted memory.
  * Knowing whether or not you will reach a base case is integral to correctly using recursion.
  * Often used in Depth First Search

#### Iterative Algorithms <a href="span-stylecolorred-iterative-algorithms" id="span-stylecolorred-iterative-algorithms"></a>

#### Definition <a href="span-stylecolorred-definition-6" id="span-stylecolorred-definition-6"></a>

* An algorithm that is called repeatedly but for a finite number of times, each time being a single iteration.
  * Often used to move incrementally through a data set.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-6" id="span-stylecolorred-what-you-need-to-know-6"></a>

* Generally you will see iteration as loops, for, while, and until statements.
* Think of iteration as moving one at a time through a set.
* Often used to move through an array.

#### Recursion Vs. Iteration <a href="span-stylecolorred-recursion-vs-iteration" id="span-stylecolorred-recursion-vs-iteration"></a>

* The differences between recursion and iteration can be confusing to distinguish since both can be used to implement the other. But know that,
  * Recursion is, usually, more expressive and easier to implement.
  * Iteration uses less memory.
* **Functional languages** tend to use recursion. (i.e. Haskell)
* **Imperative languages** tend to use iteration. (i.e. Ruby)
* Check out this [Stack Overflow post](http://stackoverflow.com/questions/19794739/what-is-the-difference-between-iteration-and-recursion) for more info.

#### Pseudo Code of Moving Through an Array <a href="span-stylecolorred-pseudo-code-of-moving-through-an-array" id="span-stylecolorred-pseudo-code-of-moving-through-an-array"></a>

```
| Recursion                    | Iteration                     |
| ---------------------------- | ----------------------------- |
| recursive method (array, n)  | iterative method (array)      |
| if array[n] is not nil       | for n from 0 to size of array |
| print array[n]               | print(array[n])               |
| recursive method(array, n+1) |
| else                         |
| exit loop                    |
```

#### Greedy Algorithms <a href="span-stylecolorred-greedy-algorithms" id="span-stylecolorred-greedy-algorithms"></a>

#### Definition <a href="span-stylecolorred-definition-7" id="span-stylecolorred-definition-7"></a>

* An algorithm that, while executing, selects only the information that meets a certain criteria.
* The general five components, taken from [Wikipedia](http://en.wikipedia.org/wiki/Greedy\_algorithm#Specifics):
  * A candidate set, from which a solution is created.
  * A selection function, which chooses the best candidate to be added to the solution.
  * A feasibility function, that is used to determine if a candidate can be used to contribute to a solution.
  * An objective function, which assigns a value to a solution, or a partial solution.
  * A solution function, which will indicate when we have discovered a complete solution.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-7" id="span-stylecolorred-what-you-need-to-know-7"></a>

* Used to find the expedient, though non-optimal, solution for a given problem.
* Generally used on sets of data where only a small proportion of the information evaluated meets the desired result.
* Often a greedy algorithm can help reduce the Big O of an algorithm.

#### Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array. <a href="span-stylecolorred-pseudo-code-of-a-greedy-algorithm-to-find-largest-difference-of-any-two-numbers-i" id="span-stylecolorred-pseudo-code-of-a-greedy-algorithm-to-find-largest-difference-of-any-two-numbers-i"></a>

```
greedy algorithm (array)
  let largest difference = 0
  let new difference = find next difference (array[n], array[n+1])
  largest difference = new difference if new difference is > largest difference
  repeat above two steps until all differences have been found
  return largest difference
```

This algorithm never needed to compare all the differences to one another, saving it an entire iteration.

### Search Algorithms <a href="search-algorithms" id="search-algorithms"></a>

#### Breadth First Search <a href="span-stylecolorred-a-idbreadth-first-searchabreadth-first-search" id="span-stylecolorred-a-idbreadth-first-searchabreadth-first-search"></a>

#### Definition <a href="span-stylecolorred-definition-8" id="span-stylecolorred-definition-8"></a>

* An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.
  * It finds every node on the same level, most often moving left to right.
  * While doing this it tracks the children nodes of the nodes on the current level.
  * When finished examining a level it moves to the left most node on the next level.
  * The bottom-right most node is evaluated last (the node that is deepest and is farthest right of it's level).

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-8" id="span-stylecolorred-what-you-need-to-know-8"></a>

* Optimal for searching a tree that is wider than it is deep.
* Uses a queue to store information about the tree while it traverses a tree.
  * Because it uses a queue it is more memory intensive than **depth first search**.
  * The queue uses more memory because it needs to stores pointers

#### Time Complexity <a href="span-stylecolorred-time-complexity-4" id="span-stylecolorred-time-complexity-4"></a>

* Search: Breadth First Search: O(V + E)
* E is number of edges
* V is number of vertices

#### Depth First Search <a href="span-stylecolorred-a-iddepth-first-searchadepth-first-search" id="span-stylecolorred-a-iddepth-first-searchadepth-first-search"></a>

#### Definition <a href="span-stylecolorred-definition-9" id="span-stylecolorred-definition-9"></a>

* An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.
  * It traverses left down a tree until it cannot go further.
  * Once it reaches the end of a branch it traverses back up trying the right child of nodes on that branch, and if possible left from the right children.
  * When finished examining a branch it moves to the node right of the root then tries to go left on all it's children until it reaches the bottom.
  * The right most node is evaluated last (the node that is right of all it's ancestors).

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-9" id="span-stylecolorred-what-you-need-to-know-9"></a>

* Optimal for searching a tree that is deeper than it is wide.
* Uses a stack to push nodes onto.
  * Because a stack is LIFO it does not need to keep track of the nodes pointers and is therefore less memory intensive than breadth first search.
  * Once it cannot go further left it begins evaluating the stack.

#### Time Complexity <a href="span-stylecolorred-time-complexity-5" id="span-stylecolorred-time-complexity-5"></a>

* Search: Depth First Search: O(|E| + |V|)
* E is number of edges
* V is number of vertices

#### Breadth First Search Vs. Depth First Search <a href="span-stylecolorred-breadth-first-search-vs-depth-first-search" id="span-stylecolorred-breadth-first-search-vs-depth-first-search"></a>

* The simple answer to this question is that it depends on the size and shape of the tree.
  * For wide, shallow trees use Breadth First Search
  * For deep, narrow trees use Depth First Search

#### Nuances <a href="span-stylecolorred-nuances" id="span-stylecolorred-nuances"></a>

* Because BFS uses queues to store information about the nodes and its children, it could use more memory than is available on your computer. (But you probably won't have to worry about this.)
* If using a DFS on a tree that is very deep you might go unnecessarily deep in the search. See [xkcd](http://xkcd.com/761/) for more information.
* Breadth First Search tends to be a looping algorithm.
* Depth First Search tends to be a recursive algorithm.

### Sorting Algorithms <a href="sorting-algorithms" id="sorting-algorithms"></a>

#### Selection Sort <a href="span-stylecolorred-a-idselection-sortaselection-sort" id="span-stylecolorred-a-idselection-sortaselection-sort"></a>

#### Definition <a href="span-stylecolorred-definition-10" id="span-stylecolorred-definition-10"></a>

* A comparison based sorting algorithm.
  * Starts with the cursor on the left, iterating left to right
  * Compares the left side to the right, looking for the smallest known item
    * If the left is smaller than the item to the right it continues iterating
    * If the left is bigger than the item to the right, the item on the right becomes the known smallest number
    * Once it has checked all items, it moves the known smallest to the cursor and advances the cursor to the right and starts over
  * As the algorithm processes the data set, it builds a fully sorted left side of the data until the entire data set is sorted
* Changes the array in place.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-10" id="span-stylecolorred-what-you-need-to-know-10"></a>

* Inefficient for large data sets.
* Very simple to implement.

#### Time Complexity <a href="span-stylecolorred-time-complexity-6" id="span-stylecolorred-time-complexity-6"></a>

* Best Case Sort: Merge Sort: `O(n^2)`
* Average Case Sort: Merge Sort: `O(n^2)`
* Worst Case Sort: Merge Sort: `O(n^2)`

#### Space Complexity <a href="span-stylecolorred-space-complexity" id="span-stylecolorred-space-complexity"></a>

* Worst Case: `O(1)`

#### Visualization <a href="span-stylecolorred-visualization" id="span-stylecolorred-visualization"></a>

![#](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/Selection-Sort-Animation.gif)

[(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Selection\_sort)

#### Insertion Sort <a href="span-stylecolorred-a-idinsertion-sortainsertion-sort" id="span-stylecolorred-a-idinsertion-sortainsertion-sort"></a>

#### Definition <a href="span-stylecolorred-definition-11" id="span-stylecolorred-definition-11"></a>

* A comparison based sorting algorithm.
  * Iterates left to right comparing the current cursor to the previous item.
  * If the cursor is smaller than the item on the left it swaps positions and the cursor compares itself again to the left hand side until it is put in its sorted position.
  * As the algorithm processes the data set, the left side becomes increasingly sorted until it is fully sorted.
* Changes the array in place.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-11" id="span-stylecolorred-what-you-need-to-know-11"></a>

* Inefficient for large data sets, but can be faster for than other algorithms for small ones.
* Although it has an `O(n^2)`, in practice it slightly less since its comparison scheme only requires checking place if its smaller than its neighbor.

#### Time Complexity <a href="span-stylecolorred-time-complexity-7" id="span-stylecolorred-time-complexity-7"></a>

* Best Case: `O(n)`
* Average Case: `O(n^2)`
* Worst Case: `O(n^2)`

#### Space Complexity <a href="span-stylecolorred-space-complexity-1" id="span-stylecolorred-space-complexity-1"></a>

* Worst Case: `O(n)`

#### Visualization <a href="span-stylecolorred-visualization-1" id="span-stylecolorred-visualization-1"></a>

![#](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/Insertion-sort-example-300px.gif)

[(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Insertion\_sort)

#### Merge Sort <a href="span-stylecolorred-a-idmerge-sortamerge-sort" id="span-stylecolorred-a-idmerge-sortamerge-sort"></a>

#### Definition <a href="span-stylecolorred-definition-12" id="span-stylecolorred-definition-12"></a>

* A divide and conquer algorithm.
  * Recursively divides entire array by half into subsets until the subset is one, the base case.
  * Once the base case is reached results are returned and sorted ascending left to right.
  * Recursive calls are returned and the sorts double in size until the entire array is sorted.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-12" id="span-stylecolorred-what-you-need-to-know-12"></a>

* This is one of the fundamental sorting algorithms.
* Know that it divides all the data into as small possible sets then compares them.

#### Time Complexity <a href="span-stylecolorred-time-complexity-8" id="span-stylecolorred-time-complexity-8"></a>

* Worst Case: `O(n log n)`
* Average Case: `O(n log n)`
* Best Case: `O(n)`

#### Space Complexity <a href="span-stylecolorred-space-complexity-2" id="span-stylecolorred-space-complexity-2"></a>

* Worst Case: `O(1)`

#### Visualization <a href="span-stylecolorred-visualization-2" id="span-stylecolorred-visualization-2"></a>

![#](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/400px-Merge\_sort\_algorithm\_diagram.svg.png)

[(source: Wikipedia, _Merge Sort_)](https://en.wikipedia.org/wiki/Merge\_sort)

#### Quicksort <a href="span-stylecolorred-a-idquick-sortaquicksort" id="span-stylecolorred-a-idquick-sortaquicksort"></a>

#### Definition <a href="span-stylecolorred-definition-13" id="span-stylecolorred-definition-13"></a>

* A divide and conquer algorithm
  * Partitions entire data set in half by selecting a random pivot element and putting all smaller elements to the left of the element and larger ones to the right.
  * It repeats this process on the left side until it is comparing only two elements at which point the left side is sorted.
  * When the left side is finished sorting it performs the same operation on the right side.
* Computer architecture favors the quicksort process.
* Changes the array in place.

#### What you need to know <a href="span-stylecolorred-what-you-need-to-know-13" id="span-stylecolorred-what-you-need-to-know-13"></a>

* While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice than many other sorting algorithms, such as merge sort.

#### Time Complexity <a href="span-stylecolorred-time-complexity-9" id="span-stylecolorred-time-complexity-9"></a>

* Worst Case: `O(n^2)`
* Average Case: `O(n log n)`
* Best Case: `O(n log n)`

#### Space Complexity <a href="span-stylecolorred-space-complexity-3" id="span-stylecolorred-space-complexity-3"></a>

* Worst Case: `O(log n)`

#### Visualization <a href="span-stylecolorred-visualization-3" id="span-stylecolorred-visualization-3"></a>

![#](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/Sorting\_quicksort\_anim.gif)

[(source: Wikipedia, _Quicksort_)](https://en.wikipedia.org/wiki/Quicksort)

#### Merge Sort Vs. Quicksort <a href="span-stylecolorred-merge-sort-vs-quicksort" id="span-stylecolorred-merge-sort-vs-quicksort"></a>

* Quicksort is likely faster in practice, but merge sort is faster on paper.
* Merge Sort divides the set into the smallest possible groups immediately then reconstructs the incrementally as it sorts the groupings.
* Quicksort continually partitions the data set by a pivot, until the set is recursively sorted.

### Additional Resources <a href="additional-resources" id="additional-resources"></a>

[Khan Academy's Algorithm Course](https://www.khanacademy.org/computing/computer-science/algorithms)

#### What is ARIA and when should you use it? <a href="span-stylecolorred-what-is-aria-and-when-should-you-use-it" id="span-stylecolorred-what-is-aria-and-when-should-you-use-it"></a>

#### Answer <a href="span-stylecolorred-answer" id="span-stylecolorred-answer"></a>

ARIA stands for "Accessible Rich Internet Applications", and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component's role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA's semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT.\
An example using ARIA:

```
<div 
  role="combobox"
  aria-expanded="false"
  aria-owns="ex1-grid"
  aria-haspopup="grid"
  id="ex1-combobox">
  ...
</div>
```

Credit: W3C's [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)

#### Don't forget: <a href="span-stylecolorred-dont-forget" id="span-stylecolorred-dont-forget"></a>

* Accessible Rich Internet Applications
* Benefits people who use assistive technologies (AT)
* Provides role, name, and state
* Semantic HTML coupled with JavaScript

#### Additional links <a href="span-stylecolorred-additional-links" id="span-stylecolorred-additional-links"></a>

* [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
* [WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)
* [ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)

#### What is the minimum recommended ratio of contrast between foreground text and background to comply with WCAG? Why does this matter? <a href="span-stylecolorred-what-is-the-minimum-recommended-ratio-of-contrast-between-foreground-text-and-bac" id="span-stylecolorred-what-is-the-minimum-recommended-ratio-of-contrast-between-foreground-text-and-bac"></a>

#### Answer <a href="span-stylecolorred-answer-1" id="span-stylecolorred-answer-1"></a>

4.5:1 is the calculated contrast ratio between foreground text and background that is recommended by the Web Content Accessibiity Guidelines (WCAG) success criteria (SC) 1.4.3: Contrast (Minimum). This SC was written by the World Wide Web Consortium (W3C) to ensure that people with low vision or color deficiencies are able to read (perceive) important content on a web page. It goes beyond color choices to ensure text stands out on the background it's placed on.

#### Don't forget: <a href="span-stylecolorred-dont-forget-1" id="span-stylecolorred-dont-forget-1"></a>

* At least 4.5:1 contrast ratio between foreground text and background
* Benefits people with low vision or color deficiencies

#### Additional links <a href="span-stylecolorred-additional-links-1" id="span-stylecolorred-additional-links-1"></a>

* [Understanding SC 1.4.3](https://www.alaskawebdev.com/contact)
* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [Contrast Ratio checker](https://contrast-ratio.com/#)

#### What are some of the tools available to test the accessibility of a website or web application? <a href="span-stylecolorred-what-are-some-of-the-tools-available-to-test-the-accessibility-of-a-website-or-we" id="span-stylecolorred-what-are-some-of-the-tools-available-to-test-the-accessibility-of-a-website-or-we"></a>

#### Answer <a href="span-stylecolorred-answer-2" id="span-stylecolorred-answer-2"></a>

There are multiple tools that can help you to find for accessibility issues in your website or application.\
Check for issues in your website:

* Lighthouse from Google, it provides an option for accessibility testing, it will check for the compliance of different accessibility standards and give you an score with details on the different issues
* Axe Coconut from DequeLabs, it is a Chrome extension that adds a tab in the Developer tools, it will check for accessibility issues and it will classify them by severity and suggest possible solutions

Check for issues in your code: \* Jest Axe, you can add unit tests for accessibility \* React Axe, test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console. \* eslint-plugin-jsx-a11y, pairing this plugin with an editor lint plugin, you can bake accessibility standards into your application in real-time.\
Check for individual issues: \* Color Contrast checkers \* Use a screen reader \* Use only keyboard to navigate your site

#### Don't forget: <a href="span-stylecolorred-dont-forget-2" id="span-stylecolorred-dont-forget-2"></a>

* None of the tools will replace manual testing
* Mention of different ways to test accessibility

#### Additional links <a href="span-stylecolorred-additional-links-2" id="span-stylecolorred-additional-links-2"></a>

* [Jest Axe](https://github.com/nickcolley/jest-axe)
* [eslint-plugin-jsx-a11y](https://www.w3.org/TR/wai-aria/)
* [React axe](https://github.com/dequelabs/react-axe)
* [Accessibility Checklist](http://romeo.elsevier.com/accessibility\_checklist/)

#### What is the Accessibility Tree? <a href="span-stylecolorred-what-is-the-accessibility-tree" id="span-stylecolorred-what-is-the-accessibility-tree"></a>

#### Answer <a href="span-stylecolorred-answer-3" id="span-stylecolorred-answer-3"></a>

The Accessibility Tree is a structure produced by the browser's Accessibility APIs which provides accessibility information to assistive technologies such as screen readers. It runs parallel to the DOM and is similar to the DOM API, but with much fewer nodes, because a lot of that information is only useful for visual presentation. By writing semantic HTML we can take advantage of this process in creating an accessible experience for our users.

#### Don't forget: <a href="span-stylecolorred-dont-forget-3" id="span-stylecolorred-dont-forget-3"></a>

* Tree structure exposing information to assistive technologies
* Runs parallel to the DOM
* Semantic HTML is essential in creating accessible experiences

#### Additional links <a href="span-stylecolorred-additional-links-3" id="span-stylecolorred-additional-links-3"></a>

* [Accessibility APIs](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/)

#### What is the purpose of the `alt` attribute on images? <a href="span-stylecolorred-what-is-the-purpose-of-the-alt-attribute-on-images" id="span-stylecolorred-what-is-the-purpose-of-the-alt-attribute-on-images"></a>

#### Answer <a href="span-stylecolorred-answer-4" id="span-stylecolorred-answer-4"></a>

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty.

#### Don't forget: <a href="span-stylecolorred-dont-forget-4" id="span-stylecolorred-dont-forget-4"></a>

* Decorative images should have an empty `alt` attribute.
* Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).
* Put the `.` at the end of `alt` tag to improve accessibility.

#### Additional links <a href="span-stylecolorred-additional-links-4" id="span-stylecolorred-additional-links-4"></a>

* [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

#### What are `defer` and `async` attributes on a `<script>` tag? <a href="span-stylecolorred-what-are-defer-and-async-attributes-on-a-script-tag" id="span-stylecolorred-what-are-defer-and-async-attributes-on-a-script-tag"></a>

#### Answer <a href="span-stylecolorred-answer-5" id="span-stylecolorred-answer-5"></a>

If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order they are encountered.\
The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.\
The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.\
Note: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).

```
<script src="myscript.js"></script>
<script src="myscript.js" defer></script>
<script src="myscript.js" async></script>
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-5" id="span-stylecolorred-dont-forget-5"></a>

* Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.
* If the scripts rely on each other, use `defer`.
* If the script is independent, use `async`.
* Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.

#### Additional links <a href="span-stylecolorred-additional-links-5" id="span-stylecolorred-additional-links-5"></a>

* [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

#### What is an `async` function? <a href="span-stylecolorred-what-is-an-async-function" id="span-stylecolorred-what-is-an-async-function"></a>

```
async function foo() {
  ...
}
```

#### Answer <a href="span-stylecolorred-answer-6" id="span-stylecolorred-answer-6"></a>

An `async` function is a function that allows you to pause the function's execution while it waits for ( `await` s) a promise to resolve. It's an abstraction on top of the Promise API that makes asynchronous operations _look_ like they're synchronous.\
`async` functions automatically return a Promise object. Whatever you `return` from the `async` function will be the promise's _resolution_. If instead you `throw` from the body of an `async` function, that will be how your async function _rejects_ the promise it returns.\
Most importantly, `async` functions are able to use the `await` keyword in their function body, which **pauses the function** until the operation after the `await` completes, and allows it to return that operation's result to a variable synchronously.

```
// Normal promises in regular function:
function foo() {
    promiseCall()
        .then(result => {
            // do something with the result
        })
}
// async functions
async function foo() {
    const result = await promiseCall()
    // do something with the result
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-6" id="span-stylecolorred-dont-forget-6"></a>

* `async` functions are just syntactic sugar on top of Promises.
* They make asynchronous operations look like synchronous operations in your function.
* They implicitly return a promise which resolves to whatever your `async` function returns, and reject to whatever your `async` function `throw`s.

#### Additional links <a href="span-stylecolorred-additional-links-6" id="span-stylecolorred-additional-links-6"></a>

* [MDN Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async\_function)
* [MDN Docs - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

#### Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe. <a href="span-stylecolorred-create-a-function-batches-that-returns-the-maximum-number-of-whole-batches-that-c" id="span-stylecolorred-create-a-function-batches-that-returns-the-maximum-number-of-whole-batches-that-c"></a>

```
/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.
`batches(recipe, available)`
*/
// 0 batches can be made
batches({
    milk: 100,
    butter: 50,
    flour: 5
}, {
    milk: 132,
    butter: 48,
    flour: 51
})
batches({
    milk: 100,
    flour: 4,
    sugar: 10,
    butter: 5
}, {
    milk: 1288,
    flour: 9,
    sugar: 95
})
// 1 batch can be made
batches({
    milk: 100,
    butter: 50,
    cheese: 10
}, {
    milk: 198,
    butter: 52,
    cheese: 10
})
// 2 batches can be made
batches({
    milk: 2,
    sugar: 40,
    butter: 20
}, {
    milk: 5,
    sugar: 120,
    butter: 500
})
```

#### Answer <a href="span-stylecolorred-answer-7" id="span-stylecolorred-answer-7"></a>

We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch.\
Use `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN` , so the logical OR operator can be used to fallback to `0` in this case.\
Use the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.

```
const batches = (recipe, available) =>
    Math.floor(
        Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
    )
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-7" id="span-stylecolorred-dont-forget-7"></a>

#### Additional links <a href="span-stylecolorred-additional-links-7" id="span-stylecolorred-additional-links-7"></a>

#### What is CSS BEM? <a href="span-stylecolorred-what-is-css-bem" id="span-stylecolorred-what-is-css-bem"></a>

#### Answer <a href="span-stylecolorred-answer-8" id="span-stylecolorred-answer-8"></a>

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```
/* block component */
.block {
}
/* element */
.block__element {
}
/* modifier */
.block__element--modifier {
}
```

Here is an example with the class names on markup:

```
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.\
Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

```
<a href="/" class="navbar__link is-active"></a>
```

These must be chained to the Element and never alone however, or there will be scope issues.

```
.navbar__link.is-active {
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-8" id="span-stylecolorred-dont-forget-8"></a>

* Alternative solutions to scope issues like CSS-in-JS

#### Additional links <a href="span-stylecolorred-additional-links-8" id="span-stylecolorred-additional-links-8"></a>

* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

#### What is Big O Notation? <a href="span-stylecolorred-what-is-big-o-notation" id="span-stylecolorred-what-is-big-o-notation"></a>

#### Answer <a href="span-stylecolorred-answer-9" id="span-stylecolorred-answer-9"></a>

Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.\
Algorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.\
In these examples, the base time is 1 element = `1ms` .

#### O(1) <a href="span-stylecolorred-o1" id="span-stylecolorred-o1"></a>

```
arr[arr.length - 1]
```

* 1000 elements = `1ms`

Constant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.

#### O(N) <a href="span-stylecolorred-on" id="span-stylecolorred-on"></a>

```
arr.filter(fn)
```

* 1000 elements = `1000ms`

Linear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.

#### O(\[1, N]) <a href="span-stylecolorred-o1-n" id="span-stylecolorred-o1-n"></a>

```
arr.some(fn)
```

* 1000 elements = `1ms <= x <= 1000ms`

The execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).

#### O(NlogN) <a href="span-stylecolorred-onlogn" id="span-stylecolorred-onlogn"></a>

```
arr.sort(fn)
```

* 1000 elements \~= `10000ms`

Browsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.

#### O(N^2) <a href="span-stylecolorred-on2" id="span-stylecolorred-on2"></a>

```
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        // ...
    }
}
```

* 1000 elements = `1000000ms`

The execution time rises quadratically with the number of elements. Usually the result of nesting loops.

#### O(N!) <a href="span-stylecolorred-on-1" id="span-stylecolorred-on-1"></a>

```
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
    return arr.reduce(
        (acc, item, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                item,
                ...val
            ])
        ),
        []
    )
}
```

* 1000 elements = `Infinity` (practically) ms

The execution time rises extremely fast with even just 1 addition to the array.

#### Don't forget: <a href="span-stylecolorred-dont-forget-9" id="span-stylecolorred-dont-forget-9"></a>

* Be wary of nesting loops as execution time increases exponentially.

#### Additional links <a href="span-stylecolorred-additional-links-9" id="span-stylecolorred-additional-links-9"></a>

* [Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)

#### Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind` . <a href="span-stylecolorred-create-a-standalone-function-bind-that-is-functionally-equivalent-to-the-method-f" id="span-stylecolorred-create-a-standalone-function-bind-that-is-functionally-equivalent-to-the-method-f"></a>

```
function example() {
    console.log(this)
}
const boundExample = bind(example, {
    a: true
})
boundExample.call({
    b: true
}) // logs { a: true }
```

#### Answer <a href="span-stylecolorred-answer-10" id="span-stylecolorred-answer-10"></a>

Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.

```
const bind = (fn, context) => (...args) => fn.apply(context, args)
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-10" id="span-stylecolorred-dont-forget-10"></a>

#### Additional links <a href="span-stylecolorred-additional-links-10" id="span-stylecolorred-additional-links-10"></a>

#### What is the purpose of cache busting and how can you achieve it? <a href="span-stylecolorred-what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it" id="span-stylecolorred-what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it"></a>

#### Answer <a href="span-stylecolorred-answer-11" id="span-stylecolorred-answer-11"></a>

Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.\
However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.\
Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.\
A common technique to force the browser to re-download the file is to append a query string to the end of the file.

* `src="js/script.js"` => `src="js/script.js?v=2"`

The browser considers it a different file but prevents the need to change the file name.

#### Don't forget: <a href="span-stylecolorred-dont-forget-11" id="span-stylecolorred-dont-forget-11"></a>

#### Additional links <a href="span-stylecolorred-additional-links-11" id="span-stylecolorred-additional-links-11"></a>

* [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

#### How can you avoid callback hells? <a href="span-stylecolorred-how-can-you-avoid-callback-hells" id="span-stylecolorred-how-can-you-avoid-callback-hells"></a>

```
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    // ...
                })
            })
        })
    })
})
```

#### Answer <a href="span-stylecolorred-answer-12" id="span-stylecolorred-answer-12"></a>

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await` ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.\
The above code can be restructured like so:

```
async function asyncAwaitVersion() {
    const a = await getData()
    const b = await getMoreData(a)
    const c = await getMoreData(b)
    const d = await getMoreData(c)
    const e = await getMoreData(d)
    // ...
}
```

There are lots of ways to solve the issue of callback hells:

* Modularization: break callbacks into independent functions
* Use a control flow library, like async
* Use generators with Promises
* Use async/await (from v7 on)

#### Don't forget: <a href="span-stylecolorred-dont-forget-12" id="span-stylecolorred-dont-forget-12"></a>

* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

#### Additional links <a href="span-stylecolorred-additional-links-12" id="span-stylecolorred-additional-links-12"></a>

* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)

#### What is the purpose of callback function as an argument of `setState` ? <a href="span-stylecolorred-what-is-the-purpose-of-callback-function-as-an-argument-of-setstate" id="span-stylecolorred-what-is-the-purpose-of-callback-function-as-an-argument-of-setstate"></a>

#### Answer <a href="span-stylecolorred-answer-13" id="span-stylecolorred-answer-13"></a>

The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.

```
setState({
    name: "sudheer"
}, () => {
    console.log("The name has updated and component re-rendered")
})
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-13" id="span-stylecolorred-dont-forget-13"></a>

* The callback function is invoked after `setState` finishes and is used for any post action.
* It is recommended to use lifecycle method rather this callback function.

#### Additional links <a href="span-stylecolorred-additional-links-13" id="span-stylecolorred-additional-links-13"></a>

* [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

#### Which is the preferred option between callback refs and findDOMNode()? <a href="span-stylecolorred-which-is-the-preferred-option-between-callback-refs-and-finddomnode" id="span-stylecolorred-which-is-the-preferred-option-between-callback-refs-and-finddomnode"></a>

#### Answer <a href="span-stylecolorred-answer-14" id="span-stylecolorred-answer-14"></a>

Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.

```
// Legacy approach using findDOMNode()
class MyComponent extends Component {
    componentDidMount() {
        findDOMNode(this).scrollIntoView()
    }
    render() {
        return <div / >
    }
}
// Recommended approach using callback refs
class MyComponent extends Component {
    componentDidMount() {
        this.node.scrollIntoView()
    }
    render() {
        return <div ref = {
            node => (this.node = node)
        }
        />
    }
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-14" id="span-stylecolorred-dont-forget-14"></a>

* Callback refs are preferred over `findDOMNode()`.

#### Additional links <a href="span-stylecolorred-additional-links-14" id="span-stylecolorred-additional-links-14"></a>

* [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)

#### What is a callback? Can you show an example using one? <a href="span-stylecolorred-what-is-a-callback-can-you-show-an-example-using-one" id="span-stylecolorred-what-is-a-callback-can-you-show-an-example-using-one"></a>

#### Answer <a href="span-stylecolorred-answer-15" id="span-stylecolorred-answer-15"></a>

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.\
As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.

```
function onClick() {
    console.log("The user clicked on the page.")
}
document.addEventListener("click",
    onClick)
```

However, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).

```
const map = (arr, callback) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i))
    }
    return result
}
map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-15" id="span-stylecolorred-dont-forget-15"></a>

* Functions are first-class objects in JavaScript
* Callbacks vs Promises

#### Additional links <a href="span-stylecolorred-additional-links-15" id="span-stylecolorred-additional-links-15"></a>

* [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback\_function)

#### What is the `children` prop? <a href="span-stylecolorred-what-is-the-children-prop" id="span-stylecolorred-what-is-the-children-prop"></a>

#### Answer <a href="span-stylecolorred-answer-16" id="span-stylecolorred-answer-16"></a>

`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React. Children.map` , `React. Children.forEach` , `React. Children.count` , `React.Children.only` and `React. Children.toArray` . A simple usage example of the children prop is as follows:

```
function GenericBox({
    children
}) {
    return <div className = "container" > {
        children
    } < /div>
}

function App() {
    return ( <
        GenericBox >
        <
        span > Hello < /span> <span>World</span >
        <
        /GenericBox>
    )
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-16" id="span-stylecolorred-dont-forget-16"></a>

* Children is a prop that allows components to be passed as data to other components.
* The React API provides methods to work with this prop.

#### Additional links <a href="span-stylecolorred-additional-links-16" id="span-stylecolorred-additional-links-16"></a>

* [React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

#### Why does React use `className` instead of `class` like in HTML? <a href="span-stylecolorred-why-does-react-use-classname-instead-of-class-like-in-html" id="span-stylecolorred-why-does-react-use-classname-instead-of-class-like-in-html"></a>

#### Answer <a href="span-stylecolorred-answer-17" id="span-stylecolorred-answer-17"></a>

React's philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:

```
const element = document.createElement("div")
element.className = "hello"
```

Additionally, before ES5, reserved words could not be used in objects:

```
const element = {
    attributes: {
        class: "hello"
    }
}
```

In IE8, this will throw an error.\
In modern environments, destructuring will throw an error if trying to assign to a variable:

```
const {
    class
} = this.props // Error
const {
    className
} = this.props // All good
const {
    class: className
} =
this.props // All good, but
cumbersome!
```

However, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class` , but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.

#### Don't forget: <a href="span-stylecolorred-dont-forget-17" id="span-stylecolorred-dont-forget-17"></a>

#### Additional links <a href="span-stylecolorred-additional-links-17" id="span-stylecolorred-additional-links-17"></a>

#### How do you clone an object in JavaScript? <a href="span-stylecolorred-how-do-you-clone-an-object-in-javascript" id="span-stylecolorred-how-do-you-clone-an-object-in-javascript"></a>

#### Answer <a href="span-stylecolorred-answer-18" id="span-stylecolorred-answer-18"></a>

Using the object spread operator `...` , the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

```
const obj = {
    a: 1,
    b: 2
}
const shallowClone = {
    ...obj
}
```

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.\
Other alternatives include:

* `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
* `Object.assign({}, obj)` is another alternative.
* `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.

#### Don't forget: <a href="span-stylecolorred-dont-forget-18" id="span-stylecolorred-dont-forget-18"></a>

* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.

#### Additional links <a href="span-stylecolorred-additional-links-18" id="span-stylecolorred-additional-links-18"></a>

* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

#### What is a closure? Can you give a useful example of one? <a href="span-stylecolorred-what-is-a-closure-can-you-give-a-useful-example-of-one" id="span-stylecolorred-what-is-a-closure-can-you-give-a-useful-example-of-one"></a>

#### Answer <a href="span-stylecolorred-answer-19" id="span-stylecolorred-answer-19"></a>

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

* Variables declared in its own scope
* Variables declared in the scope of the parent function
* Variables declared in the global scope

In JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.\
In addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.

#### Don't forget: <a href="span-stylecolorred-dont-forget-19" id="span-stylecolorred-dont-forget-19"></a>

* Closures are useful because they let you associate data with a function that operates on that data.
* A closure can substitute an object with only a single method.
* Closures can be used to emulate private properties and methods.

#### Additional links <a href="span-stylecolorred-additional-links-19" id="span-stylecolorred-additional-links-19"></a>

* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

#### How do you compare two objects in JavaScript? <a href="span-stylecolorred-how-do-you-compare-two-objects-in-javascript" id="span-stylecolorred-how-do-you-compare-two-objects-in-javascript"></a>

#### Answer <a href="span-stylecolorred-answer-20" id="span-stylecolorred-answer-20"></a>

Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===` . This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.\
In order to test if two objects are equal in structure, a helper function is required. It will iterate through the own properties of each object to test if they have the same values, including nested objects. Optionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.\
Note: this technique does not attempt to test equivalence of data structures other than plain objects, arrays, functions, dates and primitive values.

```
function isDeepEqual(obj1, obj2, testPrototypes = false) {
    if (obj1 === obj2) {
        return true
    }
    if (typeof obj1 === "function" && typeof obj2 === "function") {
        return obj1.toString() === obj2.toString()
    }
    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime()
    }
    if (
        Object.prototype.toString.call(obj1) !==
        Object.prototype.toString.call(obj2) ||
        typeof obj1 !== "object"
    ) {
        return false
    }
    const prototypesAreEqual = testPrototypes ?
        isDeepEqual(
            Object.getPrototypeOf(obj1),
            Object.getPrototypeOf(obj2),
            true
        ) :
        true
    const obj1Props = Object.getOwnPropertyNames(obj1)
    const obj2Props = Object.getOwnPropertyNames(obj2)
    return (
        obj1Props.length === obj2Props.length &&
        prototypesAreEqual &&
        obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
    )
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-20" id="span-stylecolorred-dont-forget-20"></a>

* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference (location in memory)

#### Additional links <a href="span-stylecolorred-additional-links-20" id="span-stylecolorred-additional-links-20"></a>

* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)

#### What is context? <a href="span-stylecolorred-what-is-context" id="span-stylecolorred-what-is-context"></a>

#### Answer <a href="span-stylecolorred-answer-21" id="span-stylecolorred-answer-21"></a>

Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

```
const {
    Provider,
    Consumer
} = React.createContext(defaultValue)
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-21" id="span-stylecolorred-dont-forget-21"></a>

* Context provides a way to pass data through a tree of React components, without having to manually pass props.
* Context is designed to share data that is considered _global_ for a tree of React components.

#### Additional links <a href="span-stylecolorred-additional-links-21" id="span-stylecolorred-additional-links-21"></a>

* [React docs on Context](https://reactjs.org/docs/context.html)

#### What is CORS? <a href="span-stylecolorred-what-is-cors" id="span-stylecolorred-what-is-cors"></a>

#### Answer <a href="span-stylecolorred-answer-22" id="span-stylecolorred-answer-22"></a>

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.\
An example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com` .\
For security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.

#### Don't forget: <a href="span-stylecolorred-dont-forget-22" id="span-stylecolorred-dont-forget-22"></a>

* CORS behavior is not an error,  it's a security mechanism to protect users.
* CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

#### Additional links <a href="span-stylecolorred-additional-links-22" id="span-stylecolorred-additional-links-22"></a>

* [MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)





#### Describe the layout of the CSS Box Model and briefly describe each component. <a href="span-stylecolorred-describe-the-layout-of-the-css-box-model-and-briefly-describe-each-component" id="span-stylecolorred-describe-the-layout-of-the-css-box-model-and-briefly-describe-each-component"></a>

#### Answer <a href="span-stylecolorred-answer-23" id="span-stylecolorred-answer-23"></a>

`Content` : The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height` .\
`Padding` : The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height` .\
`Border` : The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height` .\
_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height` .

![alt text](https://bgoonz.github.io/INTERVIEW-PREP-COMPLETE/README\_files/boxmodel.gif)

alt text

#### Don't forget: <a href="span-stylecolorred-dont-forget-23" id="span-stylecolorred-dont-forget-23"></a>

* This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!
* Shows a solid understanding of spacing and the DOM

#### Additional links <a href="span-stylecolorred-additional-links-23" id="span-stylecolorred-additional-links-23"></a>

* [W3School's CSS Box Model Page](https://www.w3schools.com/Css/css\_boxmodel.asp)
* [Mozilla's Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Box\_Model/Introduction\_to\_the\_CSS\_box\_model)

#### What are the advantages of using CSS preprocessors? <a href="span-stylecolorred-what-are-the-advantages-of-using-css-preprocessors" id="span-stylecolorred-what-are-the-advantages-of-using-css-preprocessors"></a>

#### Answer <a href="span-stylecolorred-answer-24" id="span-stylecolorred-answer-24"></a>

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions ( `lighten` , `darken` , `transparentize` , etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.

#### Don't forget: <a href="span-stylecolorred-dont-forget-24" id="span-stylecolorred-dont-forget-24"></a>

* They allow us to write more maintainable and scalable CSS
* Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)

#### Additional links <a href="span-stylecolorred-additional-links-24" id="span-stylecolorred-additional-links-24"></a>

* [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)

#### What is the difference between '+' and '\~' sibling selectors?. <a href="span-stylecolorred-what-is-the-difference-between-and-sibling-selectors" id="span-stylecolorred-what-is-the-difference-between-and-sibling-selectors"></a>

#### Answer <a href="span-stylecolorred-answer-25" id="span-stylecolorred-answer-25"></a>

The General Sibling Selector `~` selects all elements that are siblings of a specified element.\
The following example selects all `<p>` elements that are siblings of `<div>` elements:

```
div ~ p {
  background-color: blue; 
}
```

The Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element.\
The following example will select all `<p>` elements that are placed immediately after `<div>` elements:

```
div + p {
  background-color: red;
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-25" id="span-stylecolorred-dont-forget-25"></a>

#### Additional links <a href="span-stylecolorred-additional-links-25" id="span-stylecolorred-additional-links-25"></a>

* [W3School's CSS Combinators Page](https://www.w3schools.com/css/css\_combinators.asp)
* [Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction\_to\_CSS/Combinators\_and\_multiple\_selectors)

#### Can you describe how CSS specificity works? <a href="span-stylecolorred-can-you-describe-how-css-specificity-works" id="span-stylecolorred-can-you-describe-how-css-specificity-works"></a>

#### Answer <a href="span-stylecolorred-answer-26" id="span-stylecolorred-answer-26"></a>

Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:

* Inline rules (binary - 1 or 0)
* Number of id selectors
* Number of class, pseudo-class and attribute selectors
* Number of tags and pseudo-element selectors

When two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.

#### Don't forget: <a href="span-stylecolorred-dont-forget-26" id="span-stylecolorred-dont-forget-26"></a>

* Specificity matrix: \[inline, id, class/pseudo-class/attribute, tag/pseudo-element]
* In cases of equal specificity, last rule is applied

#### Additional links <a href="span-stylecolorred-additional-links-26" id="span-stylecolorred-additional-links-26"></a>

* [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

#### What is debouncing? <a href="span-stylecolorred-what-is-debouncing" id="span-stylecolorred-what-is-debouncing"></a>

#### Answer <a href="span-stylecolorred-answer-27" id="span-stylecolorred-answer-27"></a>

Debouncing is a process to add some delay before executing a function. It is commonly used with DOM event listeners to improve the performance of page. It is a technique which allow us to "group" multiple sequential calls in a single one. A raw DOM event listeners can easily trigger 20+ events per second. A debounced function will only be called once the delay has passed.

```
const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}
window.addEventListere('scroll', debounce(function() {
    // Do stuff, this function will be called after a delay of 1 second
}, 1000));
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-27" id="span-stylecolorred-dont-forget-27"></a>

* Common use case is to make API call only when user is finished typing while searching.

#### Additional links <a href="span-stylecolorred-additional-links-27" id="span-stylecolorred-additional-links-27"></a>

* [Debouncing explained](https://css-tricks.com/debouncing-throttling-explained-examples/)

#### What is the DOM? <a href="span-stylecolorred-what-is-the-dom" id="span-stylecolorred-what-is-the-dom"></a>

#### Answer <a href="span-stylecolorred-answer-28" id="span-stylecolorred-answer-28"></a>

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

#### Don't forget: <a href="span-stylecolorred-dont-forget-28" id="span-stylecolorred-dont-forget-28"></a>

* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
* `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
* Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

#### Additional links <a href="span-stylecolorred-additional-links-28" id="span-stylecolorred-additional-links-28"></a>

* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

#### What is the difference between the equality operators `==` and `===` ? <a href="span-stylecolorred-what-is-the-difference-between-the-equality-operators-and" id="span-stylecolorred-what-is-the-difference-between-the-equality-operators-and"></a>

#### Answer <a href="span-stylecolorred-answer-29" id="span-stylecolorred-answer-29"></a>

Triple equals ( `===` ) checks for strict equality, which means both the type and value must be the same. Double equals ( `==` ) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

#### Don't forget: <a href="span-stylecolorred-dont-forget-29" id="span-stylecolorred-dont-forget-29"></a>

* Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.
* Type coercion means the values are converted into the same type.
* Mention of falsy values and their comparison.

#### Additional links <a href="span-stylecolorred-additional-links-29" id="span-stylecolorred-additional-links-29"></a>

* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison\_Operators)

#### What is the difference between an element and a component in React? <a href="span-stylecolorred-what-is-the-difference-between-an-element-and-a-component-in-react" id="span-stylecolorred-what-is-the-difference-between-an-element-and-a-component-in-react"></a>

#### Answer <a href="span-stylecolorred-answer-30" id="span-stylecolorred-answer-30"></a>

An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.\
A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.

```
const Component = () => "Hello"
const componentElement = < Component / >
    const domNodeElement = < div / >
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-30" id="span-stylecolorred-dont-forget-30"></a>

* Elements are immutable, plain objects that describe the DOM nodes or components you want to render.
* Components can be either classes or functions, that take props as an input and return an element tree as the output.

#### Additional links <a href="span-stylecolorred-additional-links-30" id="span-stylecolorred-additional-links-30"></a>

* [React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* [React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)

#### What is the difference between `em` and `rem` units? <a href="span-stylecolorred-what-is-the-difference-between-em-and-rem-units" id="span-stylecolorred-what-is-the-difference-between-em-and-rem-units"></a>

#### Answer <a href="span-stylecolorred-answer-31" id="span-stylecolorred-answer-31"></a>

Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.

* `em` units inherit their value from the `font-size` of the parent element
* `rem` units inherit their value from the `font-size` of the root element (`html`)

In most browsers, the `font-size` of the root element is set to `16px` by default.

#### Don't forget: <a href="span-stylecolorred-dont-forget-31" id="span-stylecolorred-dont-forget-31"></a>

* Benefits of using `em` and `rem` units

#### Additional links <a href="span-stylecolorred-additional-links-31" id="span-stylecolorred-additional-links-31"></a>

* [CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)

#### What are error boundaries in React? <a href="span-stylecolorred-what-are-error-boundaries-in-react" id="span-stylecolorred-what-are-error-boundaries-in-react"></a>

#### Answer <a href="span-stylecolorred-answer-32" id="span-stylecolorred-answer-32"></a>

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.\
Class components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`

```
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    // Use componentDidCatch to log the error
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info)
    }
    // use getDerivedStateFromError to update state
    static getDerivedStateFromError(error) {
        // Display fallback UI
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 > Something went wrong. < /h1>
        }
        return this.props.children
    }
}
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-32" id="span-stylecolorred-dont-forget-32"></a>

* Error boundaries only catch errors in the components below them in the tree. An error boundary can't catch an error within itself.

#### Additional links <a href="span-stylecolorred-additional-links-32" id="span-stylecolorred-additional-links-32"></a>

[https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)

#### What is event delegation and why is it useful? Can you show an example of how to use it? <a href="span-stylecolorred-what-is-event-delegation-and-why-is-it-useful-can-you-show-an-example-of-how-to-u" id="span-stylecolorred-what-is-event-delegation-and-why-is-it-useful-can-you-show-an-example-of-how-to-u"></a>

#### Answer <a href="span-stylecolorred-answer-33" id="span-stylecolorred-answer-33"></a>

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.\
DOM events provide useful information about the element that initiated the event via `Event.target` . This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.\
This provides two main benefits:

* It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
* If elements are dynamically added to the parent, there is no need to register new event listeners for them.

Instead of:

```
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", handleButtonClick)
})
```

Event delegation involves using a condition to ensure the child target matches our desired element:

```
document.addEventListener("click", e => {
    if (e.target.closest("button")) {
        handleButtonClick()
    }
})
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-33" id="span-stylecolorred-dont-forget-33"></a>

* The difference between event bubbling and capturing

#### Additional links <a href="span-stylecolorred-additional-links-33" id="span-stylecolorred-additional-links-33"></a>

* [Event Delegation](https://davidwalsh.name/event-delegate)

#### What is event-driven programming? <a href="span-stylecolorred-what-is-event-driven-programming" id="span-stylecolorred-what-is-event-driven-programming"></a>

#### Answer <a href="span-stylecolorred-answer-34" id="span-stylecolorred-answer-34"></a>

Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.\
A common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter` , where a callback function is run when the event occurs.

```
document.addEventListener("click", function(event) {
    // This callback function is run when the user
    // clicks on the document.
})
```

Without the context of the DOM, the pattern may look like this:

```
const hub = createEventHub()
hub.on("message", function(data) {
    console.log(`${data.username} said ${data.text}`)
})
hub.emit("message", {
    username: "John",
    text: "Hello?"
})
```

With this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.

#### Don't forget: <a href="span-stylecolorred-dont-forget-34" id="span-stylecolorred-dont-forget-34"></a>

* Follows a publish-subscribe pattern.
* Responds to events that occur by running any callback functions subscribed to the event.
* Show how to create a simple pub-sub implementation with JavaScript.

#### Additional links <a href="span-stylecolorred-additional-links-34" id="span-stylecolorred-additional-links-34"></a>

* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview\_of\_Events\_and\_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

#### What is the difference between an expression and a statement in JavaScript? <a href="span-stylecolorred-what-is-the-difference-between-an-expression-and-a-statement-in-javascript" id="span-stylecolorred-what-is-the-difference-between-an-expression-and-a-statement-in-javascript"></a>

#### Answer <a href="span-stylecolorred-answer-35" id="span-stylecolorred-answer-35"></a>

There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:

* **Expression**: produces a value
* **Statement**: performs an action
* **Expression statement**: produces a value and performs an action

A general rule of thumb:

> If you can print it or assign it to a variable, it's an expression. If you can't, it's a statement.

#### Statements <a href="span-stylecolorred-statements" id="span-stylecolorred-statements"></a>

```
let x = 0

function declaration() {}
if (true) {}
```

Statements appear as instructions that do something but don't produce values.

```
// Assign `x` to the absolute value of `y`.
var x
if (y >= 0) {
    x = y
} else {
    x = -y
}
```

The only expression in the above code is `y >= 0` which produces a value, either `true` or `false` . A value is not produced by other parts of the code.

#### Expressions <a href="span-stylecolorred-expressions" id="span-stylecolorred-expressions"></a>

Expressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.

```
5 + 5 // => 10
lastCharacter("input") // => "t"
true === true // => true
```

#### Expression statements <a href="span-stylecolorred-expression-statements" id="span-stylecolorred-expression-statements"></a>

There is an equivalent version of the set of statements used before as an expression using the conditional operator:

```
// Assign `x` as the absolute value of `y`.
var x = y >= 0 ? y : -y
```

This is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).

#### Don't forget: <a href="span-stylecolorred-dont-forget-35" id="span-stylecolorred-dont-forget-35"></a>

* Function declarations vs function expressions

#### Additional links <a href="span-stylecolorred-additional-links-35" id="span-stylecolorred-additional-links-35"></a>

* [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

#### What are truthy and falsy values in JavaScript? <a href="span-stylecolorred-what-are-truthy-and-falsy-values-in-javascript" id="span-stylecolorred-what-are-truthy-and-falsy-values-in-javascript"></a>

#### Answer <a href="span-stylecolorred-answer-36" id="span-stylecolorred-answer-36"></a>

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.\
There are 6 falsy values in JavaScript. They are:

* `false`
* `undefined`
* `null`
* `""` (empty string)
* `NaN`
* `0` (both `+0` and `-0`)

Every other value is considered truthy.\
A value's truthiness can be examined by passing it into the `Boolean` function.

```
Boolean("") // false
Boolean([]) // true
```

There is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.

```
!!"" // false
!![] // true
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-36" id="span-stylecolorred-dont-forget-36"></a>

#### Additional links <a href="span-stylecolorred-additional-links-36" id="span-stylecolorred-additional-links-36"></a>

* [Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)
* [Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

#### Generate an array, containing the Fibonacci sequence, up until the nth term. <a href="span-stylecolorred-generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term" id="span-stylecolorred-generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term"></a>

#### Answer <a href="span-stylecolorred-answer-37" id="span-stylecolorred-answer-37"></a>

Initialize an empty array of length `n` . Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

```
const fibonacci = n => [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
)
```

#### Don't forget: <a href="span-stylecolorred-dont-forget-37" id="span-stylecolorred-dont-forget-37"></a>

#### Additional links <a href="span-stylecolorred-additional-links-37" id="span-stylecolorred-additional-links-37"></a>

* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets\_archive/fibonacciUntilNum.md)

#### Answer <a href="span-stylecolorred-answer-38" id="span-stylecolorred-answer-38"></a>

Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.

#### Don't forget: <a href="span-stylecolorred-dont-forget-38" id="span-stylecolorred-dont-forget-38"></a>

* Automatic semicolon placement can lead to time-consuming bugs

#### Additional links <a href="span-stylecolorred-additional-links-38" id="span-stylecolorred-additional-links-38"></a>

* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)
