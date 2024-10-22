//Q.1 Write a menu-driven program to implement arithmetic operations such as +, -, *, /,
//and % using UDF, switch case, and looping.
//Make sure that the program is endless until a certain letter is pressed.

#include<stdio.h>
main(){
	
	int sum,minus,mul,div,mod,choice,n1,n2;
	
	printf("Press 1 for +\n");
	printf("Press 2 for -\n");
	printf("Press 3 for *\n");
	printf("Press 4 for /\n");
	printf("Press 5 for %%\n");
	printf("Press 0 for the exit\n");
	
	printf("\nEnter your choice: ");
	scanf("%d",&choice);
	
	printf("Enter the first number:");
	scanf("%d",&n1);
	
	printf("Enter the second number: ");
	scanf("%d",&n2);
	
	
	switch(choice){	
		
		case 1 :
			
			sum = n1 + n2;
			printf("sum of %d + %d is : %d",n1,n2,sum);
			break;	
			
		case 2 :
			
			minus = n1 - n2;
			printf("minus of %d - %d is : %d",n1,n2,minus);
			break;
			
		case 3 :
			
			mul = n1 * n2;
			printf("mul of %d * %d is : %d",n1,n2,mul);
			break;	
			
		case 4 :
			
			div = n1 / n2;
			printf("div of %d / %d is : %d",n1,n2,div);
			break;
			
		case 5 :
			
			mod = n1 % n2;
			printf("mod of %d %% %d is : %d",n1,n2,mod);
			break;		
			
		default :	
		
			printf("Enter Valid Choice");
			break;
	} 
	

}


#include <stdio.h>

int add(int num1, int num2) {
    return num1 + num2;
}

int subtract(int num1, int num2) {
    return num1 - num2;
}

int multiply(int num1, int num2) {
    return num1 * num2;
}

int divide(int num1, int int num2) {
    if (num2 == 0) {
        printf("Error: Division by zero is not allowed.\n");
        return 0; // Handle division by zero gracefully
    }
    return num1 / num2;
}

int modulo(int num1, int num2) {
    if (num2 == 0) {
        printf("Error: Modulo by zero is not allowed.\n");
        return 0; // Handle modulo by zero gracefully
    }
    return num1 % num2;
}

int main() {
    int num1, num2, result, choice;
    char key;

    printf("Welcome to the Arithmetic Calculator!\n");

    do {
        // Get user input for numbers
        printf("\nEnter two numbers: ");
        scanf("%d %d", &num1, &num2);

        // Display menu and get user choice
        printf("\nChoose an operation:\n");
        printf("1. Addition (+)\n");
        printf("2. Subtraction (-)\n");
        printf("3. Multiplication (*)\n");
        printf("4. Division (/)\n");
        printf("5. Modulo (%)\n");
        printf("6. Exit (E)\n");
        printf("> ");
        scanf(" %c", &key);

        switch (key) {
            case '1':
                result = add(num1, num2);
                printf("Addition: %d + %d = %d\n", num1, num2, result);
                break;
            case '2':
                result = subtract(num1, num2);
                printf("Subtraction: %d - %d = %d\n", num1, num2, result);
                break;
            case '3':
                result = multiply(num1, num2);
                printf("Multiplication: %d * %d = %d\n", num1, num2, result);
                break;
            case '4':
                result = divide(num1, num2);
                if (result) { // Check if division was successful
                    printf("Division: %d / %d = %d\n", num1, num2, result);
                }
                break;
            case '5':
                result = modulo(num1, num2);
                if (result) { // Check if modulo was successful
                    printf("Modulo: %d %% %d = %d\n", num1, num2, result);
                }
                break;
            case 'E':
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (key != 'E');

    return 0;
}
