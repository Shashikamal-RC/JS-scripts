// let vs var

let imGlobal = "someValue";

if(true){
    let imLocal = "someMoreValue";
    console.log(imGlobal) // it is accessible
    console.log(imLocal)
    imGlobal = "superman"
}

// console.log(imLocal) // not accessible
console.log(imGlobal) // accessible

// Note:- Even we can change global  value inside local  scope