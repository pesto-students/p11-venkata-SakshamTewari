function intersectionArrays(arr1, arr2){

    let set = new Set();
    let res = [];

    for(let element of arr1)
        set.add(element);
    
    for(let element of arr2){
        if(set.has(element))
            res.push(element);
    }

    return res;
}