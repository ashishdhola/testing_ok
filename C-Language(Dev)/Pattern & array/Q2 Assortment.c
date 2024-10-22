//Q.2 Write a Program to find the largest element from a given 2D array.

#include<stdio.h>
main(){
	
	int i,j,row,col;
	
    printf("Enter the number of rows : ");
    scanf("%d",&row);
    
    printf("Enter the number of columns : ");
    scanf("%d",&col);
    
	int a[row][col];

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
	
	int largest = a[0][0];
	
	for(i=0; i<row; i++){     // finding the largest element
    	
    	for(j=0; j<col; j++){
    		
    		if (largest < a[i][j]) {
     			
				  largest = a[i][j];
			}
		}
	}
	
		printf("\nThe largest element is : %d", largest);  //printing largest element

}
