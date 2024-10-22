// MINIMUM OF 4 NUMBERS
#include<stdio.h>
main(){
	
	int a,b,c,d;
	
	printf("Enter first number : ");
	scanf("%d",&a);
	
	printf("Enter second number : ");
	scanf("%d",&b);
	
	printf("Enter third number : ");
	scanf("%d",&c);
	
	printf("Enter fourth number : ");
	scanf("%d",&d);
	
	if(a<b){  //main if		
		if(a<c){			
			if(a<d){
				printf("%d IS MINIMUM",a);
			}
			else{
				printf("%d IS MINIMUM",d);
			}
		}		
		else{
			if(c>d){
				printf("%d IS MINIMUM",c);
			}
			else{
				printf("%d IS MINIMUM",d);
			}
		}
	}	
	else{  //main else
		if(b<c){
			if(b<d){
				printf("%d IS MINIMUM",b);	
			}
			else{
				printf("%d IS MINIMUM",d);
			}
		}
		else{
			if(c<d){
				printf("%d IS MINIMUM",c);
			}
			else{
				printf("%d IS MINIMUM",d);
			}
		}
	}	
}