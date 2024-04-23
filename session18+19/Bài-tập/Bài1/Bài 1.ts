function logInfo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(a: number, b: number) {
        console.log("Tên hàm: ", propertyKey);

        console.log("Tham số đầu vào:", {a, b});

        console.log("Kết quả trả về: ", a+b);
        
    };

    return descriptor;
}

class Info {
    @logInfo
    sum(a: number, b: number) {
        return a + b;
    }
}

let info = new Info();
info.sum(1, 2);
