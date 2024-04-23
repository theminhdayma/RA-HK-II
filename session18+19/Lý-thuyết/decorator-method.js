"use strict";
/*
    - Trang trí cho phuong thức
    - phương thức và hàm khác nhau như thế nào?
    - hàm là những function tự định nghĩa
    - phương thức dùng trong đối tượng hoặc lớp
    - map, filter, forEach là phương thức của array và object
      
       ==> Để dùng decorator cho function
       thì phải dùng @trước phương thức
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Tạo function decor cho function cho class Test    
//function phải có 3 đối số
function decorMethodSum(target, propetyKey, descriptor) {
    console.log(111111111111, target);
    console.log(2222222, propetyKey);
    console.log(333333, descriptor);
    // Trong desctiptor có chứa 1 được đối tượng có chứa thuộc tính value
    // Nhờ cái calue thì mới đi decor vjo 1 method được
    descriptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    // Viết phương thức cho class Test
    //Tạo function tính tổng
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethodSum,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum", null);
let number = new Test();
console.log(number.sum(1, 2));
/*
    Có 3 cái: decorator
    + với accessor: 1,2,3
    + với param 4, 5, 6
    + với propety 7, 8
*/
