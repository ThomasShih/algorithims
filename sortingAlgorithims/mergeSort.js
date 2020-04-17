function merge(firstHalf,secondHalf){
    var mergedArray = []

    // while there is still numbers to merge
    do{
        //check to see if either array is empty, if so, then we know the remaining values are just the other array
        if(firstHalf === undefined || firstHalf.length == 0){
            mergedArray = mergedArray.concat(secondHalf)
            break
        }else if(secondHalf === undefined || secondHalf.length == 0){
            mergedArray = mergedArray.concat(firstHalf)
            break
        }

        //Check to see which array starts with a smaller value and append it into the new array
        if(firstHalf[0]<secondHalf[0]){
            appendValue = firstHalf.shift()
            mergedArray.push(appendValue)
        }else{
            appendValue = secondHalf.shift()
            mergedArray.push(appendValue)
        }

    }while(firstHalf.length + secondHalf.length > 0)

    return mergedArray
}

function mergeSort(randomArray) {

    if (randomArray.length > 1){//keep splitting until size 1
        midpoint = Math.round(randomArray.length/2) //Get the midpoint, if uneven, get the rounded up midpoint
        //if not sorted
        const firstHalf = mergeSort(randomArray.splice(0,midpoint))
        const secondHalf = mergeSort(randomArray)

        randomArray = merge(firstHalf,secondHalf)
    }
    return randomArray
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = mergeSort(randomArray);
    console.log("Output of " + String(result))
}