class Person{

    constructor(name,age,gender,nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    
    introduce(){
        return `${this.name}, ${this.age}, ${this.gender}, ${this.nationality}` ;
    }

}

const person1 = new Person("rahul", 32 , "M", "Indian");
const person2 = new Person("simran", 33 , "F", "Indian");
const person3 = new Person("Atul", 28 , "M", "Indian");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());


class Student extends Person{
    constructor(name,age,gender,nationality,subject){
        super(name,age,gender,nationality);
        this.subject = subject;
    }

    study(){
        return this.subject;
    }
}

const student1 = new Student("Shubham", 28 , "M", "Indian", "ECE");
console.log(student1.introduce());
console.log(student1.study());