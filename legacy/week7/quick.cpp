#include <iostream>
#include <algorithm>
using namespace std;

int arr[4] = {10, 5, 1, 4};

int quickSort(int l, int r) {
    if(r < l) return;
    int pivot = arr[l];
    int _l = l + 1;
    int _r = r;

    while(1){
        while( _l <= _r && arr[_l] <= pivot) _l++;
        while( _l <= _r && arr[_r] >= pivot) _r--;
        if( _l > _r ) break;
        swap(arr[_l],arr[_r]);
    }
    swap(arr[l], arr[r]);
    quickSort(l, _r);
    quickSort(_r + 1, r);
}