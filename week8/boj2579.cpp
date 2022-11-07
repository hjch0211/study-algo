/**
 * Time : 46:35 실패 -> 반례를 못 찾겠음
 * Title : boj 2579 계단 오르기
 * Approach : 탐욕x -> dp?
 * Review : 틀리면, 임의로 테스트 케이스 만들어서 해야할 듯
*/
#include <iostream>
#include <cmath>
#define MAX 301
using namespace std;
int n; // 계단 수 <= 300
int stairs[MAX];
int dp[MAX][2]; // [k-2를 밟고 왔을 때의 최대, k-1을 밟고 왔을 때의 최대] -> 처음 풀 때도 생각났었는데 시간이 지나서 그냥 바킹독 봄
int sol(){
    dp[1][0] = 0;
    dp[1][1] = stairs[1];
    dp[2][0] = stairs[1] + stairs[2];
    dp[2][1] = stairs[2];
    for(int i = 3; i <= n; i++){
        dp[i][0] = dp[i - 1][1] + stairs[i];
        dp[i][1] = max(dp[i - 2][0], dp[i - 2][1]) + stairs[i];
    }
    return max(dp[n][0], dp[n][1]);
}

int main() {
    cin >> n;
    for(int i = 1; i <= n; i++) cin >> stairs[i];
    cout << sol();
}