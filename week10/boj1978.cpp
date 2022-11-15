/**
 * Title : BOJ 1978 소수 찾기
 * Approach : 수학 문제
 * Review : 바킹독 참고
*/
#include <iostream>
using namespace std;

int n; // <= 100
int res = 0;

bool sol(int x){
    if(x == 1) return 0;
    for(int i = 2; i*i <= x; i++)
        if(x % i == 0) return 0;
    return 1;
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++){
        int x;
        cin >> x;
        if(sol(x)) res++;
    }
    cout << res;
}