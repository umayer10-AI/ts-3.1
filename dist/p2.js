class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    get Call() {
        return this.baseSalary;
    }
    set CallReview(value) {
        this.baseSalary = value;
    }
}
const employee = new Employee("John Doe", 50000);
const employee2 = new Employee("Jane Smith", 60000);
console.log(employee);
console.log(employee2);
console.log(employee.Call);
console.log(employee.CallReview = 55000);
export {};
// console.log(employee.#baseSalary)
