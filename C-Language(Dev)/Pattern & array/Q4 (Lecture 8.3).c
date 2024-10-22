//Q.4 Write a Program to print and find the sum of all boundary elements from a given 5x5 2D array.

#include<stdio.h>
main(){
	
	int i, j, array[5][5], sum=0;

   	printf("Enter the elements of 5*5 matrix :\n");  //elements of the matrix 
    
   	for(i=0; i<5; i++){
    	
   		for(j=0; j<5; j++){
    		
   			printf("[%d][%d] : ",i,j);
   			scanf("%d",&array[i][j]);
		}
	}
	
	printf("\nMATRIX  :\n");  	// Printing matrix 
	
	for(i=0; i<5; i++){
    	
    	for(j=0; j<5; j++){
    		
    		printf("%d ",array[i][j]);
		}
			printf("\n");
	}
	
	printf("BORDER MATRIX\n");
	
	00 01 02 03 04       
	10 11 12 13 14
	20 21 22 23 24
	30 31 32 33 34
	40 41 42 43 44
	
	00 01 02 03 04
	10          14
	20          24
	30          34
	40 41 42 43 44
	
	for(i=0; i<5; i++){     // adding border elements 
    	
   		for(j=0; j<5; j++){
    		
   			if(i==4 || i==0 || j==0 || j==4){
    			
    			printf("%d ",array[i][j]);
   				sum = sum + array[i][j] ;
			}
			else{
				printf("  ");
			}
		}
		printf("\n");
	}
	
	printf("\nThe sum of boundary elements of an Array:%d", sum);  //printing sum of boundary elements 

}