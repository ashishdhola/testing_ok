#include<stdio.h>
void odd(int n){
	
	int i,a[100];
	
	printf("Enter the elements of an array : \n");
	
	for(i=0;i<n;i++){
		
			printf("[%d] : ",i);
			scanf("%d",&a[i]);
	}
	
	printf("Odd elements in the array are : \n");
	for(i=0;i<n;i++){
			
		if(a[i]%2!=0){
			printf("%d,",a[i]);
		}
	}
}
main(){
	
	int n;
	
	printf("Enter the length of an array : ");
	scanf("%d",&n);
	
	odd(n);
}
