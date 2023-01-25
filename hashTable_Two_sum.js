function twoSum(arrayNum,targetValue){
  let hashTable={}
   arrayNum.map((value,index)=>{
       hashTable[value]=true
   })
   for(let i=0;i<arrayNum.length;i++){
           let diff=targetValue-arrayNum[i]
           if(hashTable.hasOwnProperty(diff)){
               return [diff,arrayNum[i]]
           }
       }
   return []
}

let a=twoSum([1, 2, 3, 4,5,6],9)
console.log(a)
