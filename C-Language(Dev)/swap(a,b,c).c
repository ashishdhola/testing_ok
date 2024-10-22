#include<stdio.h>
main(){
	
	int a,b,c;
	
	printf("Enter A value : ");
	scanf("%d",&a);
	
	printf("Enter B value : ");
	scanf("%d",&b);
	
	c=a;
	a=b;
	b=c;
	
	printf("The swapped values are\n A : %d \n B : %d",a,b);
	
		
} 