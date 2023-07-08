function multiplyHcfLcm(num1,num2){
    return hcf*lcm
}

function hcf(num1,num2){
    {
   
        // Everything divides 0
        if (a == 0 && b == 0)
            return 0;
        if (a == 0)
            return b;
        if (b == 0)
            return a;
     
        // base case
        if (a == b)
            return a;
     
        // a is greater
        if (a > b)
            return gcd(a - b, b);
        return gcd(a, b - a);
    }
}