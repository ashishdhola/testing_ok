//Q.2 Write a Program to count the total number of digits in a number.

#include<stdio.h>
main()
{
	int a,n,count=0;
	
	printf("Enter a number : ");
	scanf("%d",&n);
	
	a=n;

		while(n!=0){
		
			n=n/10;
			
			count++;
		}
	
		printf("The number of digits in %d is : %d",a,count);
	
}
