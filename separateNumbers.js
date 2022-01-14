function separate_numbers(str)
{
    let ans = str[0];
    for(let i = 1;i<str.length;i++)
    {
        if((str[i] <= '9' && str[i] >= '0') && !(str[i-1] <= '9' && str[i-1] >= '0'))
        {
            ans = ans + " ";
            ans = ans + str[i];
        }
        else if(!(str[i] <= '9' && str[i] >= '0') && (str[i-1] <= '9' && str[i-1] >= '0'))
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

let str_test1 = "call me at9123457";
console.log(separate_numbers(str_test1));

let str_test2 = "9ft tall building 3700parkavenue,NY";
console.log(separate_numbers(str_test2));