Arrays Problems
•	AllUnique 
o	allUniqueWithSet
o	allUniqueWithArray
o	allUniqueWithStreams
•	BinarySearch 
o	binarySearch
o	binarySearchWithStreams
o	binarySearchWithInsertPos
•	CountSum 
o	countTwoSum
o	countTwoSumWithSet
o	countFourSum
o	lengthShortestSubarrayExceedingTarget
o	threeSumClosestButLess
•	DuplicatesAndMissing 
o	missingNumberInSortedConsecutiveArray
o	duplicateInRange_1_to_N_1
o	duplicateInRange_0_to_N_2
o	removeAllDuplicates
o	removeAllDuplicatesWithStreams
o	findLonelyNumber
•	Fibonacci 
o	fibonacci
•	KthElement 
o	getSecondMax
o	getSecondMaxWithStreams
o	getKthLargestWithSort
o	getKthLargestWithStreamsUsingSkip
o	getKthLargestWithStreamsUsingLimit
o	getKthSmallestWithStreamsUsingSkip
o	getKthSmallestWithStreamsUsingLimit
•	MaxDifference 
o	maxDifference
o	maxDifferenceWithStreams
•	MaxSumInArray 
o	maxSumInArray1
o	maxSumInArray2
o	
AllUnique
allUniqueWithSet
allUniqueWithArray
allUniqueWithStreams
AllUnique	Tests
static boolean allUniqueWithSet(int[] a)
{
    Set<Integer> checkSet = new HashSet<>();
    for(int v : a)
    {
        if(checkSet.contains(v))
        {
            return false;
        }
        checkSet.add(v);
    }
    return true;
}
static boolean allUniqueWithArray(int[] a)
{
    boolean[] check = new boolean[256];
    for(int v : a)
    {
        if(check[v])
        {
            return false;
        }
        check[v] = true;
    }
    return true;
}
static boolean allUniqueWithStreams(int[] a)
{
    Set<Integer> set = Arrays.stream(a)
                            .boxed()
                            .collect(Collectors.toSet());
    return set.size() == a.length;
}	static boolean testsPass()
{
    int[] a1 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int[] a2 = {1, 2, 3, 4, 5, 1, 2, 8, 9};
    boolean b1 = allUniqueWithSet(a1);
    boolean b2 = allUniqueWithSet(a2);
    boolean b3 = allUniqueWithStreams(a1);
    boolean b4 = allUniqueWithStreams(a2);
    boolean b5 = allUniqueWithArray(a1);
    boolean b6 = allUniqueWithArray(a2);
    return b1 && b3 && b5 && !b2 && !b4 && !b6;
}

BinarySearch
binarySearch
binarySearchWithStreams
binarySearchWithInsertPos
BinarySearch	Tests
static int binarySearch(int[] a, int val)
{
    int left = 0, right = a.length - 1;
    while(left <= right)
    {
        int mid = (left + right) / 2;
        if(a[mid] == val)
        {
            return mid;
        }
        else if(a[mid] > val)
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    return -1;
}
static int binarySearchWithStreams(int[] a, int val)
{
    List<Integer> list = Arrays.stream(a)
                              .boxed()
                              .collect(Collectors.toList());
    return Collections.binarySearch(list, val);
}
static int binarySearchWithInsertPos(int[] a, int val)
{
    int left = 0, right = a.length - 1;
    while(left <= right)
    {
        int mid = (left + right) / 2;
        if(a[mid] == val)
        {
            return mid;
        }
        else if(a[mid] > val)
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
    }
    return -left;
}	static boolean testsPass()
{
            // 0  1  2  3  4   5   6   7   8   9
    int[] a = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    boolean check = binarySearch(a, 1) == 0 &&
                    binarySearch(a, 15) == 7 &&
                    binarySearch(a, 10) == -1;
    if(!check)
    {
        return false;
    }
    check = binarySearchWithInsertPos(a, 10) == -5;
    if(!check)
    {
        return false;
    }
    check = binarySearchWithStreams(a, 1) == 0 &&
            binarySearchWithStreams(a, 15) == 7 &&
            binarySearchWithStreams(a, 10) < 0;
    if(!check)
    {
        return false;
    }
    return true;
}

Notes:
1.	Use left <= right
2.	Use right = mid - 1; and left = mid + 1;
CountSum
countTwoSum
countTwoSumWithSet
countFourSum
lengthShortestSubarrayExceedingTarget
threeSumClosestButLess
CountSum	Tests
static int countTwoSum(int[] a, int target)
{
    Arrays.sort(a);
    int count = 0;
    int left = 0, right = a.length - 1;
    while(left < right)
    {
        int sum = a[left] + a[right];
        if(sum == target)
        {
            count++;
            left++;
            right--;
        }
        else if(sum < target)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return count;
}
static int countTwoSumWithSet(int[] a, int target)
{
    // Note: Does not require sort
    Set<Integer> set = new HashSet<>();
    set.add(a[0]);
    int sumCount = 0;
    for(int i = 1; i < a.length; ++i)
    {
        int val = target - a[i];
        if(set.contains(val))
        {
            sumCount++;
        }
        set.add(a[i]);
    }
    return sumCount;
}
static Set<List<Integer>> countFourSum(int[] a, int target)
{
    Set<List<Integer>> result = new HashSet<>();
    Arrays.sort(a);
    for(int i = 0; i < a.length; ++i)
    {
        for(int j = i + 1; j < a.length; ++j)
        {
            int k = j + 1;
            int l = a.length - 1;
            while(k < l)
            {
                int sum = a[i] + a[j] + a[k] + a[l];
                if(sum == target)
                {
                    result.add(Arrays.asList(a[i], a[j], a[k],a[l]));
                    k++;
                    l--;
                }
                else if(sum < target)
                {
                    k++;
                }
                else
                {
                    l--;
                }
            }
        }
    }
    return result;
}
static List<Integer> threeSumClosestButLess(int[] a, int target)
{
    List<Integer> result = new ArrayList<>();
    Arrays.sort(a);
    int min = Integer.MAX_VALUE;
    for(int i = 0; i < a.length; ++i)
    {
        int j = i + 1;
        int k = a.length - 1;
        while (j < k)
        {
            int sum = a[i] + a[j] + a[k];
            int diff = target - sum;
            if(diff == 0)
            {
                result = Arrays.asList(a[i], a[j], a[k]);
                return result;
            }
            if(diff > 0)
            {
                if(diff < min)
                {
                    min = diff;
                    result = Arrays.asList(a[i], a[j], a[k]);
                }
            }
            if(sum < target)
            {
                j++;
            }
            else
            {
                k--;
            }
        }
    }
    return result;
}
static int numberOfSubarraySums(int[] a, int target)
{
    // Count number of sub-arrays that add to a given sum
    // For input: new int[] {9, 4, 20, 3, 10, 5}, target = 33
    // 2 subarrays [9, 4, 20], [20, 3, 10] add up to 33
    int count = 0;
    for(int i = 0; i < a.length; ++i)
    {
        int sum = a[i];
        for(int j = i + 1; j < a.length; ++j)
        {
            if(sum == target)
            {
                count++;
                break;
            }
            sum += a[j];
        }
    }
    return count;
}
static int lengthShortestSubarrayExceedingTarget(int[] a, int target)
{
    int minLength = Integer.MAX_VALUE;
    for(int i = 0; i < a.length; ++i)
    {
        if(a[i] > target)
        {
            return 1;
        }
        int sum = a[i];
        for(int j = i + 1; j < a.length; ++j)
        {
            sum += a[j];
            if(sum > target)
            {
                minLength = Math.min(minLength, j - i + 1);
            }
        }
    }
    return minLength == Integer.MAX_VALUE ? -1 : minLength;
}	static boolean testsPass()
{
    int[] a1 = {9, 1, 8, 2, 7, 3, 6, 4, 5};
    boolean check = countTwoSum(a1, 10) == 4;
    if(!check)
    {
        return  false;
    }
    check = countTwoSumWithSet(a1, 10) == 4;
    if(!check)
    {
        return  false;
    }
    int[] a2 = {1, 2, 3, 4, 3, 4, 5, -2};
    Set<List<Integer>> result = countFourSum(a2, 10);
    check = result.size() == 2 && result.contains(Arrays.asList(-2, 3, 4, 5)) &&
            result.contains(Arrays.asList(1, 2, 3, 4));
    if(!check)
    {
        return  false;
    }
    check = numberOfConsecutiveSubarraySums(new int[] {9, 4, 20, 3, 10, 5}, 33) == 2;
    if(!check)
    {
        return  false;
    }
    check = Arrays.equals(new int[] {2, 6, 9},
            threeSumClosestButLess(new int[] {4, 1, 8, 3, 6, 2, 9}, 17));
    if(!check)
    {
        return  false;
    }
    check = lengthShortestSubarrayExceedingTarget(new int[] {1, 4, 45, 6, 0, 19}, 51) == 3;
    if(!check)
    {
        return  false;
    }
    check = lengthShortestSubarrayExceedingTarget(new int[] {1, 11, 100, 1, 0, 200, 3, 2, 1, 250}, 299) == 4;
    if(!check)
    {
        return  false;
    }
    return true;
}

DuplicatesAndMissing
missingNumberInSortedConsecutiveArray
duplicateInRange_1_to_N_1
duplicateInRange_0_to_N_2
removeAllDuplicates
removeAllDuplicatesWithStreams
findLonelyNumber
DuplicatesAndMissing	Tests
static int missingNumberInSortedConsecutiveArray(int[] a)
{
    int startVal = a[0], endVal = a[a.length - 1];
    int expectedSum = endVal * (endVal + 1) / 2 - startVal * (startVal - 1) / 2;
    int actualSum = Arrays.stream(a).sum();
    return expectedSum - actualSum;
}
static int duplicateInRange_1_to_N_1(int[] a)
{
    // {4, 2, 1, 3, 2};
    int n = a.length;
    int expectedSum = (n - 1) * n / 2;
    int actualSum = Arrays.stream(a).sum();
    return actualSum - expectedSum;
}
static int duplicateInRange_0_to_N_2(int[] a)
{
    // {0, 2, 1, 3, 2}
    int n = a.length;
    int expectedSum = (n - 2) * (n - 1) / 2;
    int actualSum = Arrays.stream(a).sum();
    return actualSum - expectedSum;
}
static int[] removeAllDuplicates(int[] a)
{
    if(a == null || a.length < 2)
    {
        return a;
    }
    int pos = 1;
    for(int i = 1; i < a.length; ++i)
    {
        int j;
        for(j = 0; j < pos; ++j)
        {
            if(a[i] == a[j])
            {
                break;
            }
        }
        if(j == pos)
        {
            a[pos++] = a[i];
        }
    }
    return Arrays.copyOf(a, pos);
}
static int[] removeAllDuplicatesWithStreams(int[] a)
{
    return Arrays.stream(a).distinct().toArray();
}
static int findLonelyNumber(int[] a)
{
    int v = a[0];
    for(int i = 1; i < a.length; ++i)
    {
        v ^= a[i];
    }
    return v;
}	static boolean testsPass()
{
    boolean check = missingNumberInSortedConsecutiveArray(new int[] {4, 5, 6, 8, 9, 10, 11, 12, 13, 14}) == 7;
    if(!check)
    {
        return false;
    }
    check = duplicateInRange_1_to_N_1(new int[] {4, 2, 1, 3, 2}) == 2;
    if(!check)
    {
        return false;
    }
    check = duplicateInRange_0_to_N_2(new int[] {0, 2, 1, 3, 2}) == 2;
    if(!check)
    {
        return false;
    }
    check = Arrays.equals(new int[] {0, 1, 2}, removeAllDuplicates(new int[] {0, 1, 0, 0, 0, 1, 1, 2, 0, 1}));
    if(!check)
    {
        return false;
    }
    check = Arrays.equals(new int[] {0, 1, 2}, removeAllDuplicatesWithStreams(new int[] {0, 1, 0, 0, 0, 1, 1, 2, 0, 1}));
    if(!check)
    {
        return false;
    }
    check = findLonelyNumber(new int[] {0, 1, 2, 3, 0, 1, 3}) == 2;
    if(!check)
    {
        return false;
    }
    return true;
}

Fibonacci
fibonacci
Fibonacci	Tests
static int fibonacci(int n)
{
    // n: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
    //f(n): 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
    if(n < 0)
    {
        return -1;
    }
    if(n < 2)
    {
        return n;
    }
    int[] a = new int[n + 1];
    a[0] = 0;
    a[1] = 1;
    for(int i = 2; i <= n; ++i)
    {
        a[i] = a[i - 1] + a[i - 2];
    }
    return a[n];
}	static boolean testsPass()
{
    boolean check = fibonacci(14) == 377;
    if(!check)
    {
        return false;
    }
    return true;
}


KthElement
getSecondMax
getSecondMaxWithStreams
getKthLargestWithSort
getKthLargestWithStreamsUsingSkip
getKthLargestWithStreamsUsingLimit
getKthSmallestWithStreamsUsingSkip
getKthSmallestWithStreamsUsingLimit
KthElement	Tests
static int getSecondMax(int [] a)
{
    int max = Integer.MIN_VALUE, secondMax = Integer.MIN_VALUE;
    for(int v : a)
    {
        if(v > max)
        {
            secondMax = max;
            max = v;
        }
        else if(v > secondMax)
        {
            secondMax = v;
        }
    }
    return secondMax;
}
static int getSecondMaxWithStreams(int [] a)
{
    return Arrays.stream(a)
            .boxed()
            .sorted(Comparator.reverseOrder())
            .mapToInt(x -> x)
            .limit(2)
            .toArray()[1];
}
static int getKthLargestWithSort(int[] a, int k)
{
    Arrays.sort(a);
    return a[a.length - k];
}
static int getKthLargestWithStreamsUsingSkip(int[] a, int k)
{
    return Arrays.stream(a).sorted().skip(a.length - k).toArray()[0];
}
static int getKthLargestWithStreamsUsingLimit(int[] a, int k)
{
    return Arrays.stream(a)
            .boxed()
            .sorted(Comparator.reverseOrder())
            .mapToInt(x -> x)
            .limit(k)
            .toArray()[k - 1];
}
static int getKthSmallestWithStreamsUsingSkip(int[] a, int k)
{
    return Arrays.stream(a).sorted().skip(k - 1).toArray()[0];
}
static int getKthSmallestWithStreamsUsingLimit(int[] a, int k)
{
    return Arrays.stream(a).sorted().limit(k).toArray()[k - 1];
}	static boolean testsPass()
{
    boolean check = getKthLargestWithSort(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 1) == 9;
    if(!check)
    {
        return false;
    }
    check = getKthLargestWithSort(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 4) == 6;
    if(!check)
    {
        return false;
    }
    check = getKthLargestWithStreamsUsingSkip(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 1) == 9;
    if(!check)
    {
        return false;
    }
    check = getKthLargestWithStreamsUsingSkip(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 4) == 6;
    if(!check)
    {
        return false;
    }
    check = getKthLargestWithStreamsUsingLimit(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 4) == 6;
    if(!check)
    {
        return false;
    }
    check = getKthSmallestWithStreamsUsingLimit(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 4) == 4;
    if(!check)
    {
        return false;
    }
    check = getKthSmallestWithStreamsUsingSkip(new int[] {9, 3, 2, 7, 5, 8, 1, 6, 4}, 4) == 4;
    if(!check)
    {
        return false;
    }
    check = getSecondMax(new int[] {9, 8, 7, 6, 5, 4, 3, 2, 1}) == 8;
    if(!check)
    {
        return false;
    }
    check = getSecondMaxWithStreams(new int[] {9, 8, 7, 6, 5, 4, 3, 2, 1}) == 8;
    if(!check)
    {
        return false;
    }
    return true;
}

MaxDifference
maxDifference
maxDifferenceWithStreams
MaxDifference	Tests
static int maxDifference(int[] a)
{
    if (a == null || a.length == 0)
    {
        return -1;
    }
    int min = a[0], max = a[0];
    for (int i = 1; i < a.length; ++i)
    {
        min = Math.min(min, a[i]);
        max = Math.max(max, a[i]);
    }
    return max - min;
}
static int maxDifferenceWithStreams(int[] a)
{
    return Arrays.stream(a).max().getAsInt() - Arrays.stream(a).min().getAsInt();
}	static boolean testsPass()
{
    int[] a = {6, -5, 0, 7, 25, 14, -4, 18};
    return maxDifference(a) == 30 && 
           maxDifferenceWithStreams(a) == 30;
}


MaxSumInArray
maxSumInArray1
maxSumInArray2
MaxSumInArray	Tests
static int maxSumInArray(int[] a)
{
    int sum = 0, maxSum = 0;
    for(int v : a)
    {
        sum += v;
        if(sum > maxSum)
        {
            maxSum = sum;
        }
        if(sum < 0)
        {
            sum = 0;
        }
    }
    return maxSum;
}
static int maxSumInArray2(int[] a)
{
    int sum = 0, maxSum = 0;
    for (int v : a)
    {
        sum += v;
        if (sum > maxSum)
        {
            maxSum = sum;
        }
        if (sum < 0)
        {
            sum = 0;
        }
    }
    return maxSum;
}	static boolean testsPass()
{
    int[] a = {-4, 3, 2, 7, -8, 11, 1, -3};
    boolean check = maxSumInArray1(a) == 16 && maxSumInArray2(a) == 16;
    if(!check)
    {
        return false;
    }
    return true;
}


MedianTwoSortedArrays	Tests
static double medianWithoutCreatingArrays(int [] a, int [] b)
{
    int len = a.length + b.length;
    int mid = len / 2;
    int aPos = 0, bPos = 0;
    int val1 = 0, val2 = 0;
    while(aPos + bPos <= mid)
    {
        val1 = val2;
        if(aPos < a.length && bPos < b.length)
        {
            if(a[aPos] < b[bPos])
            {
                val2 = a[aPos++];
            }
            else
            {
                val2 = b[bPos++];
            }
        }
        else if(aPos < a.length)
        {
            val2 = a[aPos++];
        }
        else
        {
            val2 = b[bPos++];
        }
    }
    if(len % 2 == 1)
    {
        return val2;
    }
    else
    {
        return (val1 + val2) / 2.0;
    }
}
public static double medianWithCreatingArrays(int [] a, int [] b)
{
    int[] c = MergeSortedArrays.mergeSortedArrays(a, b);
    if(c.length % 2 == 1)
    {
        return c[c.length / 2];
    }
    else
    {
        int first = c[c.length / 2 - 1];
        int second = c[c.length / 2];
        return (first + second) / 2.0;
    }
}	static boolean testsPass()
{
    int[] a = {1, 3, 5, 7, 9};
    int[] b = {2, 4, 6, 8};
    int[] c = {1, 3, 5, 7};
    double val1 = medianWithCreatingArrays(a, b);
    double val2 = medianWithCreatingArrays(c, b);
    double val3 = medianWithoutCreatingArrays(a, b);
    double val4 = medianWithoutCreatingArrays(c, b);
    return 5.0 == val1 && 4.5 == val2 && 5.0 == val3 && 4.5 == val4;
}


MergeSortedArrays	Tests
static int[] mergeSortedArrays(int[] a, int[] b)
{
    int[] c = new int[a.length + b.length];
    int aPtr = 0, bPtr = 0, cPtr = 0;
    while(aPtr < a.length && bPtr < b.length)
    {
        if(a[aPtr] < b[bPtr])
        {
            c[cPtr++] = a[aPtr++];
        }
        else
        {
            c[cPtr++] = b[bPtr++];
        }
    }
    while(aPtr < a.length)
    {
        c[cPtr++] = a[aPtr++];
    }
    while(bPtr < b.length)
    {
        c[cPtr++] = b[bPtr++];
    }
    return c;
}
static int[] mergeSortedArraysWithPriorityQueue(int[] a, int[] b)
{
    PriorityQueue<Integer> pq = new PriorityQueue<>(
            Arrays.stream(a).boxed().collect(Collectors.toList()));
    pq.addAll(Arrays.stream(b).boxed().collect(Collectors.toList()));
    int[] result = new int[a.length + b.length];
    int idx = 0;
    while(!pq.isEmpty())
    {
        result[idx++] = pq.poll();
    }
    return result;
}	static boolean testsPass()
{
    int[] a = {1, 3, 5, 7, 9};
    int[] b = {2, 4, 6, 8};
    int[] c = mergeSortedArrays(a, b);
    int[] d = mergeSortedArraysWithPriorityQueue(a, b);
    return Arrays.equals(c, new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9}) &&
            Arrays.equals(d, new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9});
}


MinAreaRectangle	Tests
static int minArea(int[][] points)
{
// Given a set of points in the x and y axes,
// determine the minimum area of a rectangle formed from these points,
// with sides parallel to the x and y axes.
//
// If there is a rectangle, there should be 2 points for the diagonal (x1, y1) and (x2, y2).
// There should also be two other points corresponding to the two diagonal points: (x1, y2) and (x2, y1).
// Filter out entries that do not have at least 2 y coordinates
           
    Map<Integer,Set<Integer>> map = Arrays.stream(points).collect(
            HashMap::new,
            (m, item) -> m.computeIfAbsent(item[0], x -> new HashSet<>()).add(item[1]),
            HashMap::putAll);
    map = map.entrySet().stream()
            .filter(e -> e.getValue().size() > 1)
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    int minArea = Integer.MAX_VALUE;
    for(int i = 0; i < points.length - 1; ++i)
    {
        for(int j = i + 1; j < points.length; ++j)
        {
            int x1 = points[i][0];
            int y1 = points[i][1];
            int x2 = points[j][0];
            int y2 = points[j][1];
            if(x1 != x2 && y1 != y2 && map.containsKey(x1) && map.containsKey(x2))
            {
                if(map.get(x1).contains(y1) && map.get(x2).contains(y2))
                {
                    int area = Math.abs((x1 - x2) * (y1 - y2));
                    minArea = Math.min(minArea, area);
                }
            }
        }
    }
    return minArea;
}	static boolean testsPass()
{
    int[][] points = {
            {2, 1},
            {2, 3},
            {3, 5},
            {5, 1},
            {5, 3},
            {7, 2},
            {8, 5},
            {2, 4},
            {2, 5},
            {5, 4},
            {5, 5},
    };
    return minArea(points) == 3;
}


MostCommonInRange	Tests
static int mostCommon(int[][] ranges)
{
 // Given a set of consecutive number ranges. Find the most common number.
 // We can be assured that second dimension is >= than first
 // Given: {{1, 6}, {2, 5}, {3, 8}, {5, 7}}
 // The most popular number would be 5
 // Same approach can be used to figure out which people are alive on a give year, for Example:
 // Person Year Born Year Died
 // ---------------------------
 // A 1958 1988
 // B 1961 1999
 // .. ... ...
    
    int maxVal = Arrays.stream(ranges).flatMapToInt(Arrays::stream).max().getAsInt();
    int[] check = new int[maxVal + 1];
    int max = Integer.MIN_VALUE, maxIndex = Integer.MIN_VALUE;
    for(int[] range : ranges)
    {
        for(int i = range[0]; i <= range[1]; ++i)
        {
            check[i]++;
            if(check[i] > max)
            {
                max = check[i];
                maxIndex = i;
            }
        }
    }
    return maxIndex;
}	static boolean testsPass()
{
    int[][] data = {{1, 6}, {2, 5}, {3, 8}, {5, 7}};
    return mostCommon(data) == 5;
}


Partition	Tests
static void negativeBeforePositive(int[] a)
{
    int start = 0, end = a.length - 1;
    while(start < end)
    {
        while(a[start] < 0) start++;
        while(a[end] > 0) end--;
        if(start < end)
        {
            int temp = a[start];
            a[start++] = a[end];
            a[end--] = temp;
        }
    }
}
static int[] negativeBeforePositiveWithStreams(int[] a)
{
    Map<Boolean, List<Integer>> map = Arrays.stream(a)
                                      .boxed()
                                      .collect(Collectors.partitioningBy(x -> x > 0));
    int[] pos = map.get(true).stream().mapToInt(i -> i).toArray();
    int[] neg = map.get(false).stream().mapToInt(i -> i).toArray();
    int[] result = new int[a.length];
    System.arraycopy(neg, 0, result, 0, neg.length);
    System.arraycopy(pos, 0, result, neg.length, pos.length);
    return result;
}	static boolean testsPass()
{
    int[] a = {4, 5, -1, -2, 7, -5, -9};
    negativeBeforePositive(a);
    int[] b = negativeBeforePositiveWithStreams(new int[] {4, 5, -1, -2, 7, -5, -9});
    return Arrays.equals(a, new int[] {-9, -5, -1, -2, 7, 5, 4}) &&
            Arrays.equals(b, new int[] {-1, -2, -5, -9, 4, 5, 7});
}


PushZeros	Tests
static void pushToBack(int[] a)
{
    int pos = 0;
    for(int v : a)
    {
        if(v != 0)
        {
            a[pos++] = v;
        }
    }
    while (pos < a.length)
    {
        a[pos++] = 0;
    }
}
static int[] pushToBackWithStreams(int[] a)
{
    int [] nonZeros = Arrays.stream(a).filter(i -> i != 0).toArray();
    int numZeros = (int)Arrays.stream(a).filter(i -> i == 0).count();
    int[] result = new int[a.length];
    System.arraycopy(nonZeros, 0, result, 0, nonZeros.length);
    Arrays.fill(result, nonZeros.length, nonZeros.length + numZeros, 0);
    return result;
}
static void pushToFront(int[] a)
{
    int pos = a.length - 1;
    for(int i = a.length - 1; i >= 0; --i)
    {
        if(a[i] != 0)
        {
            a[pos--] = a[i];
        }
    }
    while(pos >= 0)
    {
        a[pos--] = 0;
    }
}
static int[] pushToFrontWithStreams(int[] a)
{
    int [] nonZeros = Arrays.stream(a).filter(i -> i != 0).toArray();
    int numZeros = (int)Arrays.stream(a).filter(i -> i == 0).count();
    int[] result = new int[a.length];
    Arrays.fill(result, 0, numZeros, 0);
    System.arraycopy(nonZeros, 0, result, numZeros, nonZeros.length);
    return result;
}	static boolean testsPass()
{
    int[] a = {1, 2, 0, 3, 0, 4, 5, 0, 6};
    pushToBack(a);
    boolean check = Arrays.equals(a, new int[] {1, 2, 3, 4, 5, 6, 0, 0, 0});
    if(!check)
    {
        return false;
    }
    a = new int[]{1, 2, 0, 3, 0, 4, 5, 0, 6};
    pushToFront(a);
    check = Arrays.equals(a, new int[] {0, 0, 0, 1, 2, 3, 4, 5, 6});
    if(!check)
    {
        return false;
    }
    a = new int[]{1, 2, 0, 3, 0, 4, 5, 0, 6};
    a = pushToBackWithStreams(a);
    check = Arrays.equals(a, new int[] {1, 2, 3, 4, 5, 6, 0, 0, 0});
    if(!check)
    {
        return false;
    }
    a = new int[]{1, 2, 0, 3, 0, 4, 5, 0, 6};
    a = pushToFrontWithStreams(a);
    return Arrays.equals(a, new int[] {0, 0, 0, 1, 2, 3, 4, 5, 6});
}


RandomInts	Tests
static int[] generateRandomInts(int size, int from, int to)
{
    return new Random().ints(size, from, to).toArray();
}
	static boolean testsPass()
{
    int[] random = generateRandomInts(5, 3, 9);
    boolean check = random.length == 5;
    if(!check)
    {
        return false;
    }
    check = random[0] >= 3 && random[0] <= 9 && random[1] >= 3 && 
            random[1] <= 9 && random[2] >= 3 && random[2] <= 9;
    if(!check)
    {
        return false;
    }
    return true;
}


RandomSubset	Tests
static int[] generateRandomSubset(int[] a, int m)
{
    int [] result = new int[m];
    for(int i = 0; i < m; ++i)
    {
        int randomIdx = randomRange(i, a.length);
        result[i] = a[randomIdx];
        a[randomIdx] = a[i];
    }
    return result;
}	static void main(String... args)
{
    int[] cards = IntStream.rangeClosed(1, 52).toArray();
    cards = RandomSubset.generateRandomSubset(cards, 6);
    System.out.println(Arrays.toString(cards));
}


RemoveValue	Tests
static int[] removeValue(int[] a, int val)
{
    int pos = 0;
    for(int v : a)
    {
        if(v != val)
        {
            a[pos++] = v;
        }
    }
    return Arrays.copyOf(a, pos);
}
static int[] removeValueWithStreams(int[] a, int val)
{
    return Arrays.stream(a).filter(x -> x != val).toArray();
}
static int[] removeValueWithIterator(int[] a, int val)
{
    List<Integer> list = Arrays.stream(a).boxed().collect(Collectors.toList());
    Iterator<Integer> iter = list.iterator();
    while(iter.hasNext())
    {
        if(iter.next() == val)
        {
            iter.remove();
        }
    }
    return list.stream().mapToInt(i -> i).toArray();
}	static boolean testsPass()
{
    int[] a = removeValue(new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1}, 5);
    int[] b = removeValueWithStreams(new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1}, 5);
    int[] c = removeValueWithIterator(new int[]{9, 8, 7, 6, 5, 4, 3, 2, 1}, 5);
    return Arrays.equals(a, new int[] {9, 8, 7, 6, 4, 3, 2, 1}) &&
            Arrays.equals(b, new int[] {9, 8, 7, 6, 4, 3, 2, 1}) &&
            Arrays.equals(c, new int[] {9, 8, 7, 6, 4, 3, 2, 1});
}


Reverse	Tests
private static void reverse(int[] a, int start, int end)
{
    while(start < end)
    {
        int temp = a[start];
        a[start++] = a[end];
        a[end--] = temp;
    }
}
static void reverseInPlace(int[] a)
{
    int start = 0, end = a.length - 1;
    while(start < end)
    {
        int temp = a[start];
        a[start++] = a[end];
        a[end--] = temp;
    }
}
static int[] reverseWithStreams(int... a)
{
    List<Integer> list = Arrays.stream(a).boxed().collect(Collectors.toList());
    Collections.reverse(list);
    return list.stream().mapToInt(x -> x).toArray();
}
static void rotate(int[] a, int m)
{
    if(a == null || a.length < m)
    {
        return;
    }
    reverse(a, 0, m - 1);
    reverse(a, m, a.length - 1);
    reverse(a, 0, a.length - 1);
}	static boolean testsPass()
{
    int[] a = {1, 2, 3, 4, 5, 6};
    reverseInPlace(a);
    int[] a1 = {1, 2, 3, 4, 5, 6, 7};
    rotate(a1, 3);
    return Arrays.equals(a, new int[] {6, 5, 4, 3 , 2, 1}) &&
            Arrays.equals(reverseWithStreams(1, 2, 3, 4, 5, 6), new int[] {6, 5, 4, 3 , 2, 1}) &&
            Arrays.equals(a1, new int[] {4, 5, 6, 7, 1, 2, 3});
}


ShuffleCards	Tests
static void shuffle(int[] cards)
{
    int len = cards.length;
    for(int i = 0; i < len; ++i)
    {
        int randomIdx = randomRange(i, len);
        int temp = cards[i];
        cards[i] = cards[randomIdx];
        cards[randomIdx] = temp;
    }
}
static int[] shuffleWithStreams(int[] cards)
{
    List<Integer> list = Arrays.stream(cards)
                           .boxed()
                           .collect(Collectors.toList());
    Collections.shuffle(list);
    return list.stream().mapToInt(a -> a).toArray();
}	public static void main(String... args)
{
    int[] cards = IntStream.rangeClosed(1, 10).toArray();
    ShuffleCards.shuffle(cards);
    System.out.println(Arrays.toString(cards));
    cards = IntStream.rangeClosed(1, 10).toArray();
    ShuffleCards.shuffleWithStreams(cards);
    System.out.println(Arrays.toString(cards));
}



