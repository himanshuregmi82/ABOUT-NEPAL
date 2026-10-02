#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, sum;

    printf("Enter any two numbers: ");
    scanf("%d %d", &a, &b);

    sum = a + b;

    printf("The sum of two numbers is: %d", sum);

    getch();
}
