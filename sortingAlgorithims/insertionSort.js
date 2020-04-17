function insert(inputArray,number){
    //everything to the left should be sorted
    for (var i = 0; i < inputArray.length;i++){
        if(number <= inputArray[i]){
            inputArray.splice(i,0,number)
            return inputArray
        }
    }
}

function insertionSort(randomArray) {
    for(var i = 1;i < randomArray.length;i++){
        if(randomArray[i-1] > randomArray[i]){
            insertionValue = randomArray.splice(i,1)[0]
            randomArray = insert(randomArray,insertionValue)
        }
    }

    return randomArray
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = insertionSort(randomArray);
    console.log("Output of " + String(result))
}