#include <cstdio>
#include <cmath>

void solution(int N, int s, int e) {
    // Base condition
    if(N == 1) {
        printf("%d %d", s, e );
        printf("\n");
        return;
    };
    // [!] s도 e도 아닌 기둥은 6-s-e
    // 1. 1번 과정
    solution(N-1, s, 6-s-e);
    // 2. 2번 과정
    printf("%d %d", s, e);
    printf("\n");
    // 3. 3번 과정
    solution(N-1, 6-s-e, e);
    
}

int main(){
    int N;
    scanf("%d", &N);
    // 이 것도 귀납을 통해 + pow 형식 지정자는 double로 해야하는 듯
    int powed = pow(2,N)-1;
    printf("%d", powed);
    printf("\n");
    solution(N, 1, 3);
}