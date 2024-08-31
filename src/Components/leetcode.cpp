#include<iostream>
using namespace std;

int main(){
    int height[3]={1,2,1};
    int max = 0;
        int j = 0;
        while (j < 2) {
            for (int i = j + 1; i < 3; i++) {
                int area;
                int a = height[i] > height[j] ? j : i;
                if ((i - j) == height[a]) {
                    area = (i - j) * height[a];
                } else {
                    area = 2 * ((i - j) + height[a]);
                }
                if (area > max) {
                    max = area;
                    // y=i;
                    // x=j;
                }
            }
            j++;
        }
        cout<<max;
}