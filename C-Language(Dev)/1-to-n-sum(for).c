//Write a Program to print the sum of all numbers from 1 to N using for loop.

#include<stdio.h>
main()
{
  	int i, n, sum=0;

    printf("Enter the number : ");
  	scanf("%d", &n);

  	for (i=1; i<=n; i++) 
  	{
    	sum = sum + i;
  	}
  	
  	printf("The sum of numbers from 1 to %d is : %d",n,sum);

}

	
	
