//Q.3 Write a Program to perform the addition operation of two 1D arrays & store it in another array.
//Keep in mind that both array sizes must be the same.

#include<stdio.h>
main(){
	
	int a[100], b[100], sum[100], i, len;
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);
	
	printf("Enter A array elements :  \n");
		
	for(i=0; i<len; i++){
		
		printf("a[%d] : ",i);
		scanf("%d",&a[i]);
	
	}
	
	printf("Enter B array elements :  \n");
	
	for(i=0; i<len; i++){
		
		printf("b[%d] : ",i);
		scanf("%d",&b[i]);
		
	}
	
	printf("The sum of two array's a + b is : \n");
	
	for(i=0; i<len; i++){
		
		sum[i] = a[i] + b[i];
		
		printf("%d \n",sum[i]);
	}
}