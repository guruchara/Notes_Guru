
let a=[10,20,30,12,18,29]

// by using we can filter all elements of array we required to pass function only reamin those elements whose satisfy the condition

let ans=a.filter(check_adult)

console.log(ans);

function check_adult(age)
{
    return age>18
}

