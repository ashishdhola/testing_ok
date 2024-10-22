#include<stdio.h>

struct students{
	
	char name[100];
	int roll_no,std;
};

main(){
	
	int n,i;
	
	printf("Enter the size of object : ");
	scanf("%d",&n);
	
	struct students s[n];
	
	for(i=0; i<n; i++){
		
		printf("Enter Name : ");
		scanf("%s",&s[i].name);
	
		printf("Enter Standard : ");
		scanf("%d",&s[i].std);
	
		printf("Enter Roll No. : ");
		scanf("%d",&s[i].roll_no);
		
		printf("\n");
	}
	
		
	for(i=0; i<n; i++){
		
		printf("\nStudent Name = %s\n",s[i].name);
		printf("Student Standard = %d\n",s[i].std);
		printf("Student Roll No. = %d\n",s[i].roll_no);
	}

	



}