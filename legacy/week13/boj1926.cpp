#include <iostream>
#include <queue>
#include <vector>
#define P pair<int, int>
using namespace std;

int n,m;
int arr[501][501];
int dx[] = {0,1,0,-1};
int dy[] = {1,0,-1,0};
int cnt = 0;
int maxCnt = 0;

bool check(P cur){
    int x = cur.first;
    int y = cur.second;
    if(x < 0 || y < 0 || x >= n || y >= m) return false;
    else return !!arr[x][y];
}

void sol(int r, int c){
    queue<P> Q;
    Q.push(P(r,c));
    int _cnt = 0;
    arr[r][c] = 0;
    
    while(!Q.empty()){
        P cur = Q.front();
        Q.pop();
        _cnt++;
        
        for(int i = 0; i < 4; i++)
            if(check(P(cur.first + dx[i],cur.second + dy[i]))) {
                Q.push(P(cur.first + dx[i],cur.second + dy[i]));
                arr[cur.first + dx[i]][cur.second + dy[i]] = 0;
            }
    }
    cnt++;
    if(_cnt > maxCnt) maxCnt = _cnt;
}

int main() {
    cin >> n >> m;
    for(int r = 0; r < n; r++){
        for(int c = 0; c < m; c++)
            cin >> arr[r][c];
    }
    for(int r = 0; r < n; r++){
        for(int c = 0; c < m; c++)
            if(arr[r][c]) sol(r,c);
    }
    cout << cnt << '\n' << maxCnt;
}