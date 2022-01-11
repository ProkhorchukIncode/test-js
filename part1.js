const getMulTable = (n) => {
    for(let i = 1; i<10; i++){
        const answer = `${n}*${i} = ${n*i}`
        console.log(answer);
    }
  }
  
  getMulTable(5)
//   > 5*1 = 5
//     5*2 = 10
//     …
//     5*9 = 45

const anagram = (str1, str2) => {
    for(let i = 0; i<str2.length; i++){
      let bool = str2.includes(str1[i])
      if (!bool){
        return console.log(false);
      } 
  }
  return console.log(true);
 }
 
 anagram('night', 'thing') // true
 anagram('state', 'taste') // true
 anagram('cat', 'dog') // false

function findMaxInterv(){
  let argsArray = [...arguments]
    let answer = 0
    for(let i = 0; i<argsArray.length-1; i++){
      let maxNumber = 0
      if(argsArray[i]>argsArray[i+1]){
        maxNumber = argsArray[i]-argsArray[i+1]
      }else{
        maxNumber = argsArray[i+1]-argsArray[i]
      }
      if(maxNumber>answer){
        answer = maxNumber
      }
    }
    console.log(answer);
  return answer
 }
 
 findMaxInterv(3, 5, 2, 7); // 5
 findMaxInterv(3, 5, 2, 7, 11, 0, -2); // 11
 findMaxInterv(3, 5); // 2
 findMaxInterv(3); // 0