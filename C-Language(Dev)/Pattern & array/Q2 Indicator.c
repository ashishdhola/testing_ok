//Q.2 Write a Program to find square of all elements from a given 2D array using Pointer with UDF.
#include<stdio.h>

int square(int row, int col){
	
	int i,j;
    int a[row][col];
    int *arr2[row][col];
    
    printf("\nEnter the elements of the matrix\n"); // taking input from user i.e. elements of 2d array
    for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("[%d][%d] : ",i,j);
    		scanf("%d",&a[i][j]);
    		arr2[i][j] = &a[i][j];
		}
	}
	
	printf("\nMatrix : \n");   // printing the matrix
	 for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",*arr2[i][j] );
		}
		printf("\n");
	}
	
	printf("\nSquare of matrix is : \n");  // printing the square matrix
	for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",(*arr2[i][j]) * (*arr2[i][j]));
		}
		printf("\n");
	}
}
main() {
	
	int r,c;

    printf("Enter the number of rows : ");
    scanf("%d",&r);
    
    printf("Enter the number of columns : ");
    scanf("%d",&c);
    
    square(r,c);
    
}
