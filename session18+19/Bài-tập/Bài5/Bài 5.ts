// Định nghĩa một decorator function
function combineFunctions(...functions: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let result = originalMethod.apply(this, args);
            functions.forEach(func => {
                result = func(result);
            });
            return result;
        };

        return descriptor;
    };
}

// Sử dụng decorator này
class Example01 {
    @combineFunctions(
        (x: number) => x * 2,
        (x: number) => x + 4,
        (x: number) => x / 2
    )
    exampleFunction(x: number): number {
        return x;
    }
}

const example01 = new Example01();
console.log(example01.exampleFunction(2));
