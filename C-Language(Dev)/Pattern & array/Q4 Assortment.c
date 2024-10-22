//Q.4 Write a Program to print and find the sum of all elements of a given row & column from a 2D array.

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
	
	//ROW
	int r_num, r_sum=0;
	
	printf("\nEnter row number: ");
	scanf("%d",&r_num);
	i = r_num;
	
	if(i>=0 && i<row) {
		    
		for (j=0; j<col; j++) {  // calculating the sum of row entered by the user
           
        	r_sum = r_sum + a[i][j] ;
   		}
   		printf("Sum of the %d row is = %d\n", i, r_sum);
	}	
	else{
		printf("Please enter valid row number\n");
	}
	
    //COLUMN
   	int c_num, c_sum=0;
    	
    printf("\nEnter column number: ");
	scanf("%d",&c_num);
	j = c_num;
	
	if(j>=0 && j<col) {
		    
		for (i=0; i<row; i++) {  // calculating the sum of column entered by the user
           
        	c_sum = c_sum + a[i][j] ;
   		}
   		printf("Sum of the %d column is = %d\n", j, c_sum);
	}	
	else{
		printf("Please enter valid column number");
	}
}

