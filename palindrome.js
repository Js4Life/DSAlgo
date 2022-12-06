var isPalindrome = function(x) {
    // OPTION 1
    // let reversed = x.toString().split("").reverse().join("");
    // return x.toString() === reversed

    let reversedString = '';
    let xStr = x.toString(); // xStr = '123'

    for(let i of xStr) {      
        reversedString = i + reversedString 
    }

   return reversedString === xStr
}

var output = isPalindrome(121)
console.log(output) // 109ms , optn 2 -> 102ms

