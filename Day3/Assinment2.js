console.log("Hello");
function div(str)
{
let abc=str.split(" ");
return abc;   
}
let s1=prompt("Enter the oprating system");
let xyz=div(s1);
console.log(xyz);
let a,b;
a=xyz[0]; b=xyz[1];
console.log(`The OS name is ${a} and version is ${b} `);