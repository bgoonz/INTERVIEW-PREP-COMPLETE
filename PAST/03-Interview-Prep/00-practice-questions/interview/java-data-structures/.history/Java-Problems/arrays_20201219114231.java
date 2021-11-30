//Binary Search

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
}
//test----------------------------------------------------------------------------------

static boolean testsPass()
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
