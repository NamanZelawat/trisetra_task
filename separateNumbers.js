
/**
 * 
 * @param { Character } char 
 * @returns { Boolean }
 */
function isNumber(char)
{
    if(char <= '9' && char >= '0')
    {
        return true;
    }
    return false;
}

/**
 * 
 * @param { Character } char 
 * @returns { Boolean }
 */
function isCharacter(char)
{
    if(!isNumber(char) && char != ' ')
    {
        return true;
    }
    return false;
}

/**
 * 
 * @param { String } str 
 * @returns { String }
 */
function separate_numbers(str)
{
    let ans = str[0];
    for(let i = 1;i<str.length;i++)
    {
        if(isNumber(str[i]) && isCharacter(str[i-1]))
        {
            ans = ans + " ";
            ans = ans + str[i];
        }
        else if(isCharacter(str[i]) && isNumber(str[i-1]))
        {
            ans = ans + " ";
            ans = ans + str[i];
        }
        else
        {
            ans = ans + str[i];
        }
    }
    return ans;
}

console.log("\n");
/**
 * Test case 1
 */
console.log("--------------  TEST-1 --------------");
let str_test1 = "call me at9123457";
console.log("Input -- " + str_test1);
console.log("Output -- " + separate_numbers(str_test1));
console.log("\n");

/**
 * Test case 2
 */
console.log("--------------  TEST-2 --------------");
let str_test2 = "9ft tall building 3700parkavenue,NY";
console.log("Input -- " + str_test2);
console.log("Output -- " + separate_numbers(str_test2));
console.log("\n");

/**
 * Test case 3
 */
 console.log("--------------  TEST-3 --------------");
 let str_test3 = "915ft tall building3700parkavenue,NY";
 console.log("Input -- " + str_test3);
 console.log("Output -- " + separate_numbers(str_test3));
 console.log("\n");

 /**
 * Test case 4
 */
console.log("--------------  TEST-4 --------------");
let str_test4 = "call me at9123457, tonight8pm";
console.log("Input -- " + str_test4);
console.log("Output -- " + separate_numbers(str_test4));
console.log("\n");

 /**
 * Test case 5
 */
  console.log("--------------  TEST-5 --------------");
  let str_test5 = "8pm call me at9123457, tonight before9";
  console.log("Input -- " + str_test5);
  console.log("Output -- " + separate_numbers(str_test5));
  console.log("\n");