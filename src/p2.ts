class Employee {


    constructor(public name: string, private baseSalary: number) {
    }

    get Call() {
        return this.baseSalary
    }
    set CallReview(value: number) {
        this.baseSalary = value
    }

}

const employee = new Employee("John Doe", 50000);
const employee2 = new Employee("Jane Smith", 60000);

console.log(employee)
console.log(employee2)
console.log(employee.Call)
console.log(employee.CallReview = 55000)
// console.log(employee.#baseSalary)