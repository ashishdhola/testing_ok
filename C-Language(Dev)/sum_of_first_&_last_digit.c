#include <stdio.h>
int main()
{
    int n, sum=0, firstDigit, lastDigit;
    
    printf("Enter number to find sum of first and last digit = ");
    scanf("%d", &n);
    
    // Find last digit of a number
    lastDigit = n % 10;
    
    //Find the first digit by dividing n by 10 until n greater then 10
    while(n >= 10)
    {
        n = n / 10;
    }
    firstDigit = n;
    
    sum = firstDigit + lastDigit;
    printf("Sum of first and last digit i.e. %d + %d is %d",firstDigit, lastDigit, sum);
    return 0;
}