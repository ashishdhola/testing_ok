//Q.2 Write a Program to create a menu-driven program for Telecom call service conversation
// using nested switch case.

#include<stdio.h>
main(){
	
	int a,b,c,choice, eng, hindi, guj;
	
	printf("Press 1 for English \n");
	printf("Press 2 for Hindi \n");
	printf("Press 3 for Gujarati \n");
	
	printf("\nEnter your choice : ");
	scanf("%d",&choice);
	
	switch(choice)
	 {		
		case 1 :
			
			printf("\nPress 1 for Internet Recharge\n");
			printf("Press 2 for Top-up Recharge\n");
			printf("Press 3 for Special Recharge\n");
			
			printf("\nEnter your choice (English) : ");
			scanf("%d",&eng);

			switch(eng)
			{
				case 1 :
					printf("\nYou have successfully done Internet Recharge.\n");
					break;
				
				case 2 :
					printf("\nYou have successfully done Top-up Recharge.\n");
					break;
				
				case 3 :
					printf("\nYou have successfully done Special Recharge.\n");
					break;
					
				default :	
					printf("\nEnter Valid Choice");
					break;

			}	
			break;	
			
		case 2 :
			
			printf("Internet Recharge ke liye 1 dabaiye\n");
			printf("Top-up Recharge ke liye 1 dabaiye\n");
			printf("Special Recharge ke liye 1 dabaiye\n");
			
			printf("\nEnter your choice (Hindi) : ");
			scanf("%d",&hindi);

			switch(hindi)
			{
				case 1 :
					printf("\nAapne safaltapurvak Internet Recharge kar liya he.\n");
					break;
				
				case 2 :
					printf("\nAapne safaltapurvak Top-up Recharge kar liya he.\n");
					break;
				
				case 3 :
					printf("\nAapne safaltapurvak Special Recharge kar liya he.\n");
					break;
					
				default :	
					printf("\nEnter Valid Choice");
					break;
			}
			break;
			
		case 3 :
			
			printf("Internet Recharge mate 1 dabavo\n");
			printf("Top-up Recharge mate 1 dabavo\n");
			printf("Special Recharge mate 1 dabavo\n");
			
			printf("\nEnter your choice (Gujrati) : ");
			scanf("%d",&guj);

			switch(guj)
			{
				case 1 :
					printf("\nTame safaltapurvak Internet Recharge karyu chhe.\n");
					break;
				
				case 2 :
					printf("\nTame safaltapurvak Top-up Recharge karyu chhe.\n");
					break;
				
				case 3 :
					printf("\nTame safaltapurvak Special Recharge karyu chhe.\n");
					break;
				
				default :	
					printf("\nEnter Valid Choice");
					break;
			}	
			break;
			
		default :	
			printf("Enter Valid Choice");
			break;
		
	} 
		
}