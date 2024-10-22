//Q.2 Write a Program to swap two variables using Pointers.

#include<stdio.h>
main(){
	
	int num1,num2,temp;
	int *a,*b;
	
    printf("Enter value of num1: ");
    scanf("%d",&num1);
    
    printf("Enter value of num2: ");
    scanf("%d",&num2);
    
    // Assign the memory address of num1 and num2 to *a and *b
    a = &num1;
    b = &num2;
    
    temp = *a;
    *a = *b;
    *b = temp;
    
    printf("\nValue of num1 : %d\n",*a);
    printf("Value of num2 : %d\n",*b);
    printf("\n");
    printf("Address of num1 : %p\n",a);
    printf("Address of num2 : %p\n",b);
}
