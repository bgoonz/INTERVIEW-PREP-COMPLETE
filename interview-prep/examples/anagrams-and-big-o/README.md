# Anagrams & Big O

{% tabs %}
{% tab title="anagram.js" %}
```javascript
/*
Solution 1: Checking Off
------------------------

Our first solution to the anagram problem will check to see that each
character in the first string actually occurs in the second. If it is
possible to “checkoff” each character, then the two strings must be
anagrams. Checking off a character will be accomplished by replacing it
with the special JavaScript value `null`. However, since strings in JavaScript
are immutable, the first step in the process will be to convert the
second string to an array. Each character from the first string
can be checked against the characters in the list and if found, checked off by
replacement. An implementation of this strategy may look like this:
*/

function anagramCheckingOff (string1, string2) {
  if (string1.length !== string2.length) return false

  const string2ToCheckOff = string2.split('')

  for (let i = 0; i < string1.length; i++) {
    let letterFound = false
    for (let j = 0; j < string2ToCheckOff.length; j++) {
      if (string1[i] === string2ToCheckOff[j]) {
        string2ToCheckOff[j] = null
        letterFound = true
        break
      }
    }
    if (!letterFound) return false
  }

  return true
}

assert.equal(true, anagramCheckingOff('abcd', 'dcba'))
assert.equal(false, anagramCheckingOff('abcd', 'abcc'))

/*
To analyze this algorithm, we need to note that each of the `n`
characters in `s1` will cause an iteration through up to `n` characters
in the list from `s2`. Each of the `n` positions in the list will be
visited once to match a character from `s1`. The number of visits then
becomes the sum of the integers from 1 to `n`. We recognized earlier that
this can be written as

$$
\sum_{i=1}^{n} i = \frac {n(n+1)}{2}
$$

$$
                 = \frac {1}{2}n^{2} + \frac {1}{2}n
$$

As $$n$$ gets large, the $$n^{2}$$ term will dominate the $$n$$ term and the
$$\frac {1}{2}$$ can be ignored. Therefore, this solution is $$O(n^{2})$$.


Solution 2: Sort and Compare
----------------------------

Another solution to the anagram problem will make use of the fact that
even though `string1` and `string2` are different, they are anagrams only if
they consist of exactly the same characters. So, if we begin by sorting each
string alphabetically, from a to z, we will end up with the same string
if the original two strings are anagrams. Below is a possible
implementation of this strategy. First, we convert each string to an array using
the string method `split`, and then we use the array method `sort` which
lexographically sorts an array in place and then returns the array. Finally, we
loop through the first string, checking to make sure that both strings contain
the same letter at every index.
*/

function anagramSortAndCompare (string1, string2) {
  if (string1.length !== string2.length) return false

  const sortedString1 = string1.split('').sort()
  const sortedString2 = string2.split('').sort()

  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false
  }

  return true
}

assert.equal(true, anagramSortAndCompare('abcde', 'edcba'))
assert.equal(false, anagramSortAndCompare('abcde', 'abcd'))

/*
At first glance you may be tempted to think that this algorithm is
$$O(n)$$, since there is one simple iteration to compare the *n*
characters after the sorting process. However, the two calls to the
Python `sorted` method are not without their own cost. Sorting is
typically either $$O(n^{2})$$ or $$O(n\log n)$$, so the sorting
operations dominate the iteration. In the end, this algorithm will have
the same order of magnitude as that of the sorting process.

Solution 3: Brute Force
-----------------------

A *brute force* technique for solving a problem typically tries to
exhaust all possibilities. For the anagram detection problem, we can
simply generate a list of all possible strings using the characters from
`s1` and then see if `s2` occurs. However, there is a difficulty with
this approach. When generating all possible strings from `s1`, there are
$$n$$ possible first characters, $$n-1$$ possible characters for the second
position, $$n-2$$ for the third, and so on. The total number of candidate
strings is $$n*(n-1)*(n-2)*...*3*2*1$$, which is $$n!$$. Although some of
the strings may be duplicates, the program cannot know this ahead of
time and so it will still generate $$n!$$ different strings.

It turns out that $$n!$$ grows even faster than $$2^{n}$$ as *n* gets large.
In fact, if `s1` were 20 characters long, there would be
$$20!$$ or 2,432,902,008,176,640,000 possible candidate strings. If we
processed one possibility every second, it would still take us
77,146,816,596 years to go through the entire list. This is probably not
going to be a good solution.

Solution 4: Count and Compare
-----------------------------

Our final solution to the anagram problem takes advantage of the fact
that any two anagrams will have the same number of a’s, the same number
of b’s, the same number of c’s, and so on. In order to decide whether
two strings are anagrams, we will first count the number of times each
character occurs. Since there are 26 possible characters, we can use a
array of 26 counters, one for each possible character. Each time we see a
particular character, we will increment the counter at that position. In
the end, if the two arrays of counters are identical, the strings must be
anagrams. Here is a possible implementation of the strategy:

*/

function anagramCountCompare (string1, string2) {

  function getLetterPosition (letter) {
    return letter.charCodeAt() - 'a'.charCodeAt()
  }

  const string1LetterCounts = new Array(26).fill(0)
  const string2LetterCounts = new Array(26).fill(0)

  for (let i = 0; i < string1.length; i++) {
    const letterPosition = getLetterPosition(string1[i])
    string1LetterCounts[letterPosition]++
  }

  for (let i = 0; i < string2.length; i++) {
    const letterPosition = getLetterPosition(string2[i])
    string2LetterCounts[letterPosition]++
  }

  for (let i = 0; i < string1LetterCounts.length; i++) {
    if (string1LetterCounts[i] !== string2LetterCounts[i]) {
      return false
    }
  }

  return true
}

assert.equal(true, anagramCountCompare('apple', 'pleap'))
assert.equal(false, anagramCountCompare('apple', 'applf'))

/*
Again, the solution has a number of iterations. However, unlike the
first solution, none of them are nested. The first two iterations used
to count the characters are both based on $$n$$. The third iteration,
comparing the two lists of counts, always takes 26 steps since there are
26 possible characters in the strings. Adding it all up gives us
$$T(n)=2n+26$$ steps. That is $$O(n)$$. We have found a linear order of
magnitude algorithm for solving this problem.

Those with greater familiarity with JavaScript may note that the counting
strategy we implemented in `anagramCountCompare` could be much more
succinctly approached using the `reduce` method of arrays. Note that we are
required to add an additional check that the strings are of the same length
since our dictionary comparison loop will not account for string2 having
additional characters.
*/

function anagramCountCompareWithReduce (string1, string2) {

  function letterCountReducer (letterCounts, letter) {
    if (letterCounts[letter]) {
      letterCounts[letter]++
    } else {
      letterCounts[letter] = 1
    }
    return letterCounts
  }

  const string1LetterCounts = string1.split('').reduce(letterCountReducer, {})
  const string2LetterCounts = string2.split('').reduce(letterCountReducer, {})


  for (let letter in string1LetterCounts) {
    if (string1LetterCounts[letter] !== string2LetterCounts[letter]) {
      return false
    }
  }

  return string1.length === string2.length
}

assert.equal(true, anagramCountCompareWithReduce('apple', 'pleap'))
assert.equal(false, anagramCountCompareWithReduce('apple', 'applf'))

/*
It is worth noting that `anagramCounterCompareWithReduce` is also $$O(n)$$, but
that it is impossible to determine this without understanding the
implementation of `Array.reduce` method.

Before leaving this example, we need to say something about space
requirements. Although the last solution was able to run in linear time,
it could only do so by using additional storage to keep the two dictionaries of
character counts. In other words, this algorithm sacrificed space in
order to gain time.

This is a common tradeoff. On many occasions you will need to make
decisions between time and space trade-offs. In this case, the amount of
extra space is not significant. However, if the underlying alphabet had
millions of characters, there would be more concern. As a software
engineer, when given a choice of algorithms, it will be up to you to
determine the best use of computing resources given a particular
problem.
*/

```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}



To explore different orders of magnitude, let’s consider four different solutions to the problem of detecting if a string is an anagram. One string is an anagram of another if the second is a rearrangement of the letters in the first. For example, `'heart'` and `'earth'` are anagrams.

For the sake of simplicity, let’s assume that the two strings in question use symbols from the set of 26 lowercase alphabetic characters. Our goal is to write a boolean function that will take two strings and return whether they are anagrams.







## Big O



An algorithm is little more than a series of steps required to perform some task. If we treat each step as a basic unit of computation, then an algorithm’s execution time can be expressed as the _number of steps required to solve the problem_.

This abstraction is exactly what we need: it characterizes an algorithm’s efficiency in terms of execution time while remaining independent of any particular program or computer. Now we can take a closer look at those two summation algorithms we introduced last chapter.

Intuitively, we can see that the first algorithm (`sum_of_n`) is doing more work than the second (`arithmetic_sum`): some program steps are being repeated, and the program takes even longer if we increase the value of `n`. But we need to be more precise.

The most expensive unit of computation in `sum_of_n` is variable assignment. If we counted the number of assignment statements, we would have a worthy approximation of the algorithm's execution time: there's an initial assignment statement (`total = 0`) that is performed only once, followed by a loop that executes the loop body (`total += i`) `n` times.

We can denote this more succinctly with function $$T$$, where $$T(n)=1+n$$.

The parameter $$n$$ is often referred to as the “size of the problem”, so we can read this as “$$T(n)$$ is the time it takes to solve a problem of size $$n$$, namely 1 + $$n$$ steps.”

For our summation functions, it makes sense to use the number of terms being summed to denote the size of the problem. Then, we can say that “The sum of the first 100,000 integers is a _bigger instance_ of the summation problem than the sum of the first 1,000 integers.”

Based on that claim, it seems reasonable that the time required to solve the larger case would be greater than for the smaller case. “Seems reasonable” isn’t quite good enough, though; we need to _prove_ that the algorithm’s execution time depends on the size of the problem.

To do this, we’re going to stop worrying about the _exact_ number of operations an algorithm performs and determine the dominant part of the $$T(n)$$ function. We can do this because, as the problem gets larger, some portion of the $$T(n)$$ function tends to overpower the rest; it’s this dominant portion that is ultimately most helpful for algorithm comparisons.

The _order of magnitude_ function describes the part of $$T(n)$$ that increases fastest as the value of $$n$$ increases. “Order of magnitude function” is a bit of a mouthful, though, so we call it _big O_. We write it as $$O(f(n))$$, where $$f(n)$$ is the dominant part of the original $$T(n)$$. This is called “Big O notation” and provides a useful approximation for the _actual_ number of steps in a computation.

In the above example, we saw that $$T(n)=1+n$$. As $$n$$ gets larger, the constant 1 will become less significant to the final result. If we are simply looking for an approximation of $$T(n)$$, then we can drop the 1 and say that the running time is $$O(n)$$.

Let’s be clear, though: the 1 _is_ important to $$T(n)$$ and can only be safely ignored when we are looking for an _approximation_ of $$T(n)$$.

As another example, suppose that the exact number of steps in some algorithm is $$T(n)=5n^{2}+27n+1005$$. When $$n$$ is small (1 or 2), the constant 1005 seems to be the dominant part of the function. However, as $$n$$ gets larger, the term $$n^{2}$$ becomes enormous, dwarfing the other two terms in its contribution to the final result.

Again, for an _approximation_ of $$T(n)$$ at large values of $$n$$, we can focus on $$5n^{2}$$ and ignore the other terms. Similarly, the coefficient $$5$$ becomes insignificant as $$n$$ gets larger. We would then say that the function $$T(n)$$ has an order of magnitude $$f(n)=n^{2}$$; more simply, the function $$T(n)$$ is $$O(n^{2})$$.

Although we don’t see this in the summation example, sometimes the performance of an algorithm depends on the problem’s **exact** data values rather than its size. For these kinds of algorithms, we need to characterize their performances as _worst case_, _best case_, or _average case_.

The worst case performance refers to a particular data set where the algorithm performs especially poorly, while the best case performance refers to a data set that the algorithm can process extremely fast. The average case, as you can probably infer, performs somewhere in between these two extremes. Understanding these distinctions can help prevent any one particular case from misleading us.

There are several common order of magnitude functions that will frequently appear as you study algorithms. These functions are listed below from lowest order of magnitude to highest. Knowing these goes a long way toward recognizing them in your own code.

| f(n)         | Name        |
| ------------ | ----------- |
| $$1$$        | Constant    |
| $$\log{n}$$  | Logarithmic |
| $$n$$        | Linear      |
| $$n\log{n}$$ | Log Linear  |
| $$n^{2}$$    | Quadratic   |
| $$n^{3}$$    | Cubic       |
| $$2^{n}$$    | Exponential |

In order to decide which of these functions dominates a $$T(n)$$ function, we must see how it compares with the others as $$n$$ becomes larger. We’ve taken the liberty of graphing these functions together below.

Notice that, when $$n$$ is small, the functions inhabit a similar area; it’s hard to tell which is dominant. However, as $$n$$ grows, they branch, making it easy for us to distinguish them.

As a final example, suppose that we have the fragment of Python code shown below. Although this program does nothing useful, it’s instructive to see how we can take actual code and analyze its performance.

```python
a = 5
b = 6
c = 10
for i in range(n):
   for j in range(n):
      x = i * i
      y = j * j
      z = i * j
for k in range(n):
   w = a * k + 45
   v = b * b
d = 33
```

To calculate $$T(n)$$ for this fragment, we need to count the assignment operations, which is easier if we group them logically.

The first group consists of three assignment statements, giving us the term **3**. The second group consists of three assignments in the nested iteration: $$3n^{2}$$. The third group has two assignments iterated $$n$$ times: $$2n$$. The fourth “group” is the last assignment statement, which is just the constant **1**.

Putting those all together: $$T(n)=3+3n^{2}+2n+1=3n^{2}+2n+4$$. By looking at the exponents, we can see that the $$n^{2}$$ term will be dominant, so this fragment of code is $$O(n^{2})$$. Remember that we can safely ignore all the terms and coefficients as $$n$$ grows larger.

The diagram below shows a few of the common big O functions as they compare with the $$T(n)$$ function discussed above.

Note that $$T(n)$$ is initially larger than the cubic function but, as $$n$$ grows, $$T(n)$$ cannot compete with the rapid growth of the cubic function. Instead, it heads in the same direction as the quadratic function as $$n$$ continues to grow.







What makes one computer program better than another?

Take a moment to answer this for yourself 🙂. If you were given two programs that solve the same problem, how would you decide between them?

The truth is there are many valid criteria, which are often in conflict.

We typically want our program to be _correct_. In other words, we’d like the program’s output to match our expectations. Unfortunately, correctness is not always clear. For instance what does it mean for Google to return the “correct” top 10 search results for your search query?

Good software engineers often want their code to be _readable_, _reusable_, _elegant_ or _testable_. These are admirable goals, but you may not be able to achieve them all at the same time. It’s also not entirely clear what something like “elegance” looks like, and we certainly haven’t been able to model it mathematically, so computer scientists haven’t given these aspects of programs much consideration 🤷‍.

Two factors that computer scientists _love_ to model mathematically, though, are how long a program will take to run, and how much space (typically, memory) it will use. We call these time and space efficiency, and they’ll be at the core of our study of algorithms.

We may need to trade these off against other concerns: algorithm A may be faster but use more memory than algorithm B. They might both be less elegant than algorithm C, in a context where elegance is the priority. We’ll be focusing on time and space because they happen to be both interesting and measurable, but please don’t go away thinking they’re always the most important factors. The only truly correct answer is: “it depends”.

Another aspect of “it depends”, even when we focus on just time or space, is the context in which the program runs. There is often a relationship between the inputs of a program and its running time or space usage. For instance if you `grep` over many large files, it will take longer than if you `grep` over fewer, smaller files. This relationship between inputs and behavior will be an important part of our analysis.

Beyond this, the exact time and space that your program uses will also depend on many other factors. Can you think of at least three?

Here are some:

* How long it takes your computer to execute every instruction
* Your computer’s “Instruction Set Architecture”, for instance ARM or Intel x86
* How many cores of your machine the program uses
* What language your program is written in
* How your operating system chooses to schedule processes
* What other programs are running at the same time

… and there are many more.

All of these are important in practice, but none address the core question of whether an algorithm is generally better or worse than another. Sometimes we’d like to be able to ask: generally speaking, irrespective of whether a program is written in Fortran for the IBM 704 or in Python running on a shiny new Macbook, will it be more time and/or space efficient than an alternative? Will it use less space? This is the crux of algorithm analysis.

Algorithm analysis is a way to compare the time and space efficiency of programs with respect to their possible inputs, but irrespective of other context.

In the real world, we measure the time used by a program in some unit of… err… time, such as seconds. Similarly we measure space used in something like bytes. In analysis, this would be too specific. If we measure the time that it takes to finish, this number would incorporate details like language choice and CPU speed. We will need new models and vocabulary in order to speak with the level of generality that we’re seeking.

Let’s explore this idea with an example.

Say I wanted to calculate the sum of the first n numbers, and I’m wondering how long this will take. Firstly, can you think of a simple algorithm to do the calculation? It should be a function that has n as a parameter, and returns the sum of the first n numbers. You don’t need to do anything fancy, but please do take the time to write out an algorithm and think about how long it will take to run on small or large inputs.

Here is a simple Python solution:

```python
def sum_to_n(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total
```

Will `sum_to_n` take longer to run given a larger n? Intuitively, the answer seems to be yes, as it will loop more times.

Will `sum_to_n` take the same amount of time to run each time it’s invoked with the same input? Intuitively the answer seems to be yes, since the same instructions are executed.

Let’s now add some profiling code:

```python
import time

def sum_to_n(n):
    # record start time
    start = time.time()

    # run the function's code
    total = 0
    for i in range(n + 1):
        total += i

    # record end time
    end = time.time()

    return total, end - start
```

Let’s say I ran this with `n=1000000` (1 million) and noticed that it took 0.11 seconds. What would you expect to see if I ran it five more times?

```
>>> output_template = '{}({}) = {:15d} ({:8.7f} seconds)'
>>> for _ in range(5):
...     print(output_template.format('sum_to_n', 1000000, *sum_to_n(1000000)))
```

```
sum_to_n(1000000) =    500000500000 (0.1209280 seconds)
sum_to_n(1000000) =    500000500000 (0.1107872 seconds)
sum_to_n(1000000) =    500000500000 (0.1187370 seconds)
sum_to_n(1000000) =    500000500000 (0.1210580 seconds)
sum_to_n(1000000) =    500000500000 (0.1230309 seconds)
```

Interestingly, it takes a slightly different amount of time on each invocation, due to the slightly different state of my computer and the Python virtual machine each time. We’d generally like to ignore such small and random differences.

Now, what if we were to run it again with a range of different inputs, say 1 million, 2 million, 3 million and so on up to 9 million? What would you expect to see?

```
>>> for i in range(1, 10):
...     print(output_template.format('sum_to_n', i * 1000000, *sum_to_n(i * 1000000)))
```

```
sum_to_n(1000000) =    500000500000 (0.1198549 seconds)
sum_to_n(2000000) =   2000001000000 (0.2401729 seconds)
sum_to_n(3000000) =   4500001500000 (0.3838110 seconds)
sum_to_n(4000000) =   8000002000000 (0.4790699 seconds)
sum_to_n(5000000) =  12500002500000 (0.6189690 seconds)
sum_to_n(6000000) =  18000003000000 (0.6952291 seconds)
sum_to_n(7000000) =  24500003500000 (0.8431778 seconds)
sum_to_n(8000000) =  32000004000000 (0.9679160 seconds)
sum_to_n(9000000) =  40500004500000 (1.0458572 seconds)
```

Do you see the general relationship between between n and time elapsed? Is this what you expected? How would the relationship look if you were to plot values of n on the x-axis and execution time on the y-axis?

drawScatter('svg.scatter-linear', \[ {x: 1, y: 0.1198549}, {x: 2, y: 0.2401729}, {x: 3, y: 0.3838110}, {x: 4, y: 0.4790699}, {x: 5, y: 0.6189690}, {x: 6, y: 0.6952291}, {x: 7, y: 0.8431778}, {x: 8, y: 0.9679160}, {x: 9, y: 1.0458572}, ], 'n (millions)', 'Execution time (seconds)')

It turns out that our simple strategy is not the most efficient. In fact there is a short formula that will give us the answer to our question without any looping. Can you determine (or perhaps remember) what it is? Here's a hint: try summing the numbers 1 to 6 by grouping 1 and 6, 2 and 5, and 3 and 4 together, noticing that there are three pairs which each total 7.

Mathematically, the formula is:

$$\sum_{i=1}^{n} i = \frac {n(n+1)}{2}$$

If you don’t quite understand this formula, take a moment to explore [one of these visual explanations](https://artofproblemsolving.com/wiki/index.php?title=Proofs\_without\_words).

How would we implement this as a Python function, again with our timing code?

```python
def arithmetic_sum(n):
    start = time.time()
    total = n * (n + 1) // 2
    end = time.time()
    return total, end - start
```

What do you expect to see if we run this with a range of inputs as we did with `sum_to_n`?

```
>>> for i in range(1, 10):
...     print(output_template.format('arithmetic_sum', i * 1000000, *arithmetic_sum(i * 1000000)))
```

```
arithmetic_sum(1000000) =    500000500000 (0.0000021 seconds)
arithmetic_sum(2000000) =   2000001000000 (0.0000029 seconds)
arithmetic_sum(3000000) =   4500001500000 (0.0000019 seconds)
arithmetic_sum(4000000) =   8000002000000 (0.0000019 seconds)
arithmetic_sum(5000000) =  12500002500000 (0.0000031 seconds)
arithmetic_sum(6000000) =  18000003000000 (0.0000021 seconds)
arithmetic_sum(7000000) =  24500003500000 (0.0000021 seconds)
arithmetic_sum(8000000) =  32000004000000 (0.0000029 seconds)
arithmetic_sum(9000000) =  40500004500000 (0.0000019 seconds)
```

Notice that our answers are all correct. Did you expect each calculation to take around the same amount of time? What would this look like if we were to again plot value of n on the x-axis and execution times on the y-axis?

drawScatter('svg.scatter-constant', \[ {x: 1, y: 2.1}, {x: 2, y: 2.9}, {x: 3, y: 1.9}, {x: 4, y: 1.9}, {x: 5, y: 3.1}, {x: 6, y: 2.1}, {x: 7, y: 2.1}, {x: 8, y: 2.9}, {x: 9, y: 1.9}, ], 'n (millions)', 'Execution time (microseconds)', null, \[0, 10])

Notice that our y-axis is now marked in _microseconds_, which are millionths of a second. Also notice that the execution time appears to be largely independent of the size of the input.

We describe `sum_to_n` as “linear” or $$O(n)$$, and `arithmetic_sum` as “constant” or $$O(1)$$. Hopefully you can start to see why. Irrespective of the exact times that these functions take to execute, we can spot a general trend, that the execution time for `sum_to_n` grows in proportion to n, whereas the execution time for `arithmetic_sum` remains constant. All else being equal, `arithmetic_sum` is the better algorithm, for this reason.

In the following sections, we’ll apply a little more rigor to our reasoning, and explore a method for determining these time and space characteristics without direct measurement.
