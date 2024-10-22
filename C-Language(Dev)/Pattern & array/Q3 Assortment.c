//Q.3 Write a Program to find the transpose matrix of a given 2D array.

#include<stdio.h>
main(){
	
	int i,j,row,col;
	
    printf("Enter the number of rows : ");
    scanf("%d",&row);
    
    printf("Enter the number of columns : ");
    scanf("%d",&col);
    
	int a[row][col];
	
	if(row == col){
	
   		printf("\nEnter the elements of the matrix :\n");  //elements of the matrix 
    
   		for(i=0; i<row; i++){
    	
   			for(j=0; j<col; j++){
    		
   				printf("[%d][%d] : ",i,j);
   				scanf("%d",&a[i][j]);
			}
		}
	
		printf("\nMATRIX\n");  	// Printing matrix
	 
 		for(i=0; i<row; i++){
    	
   			for(j=0; j<col; j++){
    		
   				printf("%d ",a[i][j]);
			}
				printf("\n");
		}
		
/*
	00 01   transpose ->  00 10
	10 11       		  01 11
*/
		int b[100][100];
			
		for(i=0; i<row; i++){     // Transposing array
    	
    		for(j=0; j<col; j++){
    			
    			 b[j][i] = a[i][j];
			}
	    	printf("\n");
		}
	
		printf("TRANSPOSE MATRIX\n");
	
		for(i=0; i<row; i++){     // printing transpose matrix
    		
    		for(j=0; j<col; j++){
    			
    			 printf("%d ", b[i][j]);  
			}
	   	 printf("\n");
		}
	}
	else{
		printf("\nPlease enter the same size of row & column");
	}
}