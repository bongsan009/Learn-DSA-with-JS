// ** 1. Calculate the factorial of a number.
function factorial(num)
{
    //Base case: my goal to stop the recursive call.
    if(num == 0 || num == 1)
    {
        return num;
    }else{
        
        //Recursive case: call again and again until it hit the 'Base case'.
        return num * factorial(num - 1);   
    }
}

// Test the function
const n = 5;
console.log(factorial(n))
