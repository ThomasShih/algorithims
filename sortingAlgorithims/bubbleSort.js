function swapWithNext(inputArray,indexLoc){
    firstItem = inputArray[indexLoc]
    inputArray[indexLoc] = inputArray[indexLoc+1]
    inputArray[indexLoc+1] = firstItem
    return inputArray
}

function bubbleSort(randomArray,ascending=true) {
    do{
        finishPassing = true
        for(var i = 0;i < randomArray.length;i++){
            if(randomArray[i] > randomArray[i+1]){
                randomArray = swapWithNext(randomArray,i)
                finishPassing = false
            }
        }
    }while(finishPassing == false)
    if(!ascending){randomArray.reverse()}
    return randomArray
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = bubbleSort(randomArray,ascending=true);
    console.log("Output of " + String(result))
}