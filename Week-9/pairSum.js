function pairSum(arr, sum){
    let res = [];
    let map = new Map();
    for(let element of arr){
        if(map.has(element))
            map.set(element, map.get(element)+1);
        map.set(element,1);
    }

    for(let element of arr){
        let comp = sum-element;
        if(map.has(comp)){
            res.push([element,comp]);
            map.delete(element);
         }
    }

    return res;
}