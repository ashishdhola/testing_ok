//Q.2 Write a Program to print the factorial of number N using for loop.

#include<stdio.h>
main()
{
  	int i, n, fact=1;

 	// get no. of terms from user
    printf("Enter the number : ");
  	scanf("%d", &n);

  	for (i=1; i<=n; i++) 
  	{
    	fact = fact * i;
  	}
  	
  	printf("The factorial of %d! is : %d",n,fact);

}

	
	
