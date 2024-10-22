#include<stdio.h>

main(){
	
	int n;
	
	printf("Enter any number : ");
	scanf("%d",&n);
	
	if(n==0){
		printf("The number is neutral");
	}
	else if(n>0){
		printf("The number is positive");
	}
	else{
		printf("The number is negative");
	}
}