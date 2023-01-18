#include <iostream>
#include <algorithm>
#define MAX 100000
using namespace std;

int n, m; //<=10만, <=20억
int arr[MAX];
int minR = 1<<30;

int sol() {
    sort(arr, arr+n);
    int e = 0;
    for(int s = 0; s < n; s++){
        while(e < n && arr[e] - arr[s] < m) e++;
        if(e == n) break;
        minR = min(minR, arr[e] - arr[s]);
    }
    return minR;
}

int main(){
    cin >> n >> m;
    for(int i = 0; i < n; i++) cin >> arr[i];
    cout << sol();
}