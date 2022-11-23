/**
 * Time : 15:19
 * Title : BOJ 1920 수찾기
 * Approach : 이진 탐색
 * Review : 쉬움
*/
#include <iostream>
#include <algorithm>
#define MAX 100000
using namespace std;

int n, m; // <= 10만
int arr[MAX];
int _arr[MAX];

int bsearch(int l, int r, int k){
    if(r < l) return -1;
    
    int m = (l+r) / 2;
    if(arr[m] == k) return m;
    else if(arr[m] > k) return bsearch(l, m-1, k);
    else return bsearch(m+1, r, k);
}

int sol(int k) {
    int res = bsearch(0, n-1, k);
    if(res == -1) return 0;
    else return 1;
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++) cin >> arr[i];
    sort(arr, arr + n);
    cin >> m;
    for(int i = 0; i < m; i++) {
        cin >> _arr[i];
    }
    for(int i = 0; i < m; i++) {
        cout << sol(_arr[i]) << "\n";
    }
}