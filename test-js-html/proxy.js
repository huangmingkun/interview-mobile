// const arr = new Proxy([], {
//   set(target, key, value) {
//     console.log(`Setting index ${key} to ${value}`);
//     target[key] = value;
//     return true;
//   }
// });
// arr.push('hmk'); // 自动触发拦截


const obj = new Proxy({}, {
  has(target, key) {
    console.log(`Checking if ${key} exists`);
    return key in target;
  }
});
'key' in obj; // 自动触发 has 拦截

