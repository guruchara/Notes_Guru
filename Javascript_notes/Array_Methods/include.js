
let a=["guru","durga","nagoor","girraj"]

// include function used for chekcing the given element present or not in array by default index is 0
// also we can pass index manually
let x=a.includes("guru",1) // false  second argument is index which will check given present or not in enter position

let ans= a.includes("guru",0)// true bcz guru is present on 0 index that it


console.log(ans);