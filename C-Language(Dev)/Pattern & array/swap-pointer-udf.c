//Write a Program to swap two variables using Pointers and UDF.

#include<stdio.h>

int swap(int *a, int *b){
	
	int temp;
    
    temp = *a;
    *a = *b;
    *b = temp;
    
    printf("\nValue of num1 : %d\n",*a);
    printf("Value of num2 : %d\n",*b);
    printf("\n");
    printf("Address of num1 : %u\n",a);
    printf("Address of num2 : %u\n",b);

}
main(){
	
	int num1,num2;
	
    printf("Enter value of num1: ");
    scanf("%d",&num1);
    
    printf("Enter value of num2: ");
    scanf("%d",&num2);
    
    swap(&num1,&num2);

}
