#include <cstdio>
using ll = long long;

// input이 높으므로 stack overflow 고려
ll solution (ll a, ll b, ll c){
    //base condition
    if(b == 0) return 1;
    if(b == 1) return a % c;
    // c에서 정수끼리의 나눗셈은 정수를 반환
    // [!] 나머지 연산 특성?
    ll val = solution(a, b/2, c);
    if(b % 2 == 0) return val * val % c;
    else if(b % 2 == 1) return val * val % c * a % c ;
}

int main(){
    ll a,b,c;
    scanf("%lld %lld %lld", &a, &b, &c);
    printf("%lld", solution(a,b,c));
}