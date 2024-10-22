//Q.1 Write a Program to find the square of each element of a given 1D array using a Pointer.

#include<stdio.h>
main(){
	
	int a[100],len,i=0,sq;
	int *p[100];
	
	printf("Enter the length of an array : ");
	scanf("%d",&len);
	
    printf("\nEnter array elements : \n");
    for(i=0; i<len; i++){
    	
    	printf("array[%d] : ",i);
    	scanf("%d",&a[i]);
    	p[i] = &a[i];	
	}
	
	printf("Square of array elements : ");
	for(i=0; i<len; i++){
    	
    	sq = *p[i] * *p[i];
    	printf("%d,",sq);
	}

}