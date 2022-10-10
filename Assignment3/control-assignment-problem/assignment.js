//Assignment 3

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7)
    alert ("The number is greater than 0.7!");

 const arrNum = [1,2,3,4,5,6,7,8,9,10];
 
 for (let i = 0; i < arrNum.length; i++)  
    console.log (arrNum[i]);
 
 for (let i of arrNum)  
    console.log(i);
  
 for(let i = arrNum.length - 1; i>= 0; i--)
    console.log(arrNum[i]);

 const randomNumber2 = Math.random();
 
 if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 0.2)
    alert("Number is greater than 0.7! ");

       

