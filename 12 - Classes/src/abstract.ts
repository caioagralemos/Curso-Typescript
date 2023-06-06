// classe abstrata é uma classe que só existe unicamente com o intuito de passar métodos as suas subclasses
abstract class Employee { // não é possível instanciar um employee
    constructor(public first: string, public last: string) {}
    abstract getPay(): number // esse método não existe, mas vai obrigar subclasses de employee a ter esse método
}

class FullTimeEmployee extends Employee {
    constructor(
        public first: string,
        public last: string,
        private salary: number
    ) {
        super(first, last)
    }

    getPay(): number{
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        public first: string,
         public last: string,
          private salaryPerHour: number,
           public hoursWorked: number) {
            super(first, last)
           }
    getPay(): number {
        return this.salaryPerHour * this.hoursWorked
    }
}