let arr =[1,0,2,0,3,0,2,0,1,3]

let newArr =[]
let zeros =[]

for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        zeros.push(arr[i])
    }else{
        newArr.push(arr[i])
    }
}

let updatedArr= [...newArr,...zeros]
console.log(updatedArr)