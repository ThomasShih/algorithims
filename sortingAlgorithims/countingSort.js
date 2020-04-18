//This algo is wild

function countingSort(randomArray){
    //get the max value
    const max = Math.max.apply(null,randomArray)

    var countArray = new Array(max+1).fill(0)

    //fill out counts
    for(var i = 0;i<randomArray.length;i++){
        countArray[randomArray[i]] = countArray[randomArray[i]] + 1
    }

    //create cumulative counts
    for(var i = 0;i<max;i++){
        countArray[i+1] = countArray[i+1] + countArray[i]
    }

    var sortedArray = []
    //place in sorted array and decrement
    for(var i = randomArray.length - 1;i > -1;i--){
        value = randomArray[i]
        sortedArray[countArray[value]-1] = value
        countArray[value] = countArray[value] -1
    }

    return sortedArray
}

if (require.main === module) {
    var randomArray = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = countingSort(randomArray);
    console.log("Output of " + String(result))
}