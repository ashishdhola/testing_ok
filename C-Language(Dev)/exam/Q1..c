#include<stdio.h>
main(){
	
	int math,eng,hin,chem,comp,avg,sum;
		
		printf("Enter the marks of maths : ");
		scanf("%d",&math);	
		
		printf("Enter the marks of english : ");
		scanf("%d",&eng);	
		
		printf("Enter the marks of hindi : ");
		scanf("%d",&hin);	
		
		printf("Enter the marks of chemistry : ");
		scanf("%d",&chem);	
		
		printf("Enter the marks of computer : ");
		scanf("%d",&comp);		
		
		sum = math + eng + hin + chem + comp;
		avg = sum / 5;
		
		printf("Average : %d\n",avg);
		
		if(avg>=85){
			printf("Grade A");
		}
		else if(avg>=70 && avg<85){
			printf("Grade B");
		}
		else if(avg>=55 && avg<70){
			printf("Grade C");
		}
		else if(avg>=40 && avg<55){
			printf("Grade D");
		}
		else{
			printf("Grade E");
		}

}