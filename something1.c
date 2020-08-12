#include<stdio.h>

void function1(char str[], int len)
{
    int first = 0, last = len - 1;
    for(int i = 0; i < m; i++)
    {
        
        for(int j = 0; j < n - 1; j++)
        {
            arr[j] = arr[j + 1];
            printf("%d ",arr[j]);
        }
        arr[n - 1] = temp;
        printf("%d\n",arr[n - 1]);
    }
}

void function2(char str[], int len)
{
    
    int countb = 0;//no of a a in the string
    for(int i = 0; i < len; i++)
    {
        if(str[i] == 'b')
            countb++;
    }
    for(int i = 0; i < len; i++)
    {
        if(i < countb)
            str[i] = 'b';
        else
            str[i] = 'a';
    }
    
    printf("%s\n",str);
}
int main()
{
    char bin[20],len;
    scanf("%d",&len);
    scanf("%s",&bin);
    printf("%s\n",bin);
    function1(bin,len);
    //function2(bin,len);
}