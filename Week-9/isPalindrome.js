function isPalindrome(num){

    let temp = num;
    let sum = 0;
    while(temp>0){
        sum = sum*10 + temp%10;
        temp = Math.floor(temp/10);
    }
    if(sum == num)
        return true;
    return false;
}