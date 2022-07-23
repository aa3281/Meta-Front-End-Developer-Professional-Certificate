/*
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop is i<=10.

Inside the loop, write an if-else statement, which will check the following conditions:

    First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

    Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

    Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

    For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for (let i = 1; i<=10; i++) {
    if (i==1) {console.log("Gold Medal")}
    else if (i==2) {console.log("Silver Medal")}
    else if (i==3) {console.log("Bronze Medal")}
    else {
        console.log(i);
    }
}

/* Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.

When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.
*/

for (let i = 1; i<=10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
    }
}
