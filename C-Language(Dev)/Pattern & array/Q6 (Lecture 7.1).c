/*
1 0 1 0 1               
1 0 1 0
1 0 1
1 0         
1
*/

#include<stdio.h>
main(){
	
	int i,j;
	
	for(i=5; i>=1; i--){
		
		for(j=1; j<=i; j++){
			
				if(j%2==0){
					
					printf(" %d",0);	
				}
				
				else{
					
					printf(" %d",1);	
				}
			}
		printf("\n");
	}
}