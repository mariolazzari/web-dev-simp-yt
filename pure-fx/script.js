const nums = [1, 2, 3];

const addNumber = (nums, num) => [...nums, num];

let res = addNumber(nums, 4);
res = addNumber(nums, 4);
res = addNumber(nums, 4);

console.log(nums);
console.log(res);
