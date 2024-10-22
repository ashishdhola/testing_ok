//Q.2 Write a Program to generate mark sheets for a student. Enter the marks of 5 students in Chemistry,
//Mathematics, and Physics (each out of 100) using a Structure having attributes: roll no, name, chem_marks,
//maths_marks, and phy_marks. Display the percentage of each student.

#include<stdio.h>

struct marks{
	
	char name[1000];
	int roll_no,chem,maths,phy,total;
	float percent;
};

main(){
	
	int n=5,i;
	struct marks m;
	
	for(i=1; i<=n; i++){
		
		printf("Enter details of Student : %d\n",i);
		
		printf("Enter Name : ");
		scanf("%s",&m.name);
		
		printf("Enter Roll No. : ");
		scanf("%d",&m.roll_no);
		
		printf("Enter Chemistry marks : ");
		scanf("%d",&m.chem);
		
		printf("Enter Mathematics marks : ");
		scanf("%d",&m.maths);
		
		printf("Enter Physics marks : ");
		scanf("%d",&m.phy);
		
		m.total = m.chem + m.maths + m.phy;
		printf("Total : %d/300\n",m.total);
		
		m.percent = m.total/3;
		printf("Percentage : %.2f%%\n",m.percent);
		
		printf("----------------------------------\n");
	}
	
}