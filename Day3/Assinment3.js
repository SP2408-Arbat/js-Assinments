console.log("Hello")
function sw(ch)
 {
    switch (ch) {
        case (ch >=40 && ch<=49):
            return "E";
            break;
        case (ch >=50 && ch<=59):
            return "D";
            break;
        case (ch >=60 && ch<=69):
            return "C";
            break;
        case (ch >=70 && ch<=79):
            return "B";
            break;
        case (ch >=80 && ch<=89):
            return "A";
            break;
        case (ch >=90 && ch<=100):
            return "E";
            break;
                
        default:
            return  "F";
            break;
        }
 }
 function con(ch)
 {
     if(ch>=40 && ch<=49)
     {
         return "E";
     }
     else if(ch>=50 && ch<=59)
     {
         return "D";
     }
     else if(ch>=70 && ch<=79)
     {
         return "B";
     }
     else if(ch>=80 && ch<=89)
     {
         return "A";
     }else if(ch>=90 && ch<=99)
     {
         return "A+";
     }
     else
     {
            return "F"
     }
 }
 let n=Number(prompt("Check mark using Switch Case: 0  for condional statment: 1"));
 console.log(n);
 let a,b;
 switch (n) {
        case 0:
              a=Number(prompt("Enter the marks:"));
             console.log(`Marks are ${a} and grade is `+sw(a));
             break;
        case 1:
              b=Number(prompt("Enter the marks:"));
             console.log(`Marks are ${b} and grade is `+con(b));
             break;
 
        default:
         alert("please Enter Correct input");
         break;
 }