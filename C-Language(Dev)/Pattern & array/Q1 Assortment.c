//Q.1 Write a Program to find all the negative elements from a given 1D array.

#include<stdio.h>
main(){
	
	int n[100], len, i;
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);
	
	printf("\nEnter array elements : \n");
	
	for(i=0; i<len; i++){
		
		printf("n[%d] : ",i);	
		scanf("%d",&n[i]);
	}
	
	printf("\nNegative elements in the array are : \n");
	
	for(i=0; i<len; i++){
		
		if(n[i]<0){
			
			printf("%d,",n[i]);	
		}
	}
}