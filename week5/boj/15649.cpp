#include <cstdio>

// [?] main함수만 함수안에서 함수 작성 가능? + JS처럼 호이스팅 안됨
void backT(int cnt,int N, int M, int* arr, bool* isUsed) {
    if(cnt == M) {
        for(int i = 0; i < M; i++) printf("%d ", arr[i]);
        printf("\n");
        return;
    }
    
    for(int i = 1; i <= N; i++){
        if(!isUsed[i]){
            isUsed[i] = true;
            arr[cnt] = i;
            backT(cnt + 1, N, M, arr, isUsed);
            // [!] 역추적
            isUsed[i] = false;
        }
    }
}
// 3 2 1,2
void solution(int N, int M){
    // [!] 아니 배열에 N과 M을 못넣네?
    int arr[10];
    // 그냥 N까지의 수 중, 사용한 수를 표시해주는게 좋은 듯
    bool isUsed[10] = {false,};

    backT(0, N, M, arr, isUsed);
    
}

int main () {
    int N, M;
    scanf("%d %d", &N, &M);
    
    solution(N,M);
}