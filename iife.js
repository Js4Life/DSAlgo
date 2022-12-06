(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a)
    })(1)
})(0);

// 0
