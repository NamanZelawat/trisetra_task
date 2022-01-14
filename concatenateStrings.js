function concat(str1, str2 = null)
{
    if(str2 == null)
    {
        return function(tstr2)
        {
            return (str1+" "+tstr2);
        }
    }
    else
    {
        return (str1+" "+str2);
    }
}

console.log("Taking both parameters");
var sol1 = concat("hello","world");
console.log(sol1);


console.log("\n");

console.log("Taking only one parameter");
var tsol2 = concat("hello");
console.log("Giving other parameter to the returned function");
var sol2 = tsol2("world");
console.log(sol2);