//Q2 Write a Program to count the frequency of each character in a given string.

#include <stdio.h>
#include <string.h>
 
int main()
{
    char s[1000];  
    int i,j,k,count=0,n;
 
    printf("Enter the string : ");
    gets(s);
     
    for(j=0;s[j];j++){ //this loop helps to find the position(index no.) of last letter
	
	}
	n=j; 
	printf("position(index no.) of last letter : %d\n",n);
    
	printf("frequency of each character in string is :\n");

    for(i=0;i<n;i++){
    	
     	count=1;
    	if(s[i]!=NULL){
    		
 			for(j=i+1;j<n;j++){   
	    		
				if(s[i]==s[j]){
				
                	count++;
                	s[j]='\0';
	     		}
	      	}  
	      printf("'%c' = %d \n",s[i],count);
       }   
 	} 
}

