//Q.1 Write a Program to write even & odd numbers from 50 to 70 into two separate files.
#include<stdio.h>
main(){
	
	int *a,*b;
	int n1=50,n2=70;
	
	a = fopen("even.txt","w");
	b = fopen("odd.txt","w");
	
	if(a==0 && b==0){
		
		printf("Error!!");
	}
	else{
		
		while(n1<=n2){
			
			if(n1%2==0){
				
				fprintf(a,"%d",n1);
				fputs("\n",a);
			}
			else{
				
				fprintf(b,"%d",n1);
				fputs("\n",b);
			}
			n1++;
		}
		printf("Successful");
	}
	fclose(a);
	fclose(b);
}