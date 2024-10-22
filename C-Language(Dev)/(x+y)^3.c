#include<stdio.h>
main(){
	
	int x,y,z;
	
	printf("Enter X value : ");
	scanf("%d",&x);
	
	printf("Enter Y value : ");
	scanf("%d",&y);
	
	z=(x*x*x)+(3*x*x*y)+(3*x*y*y)+(y*y*y);
	
	printf("When x is %d and y is %d (x+y)^3 = %d ",x,y,z);
	
		
} 