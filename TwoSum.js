var twoSum = function (array, target) {
    for (let index = 0; index < array.length; index++) {
        for (let j = index + 1; j < array.length; j++) {
            if (array[index] + array[j] === target) {
                return [index, j]
            }
        }
    }
}

// 2 7
// 2 11
// 2 15
// 7 11
// 7 15
// 11 15 and complexity O(n^2)

var twoSum2 = function(array,target) {
    let indices = {};

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     indices[element] = index     
    // }

    array.forEach((item,index) => {
        indices[item] = index 
    });
    console.log('second',indices); // { '2': 0, '7': 1, '11': 2, '15': 3 }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];     
        const complementary = target - element;
        if(indices[complementary] !== undefined && index !== indices[complementary]) {
                return [index,indices[complementary]]
        }
        
    }
}

const output = twoSum2([11,23,2, 7, 11, 15], 9);
 console.log('output', output)

