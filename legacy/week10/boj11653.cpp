#include <iostream>
using namespace std;

int n;

void sol(){
    for(int i = 2; i*i <= n; i++){
        while(n%i == 0){
            cout << i << "\n";
            n = n/i;
        }
    }
    if(n != 1) cout << n;
    return;
}

int main(){
    cin >> n;
    sol();
}