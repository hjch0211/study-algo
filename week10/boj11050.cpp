#include <iostream>
using namespace std;


int n, k;

int facto(int f){
    int res = 1;
    for(int i = 1; i <= f; i++) res *= i;
    return res;
}

int sol(){
    return facto(n) / facto(n - k) / facto(k);
}

int main() {
    cin >> n >> k;
    cout << sol();
}