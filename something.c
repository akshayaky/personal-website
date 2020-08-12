#include<stdio.h>

int a[] = {5, 10 , 15, 20};
void abc()
{
    char str[50];
  scanf("%s",str);
  printf("%s",str);

}

int main()
{
    int arr[] = {1,2,3,4,5};
    int *ptr = &arr[3];
    printf("%d",ptr[-4]); 
    // printf("%s",arr);
    //abc();
}