/**
 * Title : BOJ 1654 랜선 자르기 
 * Approach : Parametric Search
 * Review : 이진 검색 트리, lower, upper 공부하자
*/
#include <iostream>
#include <algorithm>
#define MAX 10000
#define ll long long
using namespace std;

int k, n; //오영식 <= 만, N <= 100만
ll arr[MAX];

ll isTarget(ll mid){
    ll sum = 0;
        for(int i = k-1; i >= 0; i--){
            sum += arr[i]/mid;
            if(sum >= n) return sum;
        }
    return sum;
}

ll sol(){
    ll l = 0;
    ll r = (1 << 31) - 1;
    
    while(l < r){
        ll mid = (l+r+1)/2;
        if(n > isTarget(mid)) r = mid - 1;
        else l = mid;
    }
    return l;
}

int main(){
    cin >> k >> n;
    for(int i = 0; i < k; i ++) cin >> arr[i];
    sort(arr, arr + k);
    cout << sol();
}