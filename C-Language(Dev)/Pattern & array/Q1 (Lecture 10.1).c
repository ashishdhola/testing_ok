//Q.1 Write a Program to find the cube of a given number using UDF(TSRN=TAKE SOMETHING RETURN NOTHING )

#include <stdio.h>

cube(int x){
	
	int ans;
	ans = x*x*x;
	printf("Cube of %d is : %d",x,ans);

}

main(){
	
	int a;
	
	printf("Enter a number : ");
	scanf("%d",&a);
	
	cube(a);	
}	
