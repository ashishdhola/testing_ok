/*
1 B 3 D 5		1 2 3 4 5
B 3 D 5		    2 3 4 5
3 D 5			3 4 5  
D 5				4 5
5   		    5
*/

#include<stdio.h>
main(){
	
	int i,j;
	char k='A';
	
	for(i=1; i<=5; i++){
		
		for(j=i; j<=5; j++){
			
			if(j%2==0){
				
				printf(" %c",k);
			}
			else{
					
					printf(" %d",j);
				}
				
			k++;
		}
		printf("\n");
	}
}
