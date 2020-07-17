console.log("Hello");
function check(num)
{
   /* if(num%2==0)
    {
        return "Number is even";
    }
    else
    {
        return "Number is odd"

    }*/
    let str=(num%2==0) ? "Number is even":
    "Number is odd" ;
    
    return str;

}
let num=Number(prompt("Enter the number you want to check"));
console.log(`The number entered is ${num} and  `+check(num));
