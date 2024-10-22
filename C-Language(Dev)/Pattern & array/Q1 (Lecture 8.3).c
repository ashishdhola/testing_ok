//Q.1 Write a Program to find the average of a given 2D array.

#include<stdio.h>
main(){
	
	int i,j,row,col,sum=0;
	float size,avg;
	
    printf("Enter the number of rows : ");
    scanf("%d",&row);
    
    printf("Enter the number of columns : ");
    scanf("%d",&col);
    
    int matrix[row][col];
    
    printf("\nEnter the elements of the matrix\n");
    
    for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("[%d][%d] : ",i,j);
    		scanf("%d",&matrix[i][j]);
		}
	}
	
	printf("\n");
	
	 for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		printf("%d ",matrix[i][j]);
		}
		printf("\n");
	}
	
	size = sizeof(matrix) / sizeof(matrix[0][0]);
	
	for(i=0; i<row; i++){
    	
    	for(j=0; j<col; j++){
    		
    		sum = sum + matrix[i][j];
		}
		printf("\n");
	}
	
	avg = sum / size;
	
	printf("The average of above matrix is : %f",avg);
}

