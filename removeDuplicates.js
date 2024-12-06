let removeDuplicates = (sortedList) => {
  let finalList = [];
  for (let currentValue = 0; currentValue < sortedList.length; currentValue++) {
    if(sortedList[currentValue]){
        if (sortedList[currentValue] == sortedList[currentValue + 1]) {
            finalList.push(sortedList[currentValue]);
            continue;
          }
    }else{
        finalList.push('-');
    }



    if (sortedList[currentValue] == sortedList[currentValue + 1]) {
      currentValue++;
      continue;
    }
    finalList.push(sortedList[currentValue]);
  }
  let removedDuplicates=sortedList.length-finalList.length;

};
