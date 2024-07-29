// sum of natural numbers
function sum (num){
    return num*(num+1)/2
}

console.log(sum(6))

// sum of Digits
function sumOfDigit(num){
    let sum = 0;
    while (num>0) {
        sum += num%10;
        num = Math.floor(num/10);
    }
    
    return sum;
}

console.log(sumOfDigit(1543));

// Numbers of Digits
function numberOfDigits(num){
    let count = 0;
    num = Math.abs(num)
    do {
        num = Math.floor(num/10);
        count++;
    } while(num>0)
    return count;
}

console.log(numberOfDigits(-345));

// palindrome
function palindrome(num){
    let copyNum=num, reverseNum=0;
    while(copyNum>0){
        let lastDigit = copyNum%10;
        reverseNum = reverseNum*10+lastDigit;
        copyNum = Math.floor(copyNum/10);
    }
    return num === reverseNum
}

console.log(palindrome(15151))

// Fibonnacci Numbers
function fibonnacci(n){
    if(n<2){
        return n;
    }
    let prev=0,curr=1,next;
    for(let i=2;i<=n;i++){
        next = prev+curr;
        prev=curr;
        curr=next;
    }
    return next;
}

console.log(fibonnacci(6));

// Missing Numbers

function missingNumber(nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return nums.length*(nums.length+1)/2-sum;
}

console.log(missingNumber([0,1]));