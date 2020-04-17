function indexLoc(nums){
    for (var i = 0; i < nums.length;i++){
        if(nums[i]==Math.min.apply(null,nums)){
            return i
        }
    }
}

function selectionSort(randomArray) {
    var sortedArray = []

    while(randomArray.length > 0){ //While the original array is not empty
        //Get the min/max value
        value = Math.min.apply(null,randomArray)

        //Remove the value from original array
        randomArray.splice(indexLoc(randomArray),1);

        //Add the value to the list
        sortedArray.push(value)
    }

    return sortedArray
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = selectionSort(randomArray);
    console.log("Output of " + String(result))
}