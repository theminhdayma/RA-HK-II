"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logAccess(target, propertyKey, descriptor) {
    let originalGetter = descriptor.get;
    let originalSetter = descriptor.set;
    if (originalGetter) {
        descriptor.get = function () {
            return `Giá trị từ ${propertyKey} là ${originalGetter === null || originalGetter === void 0 ? void 0 : originalGetter.call(this)}`;
        };
    }
    if (originalSetter) {
        descriptor.set = function (value) {
            console.log(`Thay đổi giá trị của ${propertyKey} thành ${value}`);
            originalSetter.call(this, value);
        };
    }
}
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
__decorate([
    logAccess,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person.prototype, "name", null);
let person = new Person("John");
console.log(person.name);
person.name = "Alice";
/*
    Dấu gạch chân (_) thường được sử dụng trong TypeScript (và nhiều ngôn ngữ lập trình khác)
    để chỉ ra rằng một biến hoặc thuộc tính là "private", nghĩa là nó chỉ được truy cập hoặc
    sử dụng bên trong class đó. Điều này là một quy ước phổ biến để bảo vệ dữ liệu và giảm
    nguy cơ xung đột giữa các thành phần của ứng dụng.

    Khi một thuộc tính hoặc biến được đánh dấu là "private", nó chỉ có thể được truy cập hoặc
    sử dụng bên trong class đó và không thể truy cập từ bên ngoài class đó. Điều này giúp giữ
    cho dữ liệu được ẩn và bảo vệ khỏi sự thay đổi không mong muốn.
*/
function frequency(arr) {
    let ischeck;
    let luutru = 0;
    for (let i = 0; i < arr.length; i++) {
        ischeck = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                ischeck++;
            }
        }
        if (luutru <= ischeck) {
            luutru = ischeck;
        }
    }
    return luutru;
}
let arr = [1, 2, 3, 4, 5, 6, 5, 4, 5];
console.log(frequency(arr));
