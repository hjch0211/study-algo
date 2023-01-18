#include <iostream>
#include <queue>
#include <vector>
#include <functional>
#define MAX 100000
using namespace std;

int n; // <=10만
int arr[MAX];

class cmp {
public:
    bool operator()(int a, int b){
        if(abs(a) != abs(b)) return abs(a) > abs(b);
        return a > 0 && b < 0;
    }
};

void sol(){
    priority_queue<int, vector<int>, cmp> q;
    for(int i = 0; i < n; i++){
        if(arr[i] == 0) {
            if(q.empty()) cout << "0\n";
            else{
                cout << q.top() << "\n";
                q.pop();
            }
        } else q.push(arr[i]);
    }
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++) cin >> arr[i];
    sol();
}