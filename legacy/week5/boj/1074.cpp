#include <cstdio>
#include <cmath>

// r행 c열은 몇 번째 방문 하는 지
int solution(int N, int r, int c) {
    // based condition
    if(N==0) return 0;
    if(N==1) return 2*r + c;
    
    int half = pow(2,N-1);
    //사분면에 따라 분기 처리
    if(r < half && c < half) return solution(N-1, r, c);
    else if(r < half && c >= half ) return pow(half,2) + solution(N-1, r, c-half);
    else if(r >= half && c < half ) return pow(half,2) * 2 + solution(N-1, r-half, c);
    else if(r >= half && c >= half ) return pow(half,2) * 3 + solution(N-1, r-half, c-half);
    
}

int main () {
    int N, r, c;
    scanf("%d %d %d", &N, &r, &c );
    printf("%d", solution(N, r, c));
}