// Write a Program to print odd numbers from N to 1 using a while loop.

#include<stdio.h>
main()
{
   	int n;
	
	printf("Enter the Number:");
	scanf("%d",&n);
	
	while(n>=1)
	{
		if(n%2!=0)
		{
			printf("%d\n",n);	
		}
		n--;
	}

}
