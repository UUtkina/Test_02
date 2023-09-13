const alfabeta = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const kata = "Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.";

function alphabetPosition(str){
  res=str
  .toLowerCase()
  .split('')
  .map(i=>{
    let index=alfabeta.findIndex(el=> el === i);
    return index !== -1? index + 1 : ''
  })
  .filter(i=> i !== '')
  .join(' ');
  return res
  }
  console.log(res)