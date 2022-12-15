/**
 * Time : 25:04
 * Title : BOJ 11724 트리의 부모 찾기
 * Approach : 링크들 일단 연결하고, dfs?
 * Review : 재귀? 살짝 직관적으로 이해가 안되는데 귀납적으로는 들어맞음ㄴ
*/
#include <iostream>
#include <vector>
#define MAX 100001
using namespace std;

int n;
vector<int> links[MAX];
int parents[MAX];

void sol(int cur){
    for(int i : links[cur]){
        if(parents[cur] == i) continue; // 이미 i를 부모로 보면 continue
        parents[i] = cur; // 그게 아니라면 i의 부모를 cur로 봄 ? 
        sol(i);
    }
}

int main(){
    cin >> n;
    for(int i = 0; i < n - 1; i++) {
        int a,b;
        cin >> a >> b;
        links[a].push_back(b);
        links[b].push_back(a);
    }
    sol(1);
    for(int i = 2; i <= n; i++) cout << parents[i] << '\n';
}