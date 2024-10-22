//Q.1 Write a Program to convert the given string in uppercase without using any string function.

#include<stdio.h>
main(){
	
	int i;
	char ch[] = "hello world";
	
	for(i=0; i<11; i++){
		
		if(ch[i]>='a' && ch[i]<='z'){
		
			printf("%c", ch[i]-32);
		}
		else{
			
			printf("%c", ch[i]);
		}
	}
}
