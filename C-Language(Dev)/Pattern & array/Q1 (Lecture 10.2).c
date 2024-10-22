//Q.1 Write a Program to find the sum of all 1D Array elements by passing an array as an argument using UDF.
//TSRN

#include<stdio.h>
sum(int x[], int len){
	
	int sum=0, i;
	
	for(i=0; i<len; i++){
		
		sum = sum + x[i];
	}
	printf("Sum of all the elements in the array is : %d",sum);
	
}

main(){
	
	int len, i, a[100];
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);
	
	printf("Enter the elements of an array : \n");
	for(i=0; i<len; i++){
		
		printf("a[%d] : ",i);
		scanf("%d",&a[i]);
	}
	
	sum(a,len);
}