#include <bits/stdc++.h>
using namespace std;

// define maximum length of sequence X and Y
#define M 20
#define N 20

// create a 2D-array to store solutions of subproblems
int lookup[M + 1][N + 1];

// Function to find length of Longest Common Subsequence of substring
// X[0..m-1] and Y[0..n-1]
int LCSLength(string X, string Y, int m, int n)
{
	// return if we have reached the end of either string
	if (m == 0 || n == 0)
		return 0;

	// if sub-problem is seen for the first time, solve it and 
	// store its result in a array
	if (lookup[m][n] == 0)
	{
		// if last character of X and Y matches
		if (X[m - 1] == Y[n - 1])
			lookup[m][n] = LCSLength(X, Y, m - 1, n - 1) + 1;		
		else
		// else if last character of X and Y don't match
		lookup[m][n] = max(LCSLength(X, Y, m, n - 1), LCSLength(X, Y, m - 1, n));
	}	
	// return the subproblem solution from the array
	return lookup[m][n];
}

int main()
{
	string X = "ABCBDAB", Y = "BDCABA";
	cout << "The length of LCS is " << LCSLength(X, Y, X.length(), Y.length());
	return 0;
}
