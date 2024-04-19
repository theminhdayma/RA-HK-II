type GenericObject<T = any> = {
  [key: string]: T | GenericObject<T>;
};

function isGenericObject<T>(value: any): value is GenericObject<T> {
  return typeof value === 'object' && !Array.isArray(value);
}

function mergeObjects<T>(obj1: GenericObject<T>, obj2: GenericObject<T>): GenericObject<T> {
  let merged: GenericObject<T> = {...obj1 };

  for (let key in obj2) {
    if (key in obj1) {
      let value2 = obj2[key];
      let value1 = obj1[key];

      if (isGenericObject(value1) && isGenericObject(value2)) {
        merged[key] = mergeObjects(value1, value2);
      } else {
        merged[key] = value2;
      }
    }
  }

  return merged;
}

let object1 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

let object2 = {
  a: 5,
  b: {
    c: 6,
    d: [7, 8],
    e: {
      f: 9
    }
  },
  g: 10
};

console.log(mergeObjects(object1, object2));
