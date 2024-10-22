//Q.1 Write a Program to find the length of a 1D array.

#include<stdio.h>
main(){
	
	int len;
	int array[] = {12,435,65,76,7,78,89,99,9,44,35,645};
	
	len = sizeof(array)/sizeof(0);
	
	printf("The length of a 1D array is %d",len);
	
}