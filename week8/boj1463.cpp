/**
 * Time : 23:20 -> 점화식 쉽게 구했는데, 예외가 있었음
 * Title : boj 1463 1로 만들기
 * Approach : 1부터 10까지 나열하니까 알았음
 * Review : 10이 처음 생각했던 것에서 예외가 있었음 -> [!] 적어도 테스트 케이스는 다 돌려보자
*/
//1 : 0
//2 -> 1 : 1
//3 -> 1 : 1
//4 -> 2 -> 1 : 2
//5 -> 4 -> 2 -> 1 : 3
//6 -> 2 -> 1 : 2
//7 -> 6 -> 2 -> 1 : 3
//8 -> 4 -> 2 -> 1 : 3
//9 -> 3 -> 1 : 2
//10 -> 9 -> 3 -> 1 : 3
#include <iostream>
#include <algorithm>
#define MAX 1000002
using namespace std;

int n; // 10^6보다 작은 수
int dp[MAX];

int sol() {
    dp[1] = 0;
    for(int i = 2; i <= 3; i++) dp[i] = 1;
    for(int i = 4; i <= n; i++){
        int three = MAX;
        int two = MAX;
        int one = MAX;
        if(i % 3 == 0) three = dp[i / 3] + 1;
        if(i % 2 == 0) two = dp[i / 2] + 1;
        one = dp[i - 1] + 1;
        dp[i] = min(min(one, two), three);
    }
    return dp[n];
}

int main() {
    cin >> n;;
    cout << sol();
}