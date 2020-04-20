function mergeArrays(leftArray,partitionValue,rightArray){
    if(rightArray==undefined && leftArray==undefined){
        var sortedArray = [partitionValue]
    }else if(rightArray==undefined){
        var sortedArray = leftArray.concat([partitionValue])
    }else if(leftArray==undefined){
        var sortedArray = [partitionValue].concat(rightArray)
    }else{
        var sortedArray = leftArray.concat([partitionValue].concat(rightArray))
    }

    return sortedArray
}

function getHalves(partitionValue,randomArray){
    leftHalf = []
    rightHalf = []

    //place into new arrays
    for(var i = 0;i<randomArray.length;i++){
        value = randomArray[i]
        if(value<partitionValue){leftHalf.push(value)}
        else{rightHalf.push(value)}
    }

    return [leftHalf,rightHalf]
}

function quickSort(randomArray) {
    if(randomArray!=undefined&&randomArray.length > 1){
        const partitionValue = randomArray.pop()
        const halves = getHalves(partitionValue,randomArray)
        return mergeArrays(quickSort(halves[0]),partitionValue,quickSort(halves[1]))
    }
    return randomArray
}

if (require.main === module) {
    var randomArray = [...Array(4)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = quickSort(randomArray);
    console.log("Output of " + String(result))
}