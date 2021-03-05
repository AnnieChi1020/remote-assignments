function max(arr){
    let max = arr[0];
    for(let i=1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
    }
    return max;
}

console.log (max([1, 2, 4, 5])); // result to 5
console.log (max([5, 2, 7, 1, 6])); // result to 7