function lastOccurence(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start<= end){
        let mid = Math.floor(start + (end-start)/2);

        if(arr[mid] === target){
            let i = mid;
            while(arr[i] === target){
                i++;
            }
            return i-1;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
          
    }
    return -1;
}