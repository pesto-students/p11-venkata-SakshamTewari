function oldKeynewKey(arr, oldNum, newNum){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === oldNum)
            arr[i] = newNum;
    }
    return arr;
}