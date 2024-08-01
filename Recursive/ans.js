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


// 6. Get the first n fib numbers.
function fibNums(n)
{
    //BC: when n is either 0 or 1, we return an array containing two elems inside it.
    if(n <= 1)
    {
        return [0, 1];
    }

    let s = fibNums(n - 1);
    //add the first two previous elem.
    s.push(s[s.length - 1] + s[s.length - 2]);
    
    //s.slice(0, n): get only n fib numbers.
    // Ex: n = 3 -> [0,1,1]
    return s.slice(0, n);
}

//Ex usage:
console.log(fibNums(5))


// 7. Check whether a number is even or odd.
function isEven(num)
{
    //If the user accidentally input the negative number, then convert it to positive.
    if(num < 0)
    {
        num = Math.abs(num);
    }

    //BC one: if the num is 1, it is odd.
    if(num == 1)
    {
        return false;
    }

    //BC two: if the num is 0, it is even.
    if(num == 0)
    {
        return true;
    }

    //RC: Subtract num by 2 all the way down until it hits one of the base cases.
    return isEven(num - 2);
}

//Ex usage:
console.log(isEven(10006))


// 9. Implement the Binary Search.
function BS(list, target, s, e)
{
    //if s and e crossed each other we return -1 indicating that elem is not present in the list.
    if(s > e)
    {
        return -1;
    }

    //compute the mid point in order to divide an array into two parts.
    const mid = Math.floor((s + e) / 2);

    //If the mid elem is equal to the target, then return the location (index) of that elem stay.
    if(list[mid] == target)
    {
        return mid;
    }

    //If the elem that we are looking for is less than the mid elem, which means it(target) stay at the first half.
    if(list[mid] > target)
    {
        return BS(list, target, s, mid - 1);
    }else{
        return BS(list, target, mid + 1, e);
    }
}

//Ex usage:

// an sorted list.
let listOfnums = [10, 20, 30, 40, 50];
let target = 10;

console.log(BS(listOfnums, target, 0, listOfnums.length - 1))


// 10. Implement a Merge Sort.
function MS(list, s, e)
{
    if(s < e)
    {
        const mid = Math.floor((s + e) / 2);

        MS(list, s, mid);
        MS(list, mid + 1, e);

        merge(list, s, mid, e);
    }
}

function merge(list, start, mid, end)
{
    let i = start;
    let j = mid + 1;
    let k = 0;
    let temp = new Array(end - start + 1);

    while(i <= mid && j <= end)
    {
        if(list[i] < list[j])
        {
            temp[k] = list[i];
            i++;
        }else{
            temp[k] = list[j];
            j++;
        }

        k++;
    }

    while(i <= mid)
    {
        temp[k] = list[i];
        i++;
        k++;
    }

    while(j <= end)
    {
        temp[k] = list[j];
        j++;
        k++;
    }

    k = 0;

    for(let i = start; i <= end; i++)
    {
        list[i] = temp[k];
        k++;
    }
}

//Ex usage:
const unsortedList = [5,4,3,2,1];
MS(unsortedList, 0, unsortedList.length - 1);

console.log(unsortedList)


// Check whether a string is a palin.
function isPalin(str)
{
    //BC: if str is either empty or has only letter, which means it is already a palin.
    if(str.length <= 1)
    {
        return true;
    }

    //Create two variables to preserve the fist and last character respectively.
    let firstChar = str.charAt(0);
    let lastChar = str.charAt(str.length - 1);

    //BC two: if the first and last char doesn't match each other we immediately return false.
    if(firstChar != lastChar)
    {
        return false;
    }

    //Generate this variable to extract all characters b/w the first and last.
    let remainingString = str.substring(1, str.length - 1);

    return isPalin(remainingString);
}

//Ex usage:
console.log(isPalin("madam"))


// 12. Find the max element inside an Array.
function findMax(list, ind = 1, max = list[0])
{
    if(list.length == ind)
    {
        return (max);
    }

    if(list[ind] > max)
    {
        max = list[ind];
    }

    return findMax(list, ind + 1, max)
}

// Ex usage:
console.log(findMax(list))