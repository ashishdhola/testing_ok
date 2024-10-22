#include<stdio.h>
main(){
	
	float c,f;
	
	printf("Enter the temperature in Celsius : ");
	scanf("%f",&c);
	
	f = ( c * 9/5 ) + 32;
	
	printf("The temperature in Farenheit is : %0.3f",f);
	
}