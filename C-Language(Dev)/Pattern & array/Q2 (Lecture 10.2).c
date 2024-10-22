//Q.2 Write a Program to find the length of the String by passing a string as an argument using UDF.
//TSRN
 
#include<stdio.h>
#include<string.h>

len(char s[]){
	
	int i,c=0;
	for(i=0; s[i]!=NULL; i++){
		
		c++;
	}
	
	printf("%d",c);
}

main(){
	
	char s[100];
	
	printf("Enter the string :");
	gets(s);
	
	len(s);
}