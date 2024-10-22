//Q.1 Write a Program to check whether a string is a palindrome or not without using string functions.

#include<stdio.h>
main(){
	
	char s[100],temp[100];
	
	printf("Enter the string : ");
	gets(s);
	
	strcpy(temp,s);
	
	printf("Reverse string : %s \n",strrev(s));
	
	if(strcmp(s,temp) == 0){

		printf("Given string is a Palindrome.");
	}
	else{
		
		printf("Given string is not  a Palindrome.");
	}
}