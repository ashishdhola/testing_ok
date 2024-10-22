//Q.2 Write a Program to find the maximum number from the given 4 numbers using nested if else. 
//Also, draw a Flowchart in your book.

#include<stdio.h>
main(){
	
	int a,b,c,d;
	
	printf("Enter first number : ");
	scanf("%d",&a);
	
	printf("Enter second number : ");
	scanf("%d",&b);
	
	printf("Enter third number : ");
	scanf("%d",&c);
	
	printf("Enter fourth number : ");
	scanf("%d",&d);
	
	if(a>b){  //main if		
		if(a>c){			
			if(a>d){
				printf("%d IS MAXIMUM",a);
			}
			else{
				printf("%d IS MAXIMUM",d);
			}
		}		
		else{
			if(c>d){
				printf("%d IS MAXIMUM",c);
			}
			else{
				printf("%d IS MAXIMUM",d);
			}
		}
	}	
	else{  //main else
		if(b>c){
			if(b>d){
				printf("%d IS MAXIMUM",b);	
			}
			else{
				printf("%d IS MAXIMUM",d);
			}
		}
		else{
			if(c>d){
				printf("%d IS MAXIMUM",c);
			}
			else{
				printf("%d IS MAXIMUM",d);
			}
		}
	}	
}