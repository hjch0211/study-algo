/**
 * Time : 10:59
 * Title : BOJ11047 동전
 * Approach : 탐욕 -> 하나의 선택이 최선의 선택이며, 이게 모여도 최선의 선택이 가능
 * Review : 유명
*/
#include <iostream>
#define MAX 1000001
using namespace std;

int n, k; // 동전종류<=10, 합<=1억
int coins[MAX];

int sol(){
    int res = 0;
    int tmp = 0;
    while(tmp != k){
        for(int i = n - 1; i >= 0; i--){
            if(coins[i]+tmp > k) continue;
            else if(coins[i]+tmp == k) return ++res;
            else if(coins[i]+tmp < k) { tmp += coins[i]; res++; break; }
        }
    }
    return res;
}

int main() {
    cin >> n >> k;
    for(int i = 0; i < n; i++) cin >> coins[i];
    cout << sol();
}