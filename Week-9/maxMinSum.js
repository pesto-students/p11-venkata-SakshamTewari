function maxMinSum(arr){
    let max = arr[0];
    let min = arr[0];

    for(let element of arr){
        if(element > max)
            max = element;
        if(element < min)
            min = element;
    }

    return max+min;
}