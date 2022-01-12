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
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let answer = false
  if(arr1.length !== arr2.length){
    return console.log(answer)
  }
  for(let i = 0; i<arr1.length; i++){
    const finded1= arr2.find(num => num ===arr1[i])
    const finded2= arr1.find(num => num ===arr2[i])
    if(finded1 && finded2){
      answer= true
    } else {
      answer= false
    }
  }

  return console.log(answer);
 }
 
 anagram('night', 'thing') // true
 anagram('state', 'taste') // true
 anagram('cat', 'dog') // false
//  anagram('ccc', 'dog')
//  anagram('cccc', 'dog')
//  anagram('ggggg', 'dog')
//  anagram('dd', 'dog')
//  anagram('god', 'dog')

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
  return console.log(answer);
 }
 
 findMaxInterv(3, 5, 2, 7); // 5
 findMaxInterv(3, 5, 2, 7, 11, 0, -2); // 11
 findMaxInterv(3, 5); // 2
 findMaxInterv(3); // 0