// Decorator function để kiểm tra kiểu dữ liệu của các tham số
function enforceType(paramTypes: string[]) {
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
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
    @enforceType(['number', 'string'])
    exampleFunction(x: number, y: string): void {
        console.log(x, y);
    }
}

const example02 = new Example02();
example02.exampleFunction(5, "hello");
// example02.exampleFunction("not a number", "world");
//   ==> Lỗi
