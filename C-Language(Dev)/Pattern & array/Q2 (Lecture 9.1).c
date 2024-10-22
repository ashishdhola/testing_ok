//Q.2 Write a Program to convert the given string in lowercase without using any string function.

#include<stdio.h>
main(){
	
	int i;
	char ch[] = "HELLO WORLD";
	
	for(i=0; i<11; i++){
		
		if(ch[i]>='A' && ch[i]<='Z'){
		
			printf("%c", ch[i]+32);
		}
		else{
			
			printf("%c", ch[i]);
		}
	}
}
