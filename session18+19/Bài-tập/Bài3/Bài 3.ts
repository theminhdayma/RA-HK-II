function memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: { [key: string]: any } = {};

    descriptor.value = function(...args: any[]) {
        const key = JSON.stringify(args);
        
        if (!cache.hasOwnProperty(key)) {
            console.log(`"Calculating sum..." and then`);
            cache[key] = originalMethod.apply(this, args);
        } else {
            console.log(`(no "Calculating sum..." because the result is cached)`);
        }
        return cache[key];
    };

    return descriptor;
}

class Example1 {
    @memoize
    add(a: number, b: number): number {
        return a + b;
    }
}

const example1 = new Example1();
console.log(example1.add(2, 3));
console.log(example1.add(2, 3));
