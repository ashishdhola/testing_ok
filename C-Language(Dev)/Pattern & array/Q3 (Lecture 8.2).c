//Q.3 Write a Program to find square of each element from the given array.

#include<stdio.h>
main(){
	
	int a[100], b[100], len, i;
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);

	printf("Enter array elements: \n");
	
	for(i=0; i<len; i++){
		
		printf("a[%d] : ",i);
		scanf("%d",&a[i]);
	}
	
	for(i=0; i<len; i++){
		
		b[i] = a[i] * a[i];
	}
	
	printf("The square of array elements are: \n");
	
	for(i=0; i<len; i++){
		
		printf("%d,",b[i]);
	}
		
}
