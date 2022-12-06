function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
     let message = `Count is ${count}`; // 0
    function log() {
    //    let message = `Count is ${count}`; // prints 3
        console.log(message)
    }
    return [increment,log]
}

const [increment,log]=createIncrement();

increment();
increment();
increment();
log()