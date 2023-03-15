// console.log("Hello world")
// president = "obi"
// console.log(president);
// let digits=[...numbers]
// console.log(digits);
// let results =[2,7,10,9]
// function returnBoom(arr){
//     function check7(e){
//         return e ===7
//         }
    
//      let values = arr.find(check7)
//     if (values=== 7) {
//     console.log("Boom");     
//      }else{
//          console.log("The number 7 doesnt exist in this array");
//      }
// }
// returnBoom(results)
// blow=(x,y)=>{ return "The sum is" + x + y}
// console.log(blow(10,20));
// function show(){
//     return x => x + arguments[0]
// }
// let display = show(40,20)
// let result = display(5)
// console.log(result);
function filter(nums){
    let solution = []
    for(const num of nums){
        if(num % 2 !=0){
            solution.push(num)
        }
    }
    return solution
}
let numbers = [1,2,3,4,5,6,7]
console.log(filter(numbers));
function person(name, action){
    console.log(`What is your  name ? ${name} `);
action()
}
 function bollo(){
     console.log("The name is at the end");
 }
person ("osayande",bollo)
 const [a, ,b , ...rest]=[1,2,3,4,5,6,7,8,9,0]
 console.log(a,b);
 console.log(...rest);
  const obj = {uv:10, xy:20}
 const {uv,xy} = obj
 console.log(uv);