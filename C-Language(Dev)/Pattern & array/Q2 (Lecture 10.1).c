//Q.2 Write a Program to check if a given number is divisible by both 3 & 5 or not using UDF

#include <stdio.h>

cube(int x){
	
	int ans;
	
	if(x%3==0 && x%5==0){
		printf("%d is divisible by 3 & 5 both",x);
	}
	else{
		printf("%d is not divisible by 3 & 5 both",x);
	}
	
}

main(){
	
	int a;
	
	printf("Enter a number : ");
	scanf("%d",&a);
	
	cube(a);	
}	
