//Q.1 Write a Program to perform the merge operation of two 1D arrays & store it in another array.
// Keep in mind that both array sizes can be different.

#include<stdio.h>
main(){
	
	int a[100], b[100], c[100], i;
	int len1, len2, len3;
	
	printf("Enter the size of first array : ");
	scanf("%d",&len1);
	
	for(i=0; i<len1; i++){
		
		printf("a[%d] : ",i);
		
		scanf("%d",&a[i]);
	}
	
	printf("Enter the size of second array : ");
	scanf("%d",&len2);
	
	for(i=0; i<len2; i++){
		
		printf("b[%d] : ",i);
		
		scanf("%d",&b[i]);
	}
	
	len3 = len1 + len2;
	
	printf("The merge of two array's is : ");
	
	for(i=0; i<len3; i++){
		
		printf("c[%d] : ",i);
		
		scanf("%d",&c[i]);
	}
	
}