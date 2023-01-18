/**
 * Time : 
 * Title : boj1931 회의실 배정 
 * Approach : 정렬을 통해서, 탐욕
 * Review : 
*/
#include <iostream>
#include <algorithm>
#define MAX 100001
using namespace std;

int n; // 회의수 <= 10만
pair<int, int> conf[MAX]; // [끝, 시작]

int sol(){
    sort(conf, conf+n); // conf.first를 기준으로 정렬하는 듯
    int res = 0;
    int t = 0;
    for(int i = 0; i < n; i++){
        if(t > conf[i].second) continue;
        res++;
        t = conf[i].first;
    }
    return res;
    //1 4
    //3 5
    //0 6
    //5 7
    //3 8
    //5 9
    //6 10
    //8 11
    //8 12
    //2 13
    //12 14
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++)
        cin >> conf[i].second >> conf[i].first;
    cout << sol();
}