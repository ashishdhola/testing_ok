#include<stdio.h>
main(){
	
	int a,b;
	
	printf("Enter A value : ");
	scanf("%d",&a);
	
	printf("Enter B value : ");
	scanf("%d",&b);
	
	a=a+b;
	b=a-b;
	a=a-b;
	
	printf("The swapped values are\n A : %d \n B : %d",a,b);
	
		
} 