function deleteElements(arr){
    const res = arr.filter((e) => {
        if(e%2 === 0 || e%3 === 0)
            return false;
        else
            return true;
    });
    return res;
}