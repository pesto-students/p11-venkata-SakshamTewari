function divideArray(nums){
    let evenNums = [];
    let oddNums = [];    
    
    for(let i of nums){
        if(i % 2 == 0)
            evenNums.push(i);
        else
            oddNums.push(i);
    }
    evenNums.sort();
    oddNums.sort();
    console.log(evenNums);
    console.log(oddNums);
}
