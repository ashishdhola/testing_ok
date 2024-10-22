//Q.3 Write a Program to convert the given string in toggle case without using any string function.

#include<stdio.h>
main(){
	
	int i;
	char ch[] = "HelLo worLD";
	
	for(i=0; i<11; i++){
		
		if(ch[i]>='A' && ch[i]<='Z'){
		
			printf("%c", ch[i]+32);
		}
		else{
			
			printf("%c", ch[i]-32);
		}
	}
}
