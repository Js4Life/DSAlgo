var s = "()[]{}";

var isValid = function(s) {
    let st = [];
    const legend = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (let index = 0; index < s.length; index++) {
        const element =s[index]
        if(element === "(" || element === "[" || element === "{") {
            st.push(element)
        } else if(legend[st.pop()] !== element){
            return false
        }
    }

    return st.length ? false : true;

}

console.log(isValid(s))