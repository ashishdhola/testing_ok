// Write a Program to input electricity unit charges and calculate the total electricity
// bill according to the given condition:

// For the first 50 units Rs. 0.50/unit   || 0 - 50 = Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit   || 51 - 150 = Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit   || 151 - 250 = Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit      || 251 and above = Rs. 1.50/unit

// An additional surcharge of 20% is added to the bill.

#include<stdio.h>
 main(){

	int units, bill;
	float amt, sur_charge;
	
	printf("Enter the number of units consumed : ");
	scanf("%d",&units);
	
	if(units>=0 && units<=50)
	{
		amt = units * 0.50;
		sur_charge =  amt * 0.2;
		bill = amt +  sur_charge;
		
		printf("\nThe Amount without sur-charge is Rs. %0.2f",amt);
		printf("\nThe surcharge is Rs. %d\n", (int)sur_charge);
		printf("\nThe Total Electricity Bill is = %d",bill);
	}
	else if(units>50 && units<=150)
	{
		amt = (units-50) * 0.75 + 50 * 0.50;
		sur_charge =  amt * 0.2;
		bill = amt + sur_charge;
		
		printf("\nThe Amount without sur-charge is Rs. %0.2f",amt);
		printf("\nThe surcharge is Rs. %d\n", (int)sur_charge);
		printf("\nThe Total Electricity Bill is = %d",bill);
	}
	else if(units>150 && units<=250)
	{
		amt = (units-150) * 1.20 + 50 * 0.50 + 100 * 0.75;
		sur_charge =  amt * 0.2;
		bill = amt + sur_charge;
		
		printf("\nThe Amount without sur-charge is Rs. %0.2f",amt);
		printf("\nThe surcharge is Rs. %d\n", (int)sur_charge);
		printf("\nThe Total Electricity Bill is = %d",bill);
	}
	else if(units>250)
	{
		amt = (units-250) * 1.50 + 50 * 0.50 + 100 * 0.75 + 100 * 1.20;
		sur_charge =  amt * 0.2;
		bill = amt + sur_charge;
		
		printf("\nThe Amount without sur-charge is Rs. %0.2f",amt);
		printf("\nThe surcharge is Rs. %d\n", (int)sur_charge);
		printf("\nThe Total Electricity Bill is = %d",bill);
	}
	else{
		printf("\nPlease Enter Valid Units !!");
	}
	
}