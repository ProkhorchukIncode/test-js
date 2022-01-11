const getMulTable = (n) => {
    for(let i = 1; i<10; i++){
        const answer = `${n}*${i} = ${n*i}`
        console.log(answer);
    }
  }
  
  // getMulTable(5)
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
 
//  anagram('night', 'thing') // true
//  anagram('state', 'taste') // true
//  anagram('cat', 'dog') // false

function findMaxInterv(){
  let argsArray = [...arguments]
  let answer = argsArray.reduce(
    (previousValue, currentValue, index, argsArray) => {
      // console.log(newArray[index]);
      let newArray = []
      if(argsArray[index]>currentValue){
        // console.log(previousValue);
        a = argsArray[index]-currentValue
      } else{
        console.log(currentValue);
        a = currentValue-argsArray[index]
      }
      // console.log(a);
      return a
    })
    console.log(answer);
 }
 
 findMaxInterv(3, 5, 2, 7); // 5
//  findMaxInterv(3, 5, 2, 7, 11, 0, -2); // 11
//  findMaxInterv(3, 5); // 2
//  findMaxInterv(3); // 0