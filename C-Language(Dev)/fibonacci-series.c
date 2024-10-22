// Fibonacci Series

#include<stdio.h>
main(){
	
  	int i, n, t1=0, t2=1, nextTerm;

 	// get no. of terms from user
    printf("Enter the number of terms: ");
  	scanf("%d", &n);

  	for (i=1; i<=n; i++) 
  	{
    	printf("%d, ",nextTerm);
    	t1 = t2;
    	t2 = nextTerm;
    	nextTerm = t1 + t2;
  	}

}

	
	
