//Q.1 Write a Program to check if a given password is strong or not by satisfying the below criteria:
//- Password must contain at least one letter, one digit & one special symbol.
//- Password must be at least 6 characters.

#include<stdio.h>
main(){
	
	char password[100];
	int i, cletter=0, sletter=0, digit=0, symbol=0;
	
	printf("Enter your password : ");
	gets(password);
	
	if(strlen(password)>=6){
		
		for(i=0; password[i]!=NULL; i++){
			
			if(password[i]>='A' && password[i]>='Z'){
				
				cletter = 1;
			}		
			else if(password[i]>='a' && password[i]>='z'){
				
				sletter = 1;
			}
			else if(password[i]>='0' && password[i]>='9'){
				
				digit = 1;
			}
			else{
				
				symbol = 1;
			}
		}
		
		if(cletter==1 && sletter==1 && digit==1 && symbol==1){
			
			printf("Password is valid");
		}
		else{
			printf("Password is not valid! Please enter letter, number & symbol");
		}
	}
	else{
		printf("Password is invalid");
	}
	
}