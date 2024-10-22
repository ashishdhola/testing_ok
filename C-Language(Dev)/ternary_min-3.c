//Write a Program to find the minimum number from the given 3 numbers using the ternary
// operator.

#include<stdio.h>
main(){
	
	int a,b,c;
	
	printf("Enter first number : ");
	scanf("%d",&a);
	
	printf("Enter second number : ");
	scanf("%d",&b);
	
	printf("Enter third number : ");
	scanf("%d",&c);
	
	(a<b)?
		(a<c)?
			printf("\nFIRST NUMBER (%d) IS MINIMUM",a)
			:	
			printf("\NTHIRD NUMBER (%d) IS MINIMUM",c)
	:(b<c)?	
		printf("\NSECOND NUMBER (%d) IS MINIMUM",b)
		:
		printf("\NTHIRD NUMBER (%d) IS MINIMUM",c);
		
}