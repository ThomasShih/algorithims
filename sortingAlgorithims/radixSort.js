const magnitudeValue = (value,magnitude)=>{
    strValue = ""+value
    magValue = parseInt(strValue[strValue.length - magnitude - 1])
    if(isNaN(magValue)){
        return 0
    }else{
        return magValue
    }
}


function radixSort(randomArray){
    for(var magnitude = 0;10**magnitude < Math.max.apply(null,randomArray);magnitude++){
        sortedArray = Array(10).fill([])
        for(var index=0;index<randomArray.length;index++){
            value = randomArray[index]
            magVal = magnitudeValue(value,magnitude)
            sortedArray[magVal] = sortedArray[magVal].concat([value])
        }
        randomArray = sortedArray.flat()
    }
    return randomArray
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = radixSort(randomArray);
    console.log("Output of " + String(result))
}