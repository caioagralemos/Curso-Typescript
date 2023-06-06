"use strict";
// classe abstrata é uma classe que só existe unicamente com o intuito de passar métodos as suas subclasses
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, salaryPerHour, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salaryPerHour = salaryPerHour;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.salaryPerHour * this.hoursWorked;
    }
}
