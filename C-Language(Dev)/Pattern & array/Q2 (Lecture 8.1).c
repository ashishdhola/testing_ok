//Q.2 Write a Program to find the average of a 1D array.

#include<stdio.h>
main(){
	
	int len, average, sum=0, i;
	int a[100];
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);
	
	printf("Enter array elements :  \n");
	
	for(i=0; i<len; i++){
		
		printf("a[%d] : ",i);
		
		scanf("%d",&a[i]);
		
		sum = sum + a[i];
	}
	
	average = sum / len;
	
	printf("The average of an array is %d",average);
	
	
}