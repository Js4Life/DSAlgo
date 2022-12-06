var mergeTwoSorted = function(list1,list2) {
    // console.log()
    // return Array.from(new Set(list1.concat(list2).sort((x,y)=>x-y)))

    return list1.concat(list2).sort((x,y)=>x-y)
}

const list1 = [1,2,4];
const list2 = [1,3,4];

console.log('output',mergeTwoSorted([],[]))
console.log('output1',mergeTwoSorted(list1,list2))