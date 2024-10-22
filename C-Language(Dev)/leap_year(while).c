//Q.5 Write a Program to print leap years between two given numbers using a while loop.
#include<stdio.h>
main()
{
    int a,b;
    
	printf("Enter First Year:");
	scanf("%d",&a);
	
	printf("Enter Second Year:");
	scanf("%d",&b);
	
	printf("\nLeap Year Between %d to %d are :\n",a,b);	
	
	while(a<=b)
	{
		if(a%4==0)
		{
			printf("%d\n",a);
		}
		a++;
	}	
}	