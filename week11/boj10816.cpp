#include <iostream>
#include <algorithm>
#define MAX 500000
using namespace std;

int n, m; // <= 50만
int arr[MAX];
int target[MAX];

int bSearch(int l, int r, int t){
    if(r < l) return 0;
    
    int mid = (l + r) / 2;
    if(arr[mid] > t) return bSearch(l, mid - 1, t);
    else if(arr[mid] < t) return bSearch(mid + 1, r, t);
    else {
        int tmp = mid;
        while(tmp > 0 && arr[tmp - 1] == t){
            tmp -= 1;
        }
        int _tmp = tmp;
        while(arr[_tmp+1] == t) _tmp += 1;
        return _tmp - tmp + 1;
    }
}

int sol(int t){
    return bSearch(0, n - 1, t);
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++) cin >> arr[i];
    sort(arr, arr + n);
    cin >> m;
    for(int i = 0; i < m; i++) cin >> target[i];
    for(int i = 0; i < m; i++) cout << sol(target[i]) << " ";
}