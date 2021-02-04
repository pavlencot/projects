//task 3
const arr=[1,0,10,'0','1',NaN,false,null,undefined,'false','true'];
let newArr=[];

for(let i=0;i<arr.length;i++){

  if(arr[i]){
    newArr.push(arr[i]);
  }
}
var allElements = newArr.values();
for (let elem of allElements) {
  console.log(elem);
}
