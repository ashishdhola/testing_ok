/*
1  2  3  4  5 ( j )
*  *  *  *  *  1
*           *  2  ( i )
*  *  *  *  *  3
               4
*           *  5
*           *  6

*/

#include<stdio.h>
main(){
	
	int i,j,k;
	
	for(i=1; i<=3; i++){
		
		for(j=1; j<=5; j++){
			
			if(i==2){
				
				if(j==1 || j==5){
					
					printf("* ");
				}
				else{
						printf("  ");
				}
			}
			else{
				
				printf("* ");
			}
		}
		printf("\n");
	}
	printf("\n");
	
	for(i=1; i<=2; i++){
		
		for(j=1; j<=5; j++){
				
				if(j==1 || j==5)
				{
					printf("* ");
				}
				else
				{
					printf("  ");
				}
		}
		printf("\n");
	}
	
}