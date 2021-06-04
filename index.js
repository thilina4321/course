const arr = ['sudhara', 'ishara', 'maduka', 'liyo']

// array add
// array ekkata data add karana vidiya
arr.push('prageesha')

// console.log(arr);

// array ekaka thiyendva balanava
arr.find((val) => val == 'sudhara')

// array ekaka value eke index eka hoya gannava
const a = arr.indexOf('maduka') // -1

// update karana vidiya
arr[a] = 'isharaaaa'
console.log(arr);

// delete karana vidiya
arr.splice(a, 1)
console.log(arr);


// delete karanava
let a = arr1.filter( (ele)=>  ele != 'maduka')
console.log(a);












//git 

// git init
// git add .
// git commit -m "message"
// git status
// git log --- commit kalata passe