#include<stdio.h>
main(){
	
	int n,i,a[100],*ptr[100];
	
	printf("Enter the length of an array : ");
	scanf("%d",&n);
	
	printf("Enter the elements of an array : \n");
	
	for(i=0;i<n;i++){
		
			printf("[%d] : ",i);
			scanf("%d",&a[i]);
			ptr[i] = &a[i];
	}
	
	printf("Even elements in the array are : \n");
	for(i=0;i<n;i++){
			
		if(*ptr[i]%2==0){
			printf("%d,",*ptr[i]);
		}
	}
	
}
