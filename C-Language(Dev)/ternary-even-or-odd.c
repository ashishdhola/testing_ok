//Write a Program to check whether a number is even or odd using the ternary operator.

#include<stdio.h>
main(){
	
	int n;
	
	printf("Enter any number : ");
	scanf("%d",&n);
	
	(n%2==0)? printf("\nTHE NUMBER %d IS EVEN",n) : printf("\nTHE NUMBER %d IS ODD",n);
		
}