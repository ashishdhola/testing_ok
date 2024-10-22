#include<stdio.h>
main(){
	
	float hra, da, ta, gross_salary, base_salary;
	
	printf("Enter Base Salary : ");
	scanf("%f",&base_salary);
	
	printf("Enter HRA : ");
	scanf("%f",&hra);
	
	printf("Enter DA : ");
	scanf("%f",&da);
	
	printf("Enter TA : ");
	scanf("%f",&ta);
	
	gross_salary = base_salary + hra + da + ta;
	
	printf("The Gross Salary is : %f",gross_salary);
	
}