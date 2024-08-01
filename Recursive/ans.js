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


// 4. Compute the sum of all elems inside an Array.
function sumElems(list, index = 0)
{
    //BS: when the index reaches the len of the array, then we return 0 and stop the recursive.
    if(list.length == index)
    {
        return 0;
    }

    //RC: get the elem of the current index and and add it with the rest of the array.
    // Note: index + 1 : move to the next elem.
    return list[index] + sumElems(list, index + 1)
}

// Ex usage:
const list = [1,2,3,4,5];
console.log(sumElems(list))


// 5. Compute the exponent of a number.
function exponent(base, power)
{
    //Our goal when the power is 0 return 1, and stop the recursive call.
    let result = (power == 0)? 1 : base * exponent(base, power - 1);

    //Return the final result.
    return (result);
}

// Ex usage:
console.log(exponent(2, 3))