#include <iostream>
using namespace std;

int arr[5] = {4,3,2,1,5};
int tmp[5];

void merge(int l, int r) {
    int mid = (l + r) / 2;
    int _l = l;
    int _r = mid;

    for(int i = l; i < r; i++){
        if(_l == mid) tmp[i] = arr[_r++];
        else if(_r == r) tmp[i] = arr[_l++];
        else if(arr[_l] <= arr[_r]) tmp[i] = arr[_l++];
        else tmp[i] = arr[_r++];
    }
    for(int i = l; i < r; i++) arr[i] = tmp[i];
}

// l부터 r전까지
void mergeSort(int l, int r) {
    if(r == l + 1) return;

    int mid = (l + r) / 2;
    mergeSort(l, mid);
    mergeSort(mid, r);
    merge(l, r);
}

int main(){
    
}