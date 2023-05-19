class Calculator{
   
    add(a,b){
        return a+b;
    }

    subtract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}

class ScientificCalculator extends Calculator{

    square(a){
        return a*a;
    }

    cube(a){
        return a*a*a;
    }

    power(a,b){
        return a^b;
    }
}

class Calculator{
   
    add(a,b){
        return a+b;
    }

    subtract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}

class ScientificCalculator extends Calculator{

    square(a){
        return a*a;
    }

    cube(a){
        return a*a*a;
    }

    power(a,b){
        return a^b;
    }
}

let ScientificCalculatorOne = new ScientificCalculator();
// console.log(typeof ScientificCalculator);
// console.log(ScientificCalculatorOne);
// console.log(typeof ScientificCalculatorOne);
 let b = ScientificCalculatorOne.add.call(ScientificCalculatorOne,5,10);
 console.log(b);






//call




const Name = {
    firstName : "Saksham",
    lastName: "Tewari",

    fullName(){
        return `${this.firstName} , ${this.lastName}`;
    }
}

const Name2 = {
    firstName : "Saksham2",
    lastName: "Tewari2" 
}

Name.fullName.call(Name2);





//apply

const Name3 = {
    firstName : "Saksham",
    lastName: "Tewari",

    fullName(first, last){
        return first + " " +  last;
    }
}

const Name4 = {
    firstName : "Saksham4",
    lastName: "Tewari4" 
}

let a = Name3.fullName.apply(Name4,["Rahul", "Dravid"]);
console.log(a);



