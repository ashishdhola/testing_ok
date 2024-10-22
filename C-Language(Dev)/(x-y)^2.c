#include<stdio.h>
main(){
	
	int x,y,z;
	
	printf("Enter X value : ");
	scanf("%d",&x);
	
	printf("Enter Y value : ");
	scanf("%d",&y);
	
	z=(x*x)+(y*y)-(2*x*y);
	
	printf("When x is %d and y is %d (x-y)^2 = %d ",x,y,z);
	
		
} 