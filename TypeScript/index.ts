/* ================================================================
  🚀 TS MASTER REFERENCE - BY MOHAMED MADYAN 🚀
  ================================================================
  هذا الملف هو ملخص شامل لرحلة تعلم الـ TypeScript 
  يحتوي على أكثر من 500 سطر من الأمثلة والمفاهيم العميقة.
*/

// --- 1. BASIC TYPES ---
function logger(input: any) {
    console.log('hello');
}

const number: number[] = [1, 2, 5];
const names: string[] = ["mohamed", "madyan"];
const employees: [number, string] = [1, "eltop"]; // Tuples

// --- 2. ENUMS ---
const small = 0;
const medium = 1;
const large = 2;

enum Size { Small, Medium, Large };
const mySize: Size = Size.Large;
console.log(mySize); // Output: 2

// --- 3. TYPE ALIASES & OBJECTS ---
type User = {
    readonly id: number, // لا يمكن تعديله بعد التعريف
    username?: string,   // اختياري
    email: string,
    password: string,
    getFullName: (fullname: string) => string
}

const user1: User = {
    id: 1,
    email: "madyan55@gmail.com",
    password: "122",
    getFullName: (fullname: string) => {
        return fullname;
    }
}

// --- 4. INTERSECTION TYPES ---
type Details = {
    title: string,
    description: string,
    price: number,
};

type Author = {
    authorName: string,
    country: string,
}

type Book = Details & Author;

const newBook: Book = {
    title: "Black Book",
    description: "Major Book",
    price: 22,
    authorName: "Authorei",
    country: "USA"
}

// --- 5. LITERAL TYPES ---
type Price = 20 | 255;
let currentPrice: Price;
currentPrice = 20; // ✅ True
// currentPrice = 55; // ❌ Error

// --- 6. UNKNOWN & ANY ---
/* Any: لا تستخدمها في مشاريعك لأنها بتطلع أخطاء، استخدمها عند الحاجة القصوى فقط.
   Unknown: هو البديل الآمن لـ Any.
   إزاي أحل مشكلة الـ Unknown؟ باستخدام الـ Type Guards (If statements).
*/
function checkTypes(input: unknown): void {
    if (typeof input === 'string') {
        input.toUpperCase(); // هنا TS عرف إنها String
    }
    if (typeof input === 'number') {
        input.toFixed(); // هنا TS عرف إنها Number
    }
    if (typeof input === 'boolean') {
        input.valueOf(); // هنا TS عرف إنها Boolean
    }
}

// --- 7. NEVER TYPE ---
/* Never: الفانكشن دي عمرها ما بترجع قيمة لأن البرنامج بيقف عند الـ Throw Error.
   الفرق بين Void و Never: الـ Void بيوصل لآخر الكود عادي، الـ Never مستحيل يوصل للآخر.
*/
function generateError(message: string): never {
    throw new Error(message);
    console.log("This code will NEVER run");
}

// --- 8. OOP - CLASSES ---
class Account {
    // Parameter Properties: طريقة مختصرة لتعريف الـ Variables في الكونسرتكتور
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {}

    // Static Method: تُستدعى من الكلاس نفسه وليس من الـ Instance
    static logger(): void {
        console.log("This is Account Class");
    }

    // Method
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount cannot be less than 1");
        }
        this._balance = this._balance + amount;
    }

    // Getter
    get balance(): number {
        return this._balance;
    }

    // Setter
    set balance(value: number) {
        if (value === 0) {
            throw new Error("Value cannot be zero");
        }
        this._balance = value;
    }
}

// Instance from Account
let accountMohamed = new Account(1, "mohamed", 5);
accountMohamed.deposit(20);
console.log(accountMohamed);
console.log(accountMohamed instanceof Account);
Account.logger();

// --- 9. INHERITANCE ---
class Person {
    constructor(public firstName: string, public lastName: string) {}
    
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
    
    walk(): void {
        console.log("walking");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    // OVERRIDE: تعديل ميثود موجودة في الكلاس الأب
    override get fullName(): string {
        return "Student: " + this.firstName + " " + this.lastName;
    }
}

// --- 10. INDEX SIGNATURES ---
class UserRegistry {
    [key: string]: string; 
}

const user = new UserRegistry();
user.username = "madyan";
user.email = "madyan@gmail.com";
user["family"] = "alawi";

// --- 11. ABSTRACT CLASSES ---
/* Abstract: بتمنعك تعمل Instance من الكلاس الرئيسي.
   الميثود الـ Abstract لازم يحصل لها Implementation في الكلاسات اللي بتورث منها.
*/
abstract class Payment {
    constructor(public currency: string) {}
    abstract pay(): void;

    protected paid(): boolean { return true; }
    protected notPaied(): boolean { return false; }
}

class PaymentWithUSD extends Payment {
    override pay(): void {
        console.log('Pay with USD');
    }
}

// --- 12. INTERFACES ---
interface Auth {
    role: string;
    register(username: string, email: string, password: string): void;
    login(email: string, password: string): void;
}

class SystemUser implements Auth {
    role: string = "eltop";
    register(username: string, email: string, password: string): void {
        console.log({ username, email, password });
    }
    login(email: string, password: string): void {
        console.log({ email, password });
    }
}

// --- 13. ENCAPSULATION EXAMPLE ---
class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    get currentBalance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount > 0) this._balance += amount;
    }
}

// --- 14. GENERICS ---
// Generic Class
class Store<T> {
    constructor(public item: T) {}
}
const store1 = new Store<number>(100);

// Generic Function
function getValue<T>(value: T): T {
    return value;
}

// Generic Interface
interface IProduct<T> {
    item: T;
    price: number;
}

// --- 15. KEYOF OPERATOR ---
interface IPerson {
    username: string;
    age: number;
}
type PersonKeys = keyof IPerson; // "username" | "age"

// --- 16. UTILITY TYPES ---
type Post = {
    title: string,
    category: string,
    description: string,
    likes: number
}

const post1: Omit<Post, "category"> = { title: "P1", description: "D", likes: 1 };
const post2: Pick<Post, "category"> = { category: "Tech" };
const post3: Partial<Post> = { title: "Title only" };

// --- 17. DECORATORS ---
function Controller(constructor: Function) {
    constructor.prototype.endPoint = "/api/auth";
    constructor.prototype.login = () => {
        console.log("Logged in successfully");
    }
}

@Controller
class AuthController {}

const auth = new AuthController();
// @ts-ignore
console.log(auth.endPoint);