//Write a Program to find the maximum number from the given 3 numbers using the ternary
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
	
	(a>b)?(a>c)?
		printf("A IS MAX"):printf("C IS MAX")
	:(b>c)?	
		printf("B IS MAX"):printf("C IS MAX");
		
}