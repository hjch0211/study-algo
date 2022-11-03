/**
 * Time : 32:27 -> 쉬웠는데 문제 잘못읽고 삽질
 * Title : BOJ 9095
 * Approach : 점화식으로 풀어야 될 것같았음. 1부터 나열
 * Review : 케이스를 나열하다 보면 점화식이 보임. 귀납적 사고 ㄱ
*/
// 1 : 1 : 1
// 2 : 2, 11 : 2
// 3 : 3, f(2)1, f(1)2 : 4
// 4 : f(1)3, f(2)2, f(1)1 : 7
// 5 : 
#include <iostream>
#define MAX 12
using namespace std;

int t; // 테스트 수
int n; // 1<= n<= 11, 1,2,3으로 n만들기
int dp[MAX];
int result[MAX];

int sol(){
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(int i = 4; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    return dp[n];
}

int main() {
    cin >> t;
    for(int i = 0; i < t; i++){
        cin >> n;
        result[i] = sol();
    }
    for(int i = 0; i < t; i++)
        cout << result[i] << "\n";
}