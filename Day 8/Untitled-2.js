<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<script>
// 7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
//  function summ(a,b){
//     if(a==10 || b==10 || (a+b) == 10){
//         return true
//     }
//     else{
//         return false
//     }
//  }
//  console.log(summ(1,10));

// 8. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function str(a,b){
//     if(a.length == b.length){
//     return true;

// }
// else{
//     return false;
// }
// }
// console.log(str("surya","ajay2"));

// 9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// var a=() =>{
//     return("happy birthday")
// }
// console.log(a());

// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number.
//first method without using formatting method
// function arry(arr){
//     arr=[8,6,8,6,8,6,0,3,9,9]   
//     arr0=[];
//     for(i of arr){
//         arr0+=i
//     }
//     return arr0
// }
//     console.log(arry()); 

//second method using formatting method

// function phone(arr){
//     var a = arr.join('')
//     var b =
//     "(" + a.substring(0,3) + ")" + " " + a.substring(3,6)+ "-"+ a.substring(6)

//     return b
// }
// var arr=[8,6,8,6,8,6,0,3,9,9]
// console.log(phone(arr));

//exmaple (9848)-86-1719
// function phnum(arr){
//     var a= arr.join('')
//     var b =
//     "("+a.substring(0,4) +")" + " "+ a.substring(4,6)+"-"+a.substring(6)
//     return b
// }
// var arr=[9,8,4,8,8,6,1,7,1,9]
// console.log(phnum(arr));

//11.Create a function that returns an array of strings sorted by length in ascending order.

// function arr(a){
//     for(let i=0; i< a.length;i++){
//         for(let j=i+1; j< a.length;j++) {
//         if(a[j].length < a[i].length){
//            temp=a[i]
//            a[i]=a[j]
//            a[j]=temp
//         }

//     }
// }
// return a;
// }
// var a=["a", "ccc", "dddd", "bb"]
// console.log(arr(a));

// //example

// function arr(a){
//     for( i=0; i<a.length; i++){
//         for( j=i+1; j<a.length;j++){
//             if(a[j].length < a[i].length){
//                 temp=a[i]
//                 a[i]=a[j]
//                 a[j]=temp
//             }
//         }
//     }
//     return a;
// }
// var a=["ajay","surya","aravind","kedarnath","sai"];
// console.log(arr(a));

// 12.Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.


        function arr(a){
          r=[];
          for(i of a){
            i.sort(function(a,b){return a-b})
            r.push(i[i.length-1])
          }
          console.log(r);
        }
        arr([[4,2,7,1],[20,70,40,90],[1,2,0]]) 

    //13.Create a function that takes an array of numbers and returns the second largest number.

    function myFunction() {
    let localVar = "I am a local variable";
    console.log(localVar); 
}

myFunction();
console.log(localVar);
//ebugger
//function kedar (b){
 //var a = 10;
    // let b = 20;
//    const c = 30;

    //return a+b

    
    // console.log(b);
    // console.log(c);
//}

//console.log(kedar(30));

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
   
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
//     console.log(c);

//pattern code 
// var pattern=""
// function printpattern(rows){
//     for(i=1; i<=rows; i++){
//         for(j=1; j<=i; j++){
//             pattern +='*'
//         }
// console.log(pattern);
//     }
// } 
// printpattern(5);
// var pattern=""
// function printpattern(rows){
//     for(i=1;i<=rows;i++){
//         for(j=1;j<=i; j++){
//             pattern +='@'
//         }
//          console.log(pattern);
//     }
// }
// console.log(pattern);
// printpattern(5);

// var reversestring="Ajay,chintakindi"
// function reverseString(str){
//     var reversedstr = "";
// for(i=str.length-1;i>=0;i--){
//     reversedstr += str[i];
// }
// return reversedstr;
// }
// console.log(reverseString("Ajay,chintakindi"));

function digit(a){
  for(let i = a.lenth - 1;i >= 0;i--){
    if(a[i] !)
  }
}


</script>
</body>
</html>