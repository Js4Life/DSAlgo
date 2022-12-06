const list1 = [1,1,2]



function removeDup(list1) {
    let uniq = []
    for (let index = 0; index < list1.length; index++) {
        const element = list1[index];   
       if(uniq.indexOf(element) < 0) {
        uniq.push(element)
       }
        
    }
    return uniq
}


const val =removeDup(list1);
console.log('valz',val)