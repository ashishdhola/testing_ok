#include<stdio.h>

void avg(int row, int col){
	
	int i,j,a[100][100];
	float sum=0,c=0,avg;
	
	printf("Enter the elements of an array : \n");
	
	for(i=0;i<row;i++){
		
		for(j=0;j<col;j++){
			
			printf("[%d][%d] : ",i,j);
			scanf("%d",&a[i][j]);
		}
	}
	
	for(i=0;i<row;i++){
		
		for(j=0;j<col;j++){
			
			sum = sum + a[i][j];
			c++;
		}
	}
	
	avg = sum / c;
	printf("The average of 2D array is : %.2f",avg);
}
main(){
	
	int r,c;
	
	printf("Enter the no. of rows : ");
	scanf("%d",&r);
	
	printf("Enter the no. of columns : ");
	scanf("%d",&c);
	
	avg(r,c);
	
}
