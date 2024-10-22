//Q.1 Write a Program to find the length of a string using a Pointer.
#include<stdio.h>
main(){
	
	char ch[100],len;
	char *p[100];
	
	printf("Enter any string : ");
	gets(ch);
	
	*p = &ch;
	
	printf("The length of string is %d",strlen(*p));

}