#include<stdio.h>
main(){
	
	int x,y,z;
	
	printf("Enter the value of first angle : ");
	scanf("%d",&x);
	
	printf("Enter the value of second angle : ");
	scanf("%d",&y);
	
	z = 180 - x - y;
	
	printf("The third angle is : %d",z);
}