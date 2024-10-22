//Q.1 Write a menu-driven program to implement arithmetic operations such as +, -, *, /,
//and % using UDF, switch case, and looping.
//Make sure that the program is endless until a certain letter is pressed.
//TNRN
#include<stdio.h>

calc(){
	
	int choice,sum,minus,mul,div,mod,n1,n2;
	
	do{
		printf("\nEnter your choice: ");
		scanf("%d",&choice);
	
		if(choice>=1 && choice <=5){
			
			printf("Enter the first number:");
			scanf("%d",&n1);
	
			printf("Enter the second number: ");
			scanf("%d",&n2);
		
			switch(choice){	
		
			case 1 :
			
				sum = n1 + n2;
				printf("Addition of %d + %d is : %d",n1,n2,sum);
				break;	
			
			case 2 :
			
				minus = n1 - n2;
				printf("Subtraction of %d - %d is : %d",n1,n2,minus);
				break;
			
			case 3 :
			
				mul = n1 * n2;
				printf("Multiplication of %d * %d is : %d",n1,n2,mul);
				break;	
			
			case 4 :
			
				div = n1 / n2;
				printf("Division of %d / %d is : %d",n1,n2,div);
				break;
			
			case 5 :
			
				mod = n1 % n2;
				printf("Modulus of %d %% %d is : %d",n1,n2,mod);
				break;		
			
			} 
		}
		else if(choice>5){
		
			printf("Enter Valid Choice");
		}
		else{
		
			printf("Exit");
		}	
		
	printf("\n");
	
	}while(choice!=0);
}

main(){
	
	printf ("Select an operation to perform the calculation in C Calculator: \n");  
	printf("1 Addition\n");
	printf("2 Subtraction\n");
	printf("3 Multiplication\n");
	printf("4 Division\n");
	printf("5 Modulus\n");
	printf("0 Exit\n");
	
	calc();
}