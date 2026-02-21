var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(input) {
    console.log('hello');
}
const number = [1, 2, 5];
const names = ["mohamed", "madyan"];
const employees = [1, "eltop"];
const small = 0;
const medium = 1;
const large = 2;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
const mySize = Size.Large;
console.log(mySize);
const user1 = {
    id: 1,
    email: "madyan55@gmail.com",
    password: "122",
    getFullName: (fullname) => {
        return fullname;
    }
};
const newBook = {
    title: "Black Book",
    description: "Major Book",
    price: 22,
    authorName: "Authorei",
    country: "USA"
};
let currentPrice;
currentPrice = 20;
function checkTypes(input) {
    if (typeof input === 'string') {
        input.toUpperCase();
    }
    if (typeof input === 'number') {
        input.toFixed();
    }
    if (typeof input === 'boolean') {
        input.valueOf();
    }
}
function generateError(message) {
    throw new Error(message);
    console.log("This code will NEVER run");
}
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    static logger() {
        console.log("This is Account Class");
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount cannot be less than 1");
        }
        this._balance = this._balance + amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value === 0) {
            throw new Error("Value cannot be zero");
        }
        this._balance = value;
    }
}
let accountMohamed = new Account(1, "mohamed", 5);
accountMohamed.deposit(20);
console.log(accountMohamed);
console.log(accountMohamed instanceof Account);
Account.logger();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return "Student: " + this.firstName + " " + this.lastName;
    }
}
class UserRegistry {
}
const user = new UserRegistry();
user.username = "madyan";
user.email = "madyan@gmail.com";
user["family"] = "alawi";
class Payment {
    constructor(currency) {
        this.currency = currency;
    }
    paid() { return true; }
    notPaied() { return false; }
}
class PaymentWithUSD extends Payment {
    pay() {
        console.log('Pay with USD');
    }
}
class SystemUser {
    constructor() {
        this.role = "eltop";
    }
    register(username, email, password) {
        console.log({ username, email, password });
    }
    login(email, password) {
        console.log({ email, password });
    }
}
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    get currentBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount > 0)
            this._balance += amount;
    }
}
class Store {
    constructor(item) {
        this.item = item;
    }
}
const store1 = new Store(100);
function getValue(value) {
    return value;
}
const post1 = { title: "P1", description: "D", likes: 1 };
const post2 = { category: "Tech" };
const post3 = { title: "Title only" };
function Controller(constructor) {
    constructor.prototype.endPoint = "/api/auth";
    constructor.prototype.login = () => {
        console.log("Logged in successfully");
    };
}
let AuthController = class AuthController {
};
AuthController = __decorate([
    Controller
], AuthController);
const auth = new AuthController();
console.log(auth.endPoint);
