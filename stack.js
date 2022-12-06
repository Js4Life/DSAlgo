function createStack() {
    const items = []
    return {
    //    items : [],
        push(item) {
          //  this.items.push(item)
          items.push(item)
        },
        pop() {
          //  return this.items.pop();
          return items.pop()
        }
    }
}

const stack = createStack();

stack.push(10)
stack.push(11)
stack.push(5)
stack.pop()

// stack.items = [10,100,1000] // data encap broken

console.log(stack.items)


function createStack1() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack1 = createStack1();
  stack1.push(10);
  stack1.push(5);
  stack1.pop(); // => 5
  stack1.items; // => undefine

  console.log(stack1.items)