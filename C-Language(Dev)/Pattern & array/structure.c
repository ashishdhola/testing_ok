#include<stdio.h>

struct students{
	
	char name[100];
	int roll_no,std;
};

main(){
	
	struct students s,s1;
	
	printf("Enter Name : ");
	scanf("%s",&s.name);
	
	printf("Enter Standard : ");
	scanf("%d",&s.std);
	
	printf("Enter Roll No. : ");
	scanf("%d",&s.roll_no);
	
	printf("\n-------------------------------");
	
	printf("\nStudent Name = %s\n",s.name);
	printf("Student Standard = %d\n",s.std);
	printf("Student Roll No. = %d\n",s.roll_no);
	
	printf("\n");
	
	printf("Enter Name : ");
	scanf("%s",&s1.name);
	
	printf("Enter Standard : ");
	scanf("%d",&s1.std);
	
	printf("Enter Roll No. : ");
	scanf("%d",&s1.roll_no);
	
	printf("\n-------------------------------");
	
	printf("\nStudent Name = %s\n",s1.name);
	printf("Student Standard = %d\n",s1.std);
	printf("Student Roll No. = %d\n",s1.roll_no);

}