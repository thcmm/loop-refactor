'use strict';

/*

 Refactor the following functions. Use higher-order functions rather than for-loops.

 Choose from the following higher-order functions: map, filter, reduce, every, some

 Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

 */

module.exports = {

    sum: (arr, base) => {
        return arr.reduce((currentVal, previousVal) => {
                    return currentVal + previousVal;
                }, 0) + base;
    },

    someObjsContainProp: (arr, property) => {
        return arr.some((item) => { if (item.hasOwnProperty(property)) return true;})
},

convertNameArrayToObject: (arr) => {
  return arr.map((item) => {
    let obj = {}; obj.first = item[0]; obj.last = item[1]; // obj props
    return obj;
  })
},

objContainsProp: (arr, prop) => {
  return arr.every((element) => { if (element.hasOwnProperty(prop)) return true;
  })
},

stringMatch: (arr, str) => {
  return arr.filter((element) => {
    return element.includes(str)
  });
}
};
