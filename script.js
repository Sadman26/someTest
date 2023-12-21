let x = true;
let stk = [];
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        x = false
        stk.push(x);
    }
    stk.push(x)
}
console.log(stk);