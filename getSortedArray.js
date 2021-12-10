'use strict';

function getSortedArray(array, key) {
    if (key == "age") {
        arrayAge.sort(function (a, b) {
            if (Number(a.age) < Number(b.age))
                return -1;
            if (Number(a.age) > Number(b.age))
                return 1;
            return 0;
        })
    }

    if (key == "name") {
        array.sort(function (c, d) {
            let nameA = c.name, nameB = d.name;
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        })
    }
    return array;
}


let array = [{ name: 'Макар', age: 20 },
{ name: 'Роберт', age: 32 },
{ name: 'Екатерина', age: 50 },
{ name: 'Оксана', age: 24 },
{ name: 'Святослав', age: 43 }];

array = getSortedArray(array, 'age');
array = getSortedArray(array, 'name');

console.log(array); //[{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];