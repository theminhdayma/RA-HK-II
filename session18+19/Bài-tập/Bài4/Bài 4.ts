function parameterValidation(validationFunction: (args: any[]) => boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        if (!validationFunction(args)) {
          throw new Error(`Không hợp lệ`);
        }
  
        return originalMethod.apply(this, args);
      };
  
      return descriptor;
    };
}

class Example2 {
    @parameterValidation((args) => args.every((arg) => typeof arg === 'number'))
    example(a: number, b: number): void {
        console.log("Hello World");
    }
}
  
const example2 = new Example2();
example2.example(1, 2);