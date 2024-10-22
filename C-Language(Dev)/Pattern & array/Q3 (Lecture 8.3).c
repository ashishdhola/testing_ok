//Q.3 Write a Program to find the sum of diagonal elements from a given 2D array.

#include<stdio.h>
main(){
	
	int i,j,row,col;
	
    printf("Enter the number of rows : ");
    scanf("%d",&row);
    
    printf("Enter the number of columns : ");
    scanf("%d",&col);
    
    if(row==col){
    
	   	int a[row][col];

   		printf("\nEnter the elements of the matrix :\n");  //elements of the matrix 
    
    	for(i=0; i<row; i++){
    	
    		for(j=0; j<col; j++){
    		
    			printf("[%d][%d] : ",i,j);
    			scanf("%d",&a[i][j]);
			}
		}
	
		printf("\nMATRIX  :\n");  	// Printing matrix A
	 	for(i=0; i<row; i++){
    	
    		for(j=0; j<col; j++){
    		
    			printf("%d ",a[i][j]);
			}
			printf("\n");
		}
	
		int sum = 0;
	
		for(i=0; i<row; i++){     // adding diagonal elements 
    	
    		for(j=0; j<col; j++){
    		
    			if(i==j){
    			
    				sum = sum + a[i][j] ;
				}
			}
		}
	
		printf("\nThe sum of diagonal elements is : %d", sum);  //printing sum of 2 matrix 
   	}
   	
   	else
	   {
			   printf("Please enter the same size of row & column");
	   }

}