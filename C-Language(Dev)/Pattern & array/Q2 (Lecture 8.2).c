//Q.2 Write a Program to find leap years between two given numbers and store them in an array. 
//And then print that array.

#include<stdio.h>
main(){
	
	int a, b, c[100], i=0;
	
	printf("Enter the start year : ");
	scanf("%d",&a);
	
	printf("Enter the end year : ");
	scanf("%d",&b);
	
	printf("The leap year between %d and %d are : \n",a,b);
	
	for(c[i]=a; c[i]<=b; c[i]++){
		
		if(c[i]%4==0){
			
			printf("%d,",c[i]);
		}
	}
}
