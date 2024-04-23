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
// Decorator function để kiểm tra kiểu dữ liệu của các tham số
function enforceType(paramTypes) {
    return function (target, propertyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (args.length !== paramTypes.length) {
                throw new Error(`Số lượng đối số được truyền cho ${propertyName} không hợp lệ`);
            }
            for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                const paramName = paramTypes[i];
                if (typeof arg !== paramName) {
                    throw new Error(`Kiểu dữ liệu không hợp lệ ${i + 1} của phương thức ${propertyName}`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class Example02 {
    exampleFunction(x, y) {
        console.log(x, y);
    }
}
__decorate([
    enforceType(['number', 'string']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], Example02.prototype, "exampleFunction", null);
const example02 = new Example02();
example02.exampleFunction(5, "hello");
// example02.exampleFunction("not a number", "world");
//   ==> Lỗi
