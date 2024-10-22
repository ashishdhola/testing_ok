//Q.3 Write a Program to print 1 to N using a while loop.

#include<stdio.h>
main()
{
	int i=1,n;
	
	printf("Enter the Number:");
	scanf("%d",&n);
	
	while(i<=n)
	{
		printf("%d\n",i);
		i++;
	}
}