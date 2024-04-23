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
function memoize(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
        const key = JSON.stringify(args);
        if (!cache.hasOwnProperty(key)) {
            console.log(`"Calculating sum..." and then`);
            cache[key] = originalMethod.apply(this, args);
        }
        else {
            console.log(`(no "Calculating sum..." because the result is cached)`);
        }
        return cache[key];
    };
    return descriptor;
}
class Example1 {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    memoize,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example1.prototype, "add", null);
const example1 = new Example1();
console.log(example1.add(2, 3));
console.log(example1.add(2, 3));
