#include <iostream>
#include <string>
#include <vector>
#include <functional>
#include <algorithm>
#include <unordered_set>
using namespace std;

int n; // <= 10^6
unordered_set<string> s;

int main(void){
  cin >> n;
  while(n--){
    string name, log;
    cin >> name >> log;
    if(log == "enter") s.insert(name); // [!] set을 이용
    else s.erase(name);
  }
  vector<string> ans(s.begin(), s.end());
  sort(ans.begin(), ans.end(), greater<string>()); // vector에 시작점과 끝점을 가져옴
  for(auto x : ans) cout << x << '\n';
}