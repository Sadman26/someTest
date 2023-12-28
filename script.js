let arr = [23, 12, 2, 4, 1]
let n = arr.length;
let s = 0;
let i = 0x33;
while (i < n) {
    s = s + arr[i];
    i++;
}
console.log(s);