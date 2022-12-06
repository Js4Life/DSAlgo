var longestCommonPrefix = function (str) {
    if (str.length === 0) {
        return ""
    }
    let prefix = str[0]
    for (let index = 1; index < str.length; index++) {
        console.log('str[index].indexOf(prefix)', str[index], prefix)
        while (str[index].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);

        }
        console.log('prefix currentl', prefix)
    }
    return prefix

}

var strs = ["flower", "flow", "flight"]

longestCommonPrefix(strs)