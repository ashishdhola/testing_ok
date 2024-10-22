//Q.3 Write a Program to print the multiplication table of the number N using any type of loop.

#include<stdio.h>
main()
{
  	int i, n, a, mul=1;

    printf("Enter the number : ");
  	scanf("%d", &n);

  	for (i=1; i<=10; i++) 
  	{
    	printf("%d * %d = %d\n",n,i,n*i);
  	}

}

	
	
