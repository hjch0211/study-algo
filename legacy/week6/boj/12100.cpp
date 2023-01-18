#include <cstdio>
#include <vector>
#define MAX 5
// 블록이 추가되는 경우는 없음
// 2 2 2 2의 경우 한 번만 합쳐지므로 4 4가 됨
// 2 2 2의 경우 먼저 이동하려는게 합쳐짐
// N*N 보드와 상태가 주어졌을 때, 최대 5번 이동해서 만들 수 있는 최댓값
// 최대 5번이므로 완전 탐색
int n; //보드 크기
int board[21][21];
int tmpBrd[21][21];
int minRes = 0;
int moveCnt = 0;

// 왼 위 오른 아래 1 2 3 4
void rotate(int dir){
    // 보드에 빈 칸들은? 0
    // 배열 3개로 나누기
    if(dir == 1) return;
    for(int c = 0; c < n; c++){
        for(int r = 0; r < n; r++){
            // [!] 딱 생각이 안나면, 무조건 n=1)부터 구해보면서 패턴을 파악해보기
            tmpBrd[r][c] = board[c][n-1-r];
        }
    }
    rotate(--dir);
}

void sort (){
    for(int r = 0; r < n; r++){
        for(int c = 0; c < n; c++){
            int tc = c;
            while(tmpBrd[r][c] == 0){
                tmpBrd[r][c] = tmpBrd[r][tc+1];
                tmpBrd[r][tc+1] = 0;
            }
        }
    }
}

void merge(int tmp, int r, int c){
    if(c == n) return;

    // if(tmpBrd[r][c] == 0) merge(tmp, r, c+1); //?
    if(tmpBrd[r][c] != tmp) tmp = tmpBrd[r][c];
    else {
        tmpBrd[r][c-1] = 2 * tmpBrd[r][c];
        tmpBrd[r][c] = 0;
    }
}

int sol(){
    //base condition
    // + board에서 최대값 찾아서 minRes에 비교해서 넣어주기
    if(moveCnt == MAX) return minRes;
    moveCnt++;
    for(int dir = 1; dir <= MAX; dir++){
        rotate(dir);
        sort();
        break;
    }

    for(int r = 0; r < n; r++){
        for(int c = 0; c < n; c++){
            printf("%d", tmpBrd[r][c]);
        }
    }
    return 1;
}

int main(){
    scanf("%d", &n);
    for(int r = 0; r < n; r++){
        for(int c = 0; c < n; c++){
            scanf("%d", &board[r][c]);
            tmpBrd[r][c] = board[r][c];
        }
    }
    sol();
}