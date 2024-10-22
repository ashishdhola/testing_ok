#include<stdio.h>
struct laptop{
	
	char name[100];
	int processor,price;
};
main(){
	
	int n,i;
	
	printf("Enter the size of object : ");
	scanf("%d",&n);
	
	struct laptop l[n];
	
	for(i=0; i<n; i++){
		
		printf("Enter the name of the company : ");
		scanf("%s",&l[i].name);
	
		printf("Enter Processor : ");
		scanf("%d",&l[i].processor);
	
		printf("Enter Price : ");
		scanf("%d",&l[i].price);
		
		printf("\n");
	}
		
	for(i=0; i<n; i++){
		
		printf("\nCompany Name = %s\n",l[i].name);
		printf("Processor  = %d\n",l[i].processor);
		printf("Price = %d\n",l[i].price);
	}
}