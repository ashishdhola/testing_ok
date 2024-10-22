//Q.1 Write a Program to check whether a string is a palindrome or not without using string functions.

#include<stdio.h>
main(){
	
	char a[100], j[100];
	int i,d=0,n=0, c=0;
	
	printf("Enter a String : ");
	gets(a);
	
	int len=0;
	
	for(i=0; a[i]!=NULL; i++){
		
		len++;
	}
	
	printf("reverse string :");  //printing the reverse string
		
	for(i=len; i>=0; i--){
		
		j[d]=a[i];
		printf("%c",j[d]);
		d++;	
	}	
	
	printf("\n");
	d=0;
	for(i=0; i<=len; i++){
		
		if(j[d]==a[i]){
			
//			n=1;
//			printf("%c ",a[i]);
			printf("%c ",j[d]);
		}
		else{
//			n=0;
//			printf("%c ",a[i]);
			printf("%c ",j[d]);
		}
		d++;
	} 
	
	if(n==1){
		printf("\nGiven string is a Palindrome.");

	}
	else{
		printf("\nGiven string is not a Palindrome.");
	}

}