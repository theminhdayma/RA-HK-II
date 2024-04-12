"use strict";
class Cha {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    updateID(newID) {
        this.id = newID;
    }
}
class Con extends Cha {
    constructor(id, name) {
        super(id, name);
        // this.id = id
        this.name = name;
    }
    updateID(newID) {
        super.updateID(newID);
    }
}
/*
    ==> Khi dùng access modifier private thì không thể
    thay đổi được gia trị của thuộc tính này ở ngoài class cha
       Chỉ có thể thay ở trong chính lớp đó hoặc dùng hàm để gọi id đó ra rồi
       thay đổi

    ==> Khi dùng access modifier protected thì có thể thay đổi được ở mọi nơi
*/ 
