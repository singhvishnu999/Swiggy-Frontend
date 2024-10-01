#include <iostream>
#include <vector>
using namespace std;
int count = 0;
void subArray(vector<int> v, int idx, vector<int> temp, int target){
    if (idx == v.size())
        return;

    if (target < 0)
        return;

    if (target == 0){
        for (int i = 0; i < temp.size(); i++)
            cout << temp[i] << ' ';
        cout << endl;
        return;
    }
    temp.push_back(v[idx]);
    subArray(v, idx, temp, target - v[idx]);
    temp.pop_back();
    target += v[idx];
    subArray(v, idx + 1, temp, target - v[idx]);
}

int main()
{
    vector<int> v = {2, 3, 6, 7};
    vector<int> temp;
    subArray(v, 0, temp, 7);
    return 0;
}