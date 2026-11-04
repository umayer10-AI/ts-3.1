class Employee {
    
    constructor(public name: string, public baseSalary: number) {
    }
}

const employee = new Employee("John Doe", 50000);
const employee2 = new Employee("Jane Smith", 60000);

console.log(employee)
console.log(employee2)