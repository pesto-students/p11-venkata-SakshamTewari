function counter(){
    let count = 0;

    function incrementCounter(){
        count++;
        // console.log(count);
        return count;
    }

    return incrementCounter;
}

const firstCounter = counter();
const secondCounter = counter();

let firstValues = [];
let secondValues = [];

for(let i = 0 ; i < 5 ; i++){
    firstValues.push(firstCounter());
}

for(let i = 0 ; i < 3 ; i++){
    secondValues.push(secondCounter());
}

console.log(firstValues);
console.log(secondValues);

