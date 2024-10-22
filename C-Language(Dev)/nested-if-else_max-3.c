// MAXIMUM OF 3 NUMBERS

#include<stdio.h>
main(){
	
	int a,b,c;
	
	printf("Enter first number : ");
	scanf("%d",&a);
	
	printf("Enter second number : ");
	scanf("%d",&b);
	
	printf("Enter third number : ");
	scanf("%d",&c);
	
	if(a>b){
		if(a>c){
			printf("%d IS MAXIMUM",a);
		}
		else{
			printf("%d IS MAXIMUM",c);
		}
	}
	else{
		if(b>c){
			printf("%d IS MAXIMUM",b);
		}
		else{
			printf("%d IS MAXIMUM",c);
		}
	}
}