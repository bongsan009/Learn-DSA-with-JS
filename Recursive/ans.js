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


// ** 2. Find GCD
function GCD(a, b)
{
    //Base case: when b equal to 0, then the the GCD is a.
    if(!b)
    {
        return a;
    }

    //Calc the remainder of a and b and add it as new b.
    const rem = (a % b);

    return GCD(b, rem)
}

// Testing
console.log(GCD(100, 5))


// 3. Get integers in the range.
function range(start, end)
{
    //BC: when (end - start == 2) which means it has only one number between start and end.
    if(end - start == 2)
    {
        return [start + 1];
    }

    //RC:
    let list = range(start, end - 1);
    list.push(end - 1);

    return list;
}

// Ex usage: generate the range b/w start and end (exclusive).
console.log(range(1, 10))
