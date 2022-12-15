/**
 * Time : 23:50
 * Title : BOJ 2252 줄 세우기
 * Approach : 위상 정렬
 * Review : 위상 정렬 언제 어떻게 쓰면 좋을까
*/
#include <iostream>
#include <vector>
#include <queue>
#define MAX 32001
using namespace std;

int n, m; // 번호 <= 32000, 비교 횟수 <= 10만
vector<int> v[MAX];
int indegree[MAX];

void sol(){
    queue<int> Q;
    for(int i = 1; i <= n; i++){
        if(indegree[i] == 0) Q.push(i);
    }
    while(!Q.empty()){
        int cur = Q.front();
        Q.pop();
        cout << cur << ' ';
        for(int next : v[cur]){
            indegree[next]--;
            if(indegree[next] == 0) Q.push(next);
        }
    }
}

int main(){
    cin >> n >> m;
    for(int i = 0; i < m; i++){
        int a, b;
        cin >> a >> b;
        v[a].push_back(b);
        indegree[b]++;
    }
    sol();
}