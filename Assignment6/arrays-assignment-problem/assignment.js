//Assignment 6

const arrNum = [1, 2, 3, 4, 5, 10, 16];

const nums = arrNum.filter(num => num > 5);
alert(nums);

const mappedNums = arrNum.map(val => ({num: val}));
console.log(mappedNums);

const prod = arrNum.reduce((curResult, curValue) => curResult * curValue, 1);
console.log('The product of all numbers is: ' + prod);

function findMax(arrNum)
{
    let curMax = arrNum[0];
    let curMin = arrNum[0];
    for (let i of arrNum)
    {
        if (i > curMax)
            curMax = i;
        if (i < curMin)
            curMin = i;    
    }
    return [curMin, curMax];
}

//console.log('The min & max num is : ' + findMax(arrNum));
const [min, max] = findMax(arrNum);
console.log(min, max);

const userIds = new Set();
userIds.add(1);
userIds.add(10);

console.log(userIds);