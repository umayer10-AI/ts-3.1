class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("John Doe", 50000);
const employee2 = new Employee("Jane Smith", 60000);
console.log(employee);
console.log(employee2);
export {};
