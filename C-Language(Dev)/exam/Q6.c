#include<stdio.h>
main(){
	
	int n,i;
	char *a,name[100],color[100];
	
	a = fopen("data.txt","w");
	
	printf("Enter the number : ");
	scanf("%d",&n);
	
	if(a==NULL){
		printf("Error");
	}
	else{
			
    	for (i=1;i<=n;i++) 
		{
        	printf("Enter name of fruits %d: ", i);
        	scanf("%s", &name);
        	printf("Enter the color of fruits %d: ",i);
        	scanf("%s", &color);
        	printf("\n");

        	fprintf(a,"Fruit Name: %s\n",name);
        	fprintf(a,"Fruit Color: %s\n",color);
    	}	
    	printf("Successful");
	}
	
	fclose(a);
}



