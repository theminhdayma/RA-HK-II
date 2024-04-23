function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();

        const executionTime = end - start;
        console.log("Thời gian: ", executionTime.toFixed(4) + " miliseconds");

        return result;
    };

    return descriptor;
}

class Example {
    @timingDecorator
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const example = new Example();
console.log("Kết quả: ", example.multiply(2, 3));
