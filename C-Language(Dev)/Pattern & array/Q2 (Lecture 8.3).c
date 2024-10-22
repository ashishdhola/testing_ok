//Q.2 Write a Program to perform the addition operation of two 2D arrays & store it in another array. 
//Keep in mind that both

#include<stdio.h>
main(){
	
	int i,j,row,col;
	
    printf("Enter the number of rows : ");
    scanf("%d",&row);
    
    printf("Enter the number of columns : ");
    scanf("%d",&col);
    
    int a[row][col], b[row][col];
    
    printf("\nEnter the elements of the matrix A :\n");  //elements of the matrix A
    
    for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("[%d][%d] : ",i,j);
    		scanf("%d",&a[i][j]);
		}
	}
	
	printf("\nEnter the elements of the matrix B :\n"); //elements of the matrix B
    
    for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("[%d][%d] : ",i,j);
    		scanf("%d",&b[i][j]);
		}
	}

	printf("\nMATRIX A :\n");  	// Printing matrix A
	 for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",a[i][j]);
		}
		printf("\n");
	}
	
	printf("\nMATRIX B :\n");   // Printing matrix B
	for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",b[i][j]);
		}
		printf("\n");
	}
	
	int sum[100][100];
	
	for(i=0; i<row; i++){     // adding two matrices
    	
    	for(j=0; j<col; j++){
    		
    		sum[i][j] = a[i][j] + b[i][j];
		}
	}
	
	printf("\nThe sum of above 2 matrix is : \n");  //printing sum of 2 matrix 
	for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",sum[i][j]);

		}
		printf("\n");
	}
}