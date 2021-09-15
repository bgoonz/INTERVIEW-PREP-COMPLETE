## LOOP_CMPL

### Question: What is the time, space complexity of the following code :
```
int a = 0, b = 0;    
for (i = 0; i < N; i++) {
    a = a + rand();  
}
for (j = 0; j < M; j++) {
    b = b + rand();
}
```
Assume that rand() is O(1) time, O(1) space function.

### Answer:  O(N + M) time, O(1) space

### Solution:
The first loop is O(N) and the second loop is O(M). Since you don't know which is bigger, you say **this is O(N + M)**. This can also be written as O(max(N, M)).

Since there is no additional space being utilised, the space complexity is constant / O(1)


## NESTED_CMPL

### Question: What is the time, space complexity of the following code :
```
int a = 0, b = 0;    
for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        a = a + j;
    }
}
for (k = 0; k < N; k++) {
    b = b + k;
} 
```

### Answer: O(N * N) time, O(1) space

### Solution:
The first set of nested loops is O(N^2) and the second loop is O(N). 

This is O(max(N^2,N)) which is O(N^2). 


## NESTED_CMPL2

### Question: What is the time complexity of the following code :
```
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
```

### Answer: O(N * N)

### Solution:
Total number of runs = N + (N - 1) + (N - 2) + ... 1 + 0

= N * (N + 1) / 2

= 1/2 * N^2 + 1/2 * N

O(N^2) times. 


## CHOOSE4

### Question: What does it mean when we say that an algorithm X is asymptotically more efficient than Y?

### Answer: X will always be a better choice for large inputs

### Solution: 
In asymptotic analysis we consider growth of algorithm in terms of input size. An algorithm X is said to be asymptotically better than Y if X takes smaller time than y for all input sizes n larger than a value n0 where n0 > 0.


## WHILE_CMPL

### Question: What is the time complexity of the following code :
```
int a = 0, i = N;
while (i > 0) {
    a += i;
    i /= 2;
}
```
### Answer: O(log N)

### Solution: 
We have to find the smallest x such that `N / 2^x < 1 OR 2^x > N`
x = log(N) 


## NESTED_CMPL3

### Question:What is time complexity of following code :
```
int count = 0;
for (int i = N; i > 0; i /= 2) {
    for (int j = 0; j < i; j++) {
        count += 1;
    }
}
```
### Answer: O(N)

### Solution: 
In the first iteration, the j loop runs N times.

In the second iteration, the j loop runs N / 2 times. 

In the ith iteration, the j loop runs N / 2^i times. 

So, the total number of runs of loop = N + N / 2 + N / 4 + ... 1 


## LOOP_CMPL2

### Question: What is time complexity of following code:
```
int i, j, k = 0;
for (i  = n/2; i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + n/2;
    }
}
```
### Answer: Θ(nLogn)

### Solution: 
Lets look at the code we are evaluating : 

int i, j, k = 0;
for (i = n/2; i <= n; i++) {
for (j = 2; j <= n; j = j * 2) {
k = k + n/2;
}
}


Now, lets just assume `n = 8` for now. 
We will try to see, the values of j corresponding to each i. 

i = 4, j = 2, 4, 8
i = 5, j = 2, 4, 8
i = 6, j = 2, 4, 8
i = 7, j = 2, 4, 8
i = 8, j = 2, 4, 8


If you notice, j keeps doubling till it is less than or equal to n. Number of times, you can double a number till it is less than n would be log(n). 

Lets take more examples here to convince ourselves.

n = 16, j = 2, 4, 8, 16
n = 32, j = 2, 4, 8, 16, 32


So, j would run for O(log n) steps. 
i runs for n/2 steps. 

So, total steps ` = O (n/ 2 * log (n)) = O(n logn) `

= **N * ( 1 + 1/2 + 1/4 + 1/8 + ... ) < 2 * N**


## GCD_CMPL

### Question: In the following C++ function, let n >= m. What is the time complexity of the above function assuming n > m?
```
int gcd(int n, int m) {
        if (n%m ==0) return m;
        if (n < m) swap(n, m);
        while (m > 0) {
            n = n%m;
            swap(n, m);
        }
        return n;
}
```
### Answer: Θ(logn)

### Solution: 
Let us say n = fibonacci(N) and m = fibonacci(N - 1)

fibonacci(N) = fibonacci(N-1) + fibonacci(N-2)

OR n = m + k where k < m. 

Therefore the step 

    n = n % m will make n = k
    
    swap(n, m) will result in
    
    n = fibonacci(N-1)
        
    m = k = fibonacci(N-2)
    
So, it will take N steps before m becomes 0.

This means, in the worst case, this algorithm can take N step if **n** is Nth fibonacci number. 

**Think of whats the relation between N and n**. 


## CHOOSE1

### Question: Which of the following is not bounded by O(n^2)?

### Answer: n^3 / (sqrt(n))

### Solution:
The order of growth of option (C) is n^2.5 which is higher than n^2.

Lets look at it with a different approach :

f(n) = O(n^2) if
f(n) <= C * n^2 for n > n0.


Lets look at every option one by one.

* Option 1 :

(15^10) * n + 12099
Lets say C = 16^10
15^10 * n + 12099 < 16^10 * n^2 for n > 1.
So, it is O(n^2).


* Option 2 : n^1.98

C = 1.
    n^1.98 < n^2 for n > 1.
So, its O(n^2) ```
Option 3 : n^3 / (sqrt(n)) or n^2.5
    There is no possible combination of C and n0 possible
Option 4 : 2^20 * n
    C = 2^20, n0 = 1
        2^20 * n <= 2^20 * n^2 for n > 1


## CHOOSE3

### Question: In a competition, four different functions are observed. All the functions use a single for loop and within the for loop, same set of statements are executed. Consider the following for loops: If n is the size of input(positive), which function is the most efficient? In other words, which loop completes the fastest?
```
  A) for(i = 0; i < n; i++)
 
  B) for(i = 0; i < n; i += 2)
 
  C) for(i = 1; i < n; i *= 2)
 
  D) for(i = n; i > -1; i /= 2)
```

### Answer: C

### Solution:
The time complexity of the first for loop is O(n). 

The time complexity of the second for loop is O(n/2), equivalent to O(n) in asymptotic analysis. 

The time complexity of the third for loop is O(logn). 

The fourth for loop doesn't terminate.


## CHOOSE2

### Question: Which of the given options provides the increasing order of complexity of functions f1, f2, f3 and f4:
```
f1(n) = 2^n

f2(n) = n^(3/2)

f3(n) = nLogn

f4(n) = n^(Logn)
```

### Answer:  f3, f2, f4, f1

### Solution: 
Try to look at the values for functions for very large value of n.


## REC_CMPL1

### Question: What is the worst case complexity of the following code :
```
/* 
 * V is sorted 
 * V.size() = N
 * The function is initially called as searchNumOccurrence(V, k, 0, N-1)
 */
int searchNumOccurrence(vector<int> &V, int k, int start, int end) {
    if (start > end) return 0;
    int mid = (start + end) / 2;
    if (V[mid] < k) return searchNumOccurrence(V, k, mid + 1, end);
    if (V[mid] > k) return searchNumOccurrence(V, k, start, mid - 1);
    return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
}
```
### Answer: O(N)

### Solution:
It might seem at the first look that the program is O(log N). 
However, the last case 

```return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);```

is the bottleneck step. 

Assuming all the values in the array are the same, we get the following relation : 

T(N) = 2 * T(N/2) + constant
= 4 * T(N/4) + constant ( 2 * constant = another constant )
= 8 * T(N/8) + constant
…
= N * T(N/N) + constant
= N + constant
= O(N)


## REC_CMPL2

### Question: What is the worst case time complexity of the following code:
```
int findMinPath(vector<vector<int> > &V, int r, int c) {
  int R = V.size();
  int C = V[0].size();
  if (r >= R || c >= C) return 100000000; // Infinity
  if (r == R - 1 && c == C - 1) return 0;
  return V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
}
```
### Answer: O(2^(R + C))

### Solution:

Note that in every function call, we end up making 2 calls.

So, the function calls ends up looking like a tree :

                   F(0,0)
                /          \ 
            F(0, 1)         F(1, 0)
             /    \         /       \ 
          F(0, 2)  F(1,1)  F(1, 1)  F(2, 0)
             ....
The function calls end up making a complete binary tree.

  Number of calls on Level 0 = 1
  Number of calls on Level 1 = 2
  Number of calls on Level 2 = 4
  ...
  Number of calls on level i = 2^i. 
Total number of calls = 1 + 2 + 4 + ... 2^i + ... 2^(M + N - 2)  
                      = O(2^(M + N))


## REC_CMPL3

### Question: What is the worst case time complexity of the following code:
```
int memo[101][101];
int findMinPath(vector<vector<int> >& V, int r, int c) {
  int R = V.size();
  int C = V[0].size();
  if (r >= R || c >= C) return 100000000; // Infinity
  if (r == R - 1 && c == C - 1) return 0;
  if (memo[r][c] != -1) return memo[r][c];
  memo[r][c] =  V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
  return memo[r][c];
}

Callsite : 
memset(memo, -1, sizeof(memo));
findMinPath(V, 0, 0);
```
### Answer:  O(R*C)

### Solution:

Note that for a given `(r, c)`
 
the following code will not be executed more than once : 

memo[r][c] = V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));


Once memo[r][c] is set, the functions will return at 

if (memo[r][c] != -1) return memo[r][c];


So, every function ends up calling other functions at most 1 time. 
In other words, every function ends up executing atmost O(1) times (Note that you can shift the part about checking for memo[r][c] != -1 at the callsite ).

`O(R * C)` possible number of combinations are possible for `(r, c)`
Hence, the time complexity of the function : O(R*C)


## AMORTIZED1

### Question: What is the time complexity of the following code :

```
int j = 0;
for(int i = 0; i < n; ++i) {
    while(j < n && arr[i] < arr[j]) {
        j++;
    }
}
```
### Answer: O(n)

### Solution:
Note that the variable j is not initialized for each value of variable i.
Hence, the inner j++ will be executed at most n times.
The i loop also runs n times.
So, the whole thing runs for O(n) times.


**Still not convinced ?**

Lets assume the array passed has its element in decreasing order. We will just dry run through the code :

Iteration 1 : i = 0, j = 0. arr[0] < arr[0] is false. So, the inner while loop breaks.
Iteration 2: i =1, j = 0. arr[1] < arr[0] is true. j becomes 1.
Iteration 3 : i = 1, j = 1. Condition false. We break. Note that j will remain 1 and is not reset back to 0.
Iteration 4 : i = 2, j = 1. arr[2] < arr[1]. True. j = 2.
Iteration 5 : i = 2, j = 2. Condition false. Break.
Iteration 6 : i = 3, j = 2. arr[3] < arr[2]. True. j = 3.
Iteration 7 : i = 3, j = 3. Condition false. Break.


As you can see, the inner while loop only runs once in this case.
So, total iterations is **2 * N.**


## WHILE_CMPL

### Question: What is the time complexity of the following code :
```
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
```
### Answer: O(N*N)

### Solution: 
Total number of runs = N + (N - 1) + (N - 2) + ... 1 + 0

= N * (N + 1) / 2

= 1/2 * N^2 + 1/2 * N

O(N^2) times. 