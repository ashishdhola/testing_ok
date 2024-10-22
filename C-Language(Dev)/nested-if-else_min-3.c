//Q.1 Write a Program to find the minimum number from the given 3 numbers using nested if else. 
//Also, draw a Flowchart in your book.

#include<stdio.h>
main(){
	
	int a,b,c;
	
	printf("Enter first number : ");
	scanf("%d",&a);
	
	printf("Enter second number : ");
	scanf("%d",&b);
	
	printf("Enter third number : ");
	scanf("%d",&c);
	
	if(a<b){  // main if
		if(a<c){
			printf("%d IS MINIMUM",a);	
		}
		else{
			printf("%d IS MINIMUM",c);	
		}
	}
	else{   //main else
		if(b<c){
			printf("%d IS MINIMUM",b);	
		}
		else{
			printf("%d IS MINIMUM",c);	
		}
	}
}