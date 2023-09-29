function nonDuplicate(arr){
    let map = new Map();

    for(let element of arr){
        if(map.has(element))
            map.set(element, map.get(element)+1);
        else
            map.set(element,1);
    }

    for(let element of arr){
        if(map.get(element) === 1)
            return element;
    }

    return -1;
}