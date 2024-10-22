#include<stdio.h>

struct employee{
	
	char name[100],designation[100],address[100];
	int id,salary,contact,experience;
};

main(){
	
	int n=5,i;
	
	struct employee e[n];
	
	for(i=0; i<n; i++){
		
		printf("Enter Name : ");
		scanf("%s",&e[i].name);
	
		printf("Enter Designation : ");
		scanf("%s",&e[i].designation);
	
		printf("Enter ID : ");
		scanf("%d",&e[i].id);
		
		printf("Enter Contact : ");
		scanf("%d",&e[i].contact);
	
		printf("Enter Address : ");
		scanf("%s",&e[i].address);
		
		printf("Enter Salary : ");
		scanf("%d",&e[i].salary);
		
		printf("Enter Experience : ");
		scanf("%d",&e[i].experience);
		
		printf("\n");
	}
	
		
	for(i=0; i<n; i++){
		
		printf("Employee Name = %s\n",e[i].name);
		printf("Designation = %s\n",e[i].designation);	
		printf("ID = %d\n",e[i].id);
		printf("Contact = %d\n",e[i].contact);
		printf("Address = %s\n",e[i].address);
		printf("Salary = %d\n",e[i].salary);
		printf("Experience = %d\n",e[i].experience);
	}
}