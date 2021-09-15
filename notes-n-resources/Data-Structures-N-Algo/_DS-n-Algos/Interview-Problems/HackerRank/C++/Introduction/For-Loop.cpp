#include <iostream>
#include <cstdio>
#include <map>
using namespace std;

int main() {
    // Complete the code.
    int a, b;
    cin >> a >> b;
     map <int, string> dict = {
        { 1, "one" },
        { 2, "two" },
        { 3, "three" },
        { 4, "four" },
        { 5, "five" },
        { 6, "six" },
        { 7, "seven" },
        { 8, "eight" },
        { 9, "nine" }
    };
    for(int i = a; i <= b; i++) {
        if(i <= 9) {
            cout << dict.at(i) << endl;
        }
        else if(i > 9 && i % 2 == 0) {
            cout << "even" << endl;
        }
        else {
            cout << "odd" << endl;
        }
    }
    return 0;
}