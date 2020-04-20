const sortingAlgoList = [
    {
        id:"bubbleSort",
        name:"Bubble Sort",
    },
]

//for bubbleSort
function swapWithNext(inputArray,indexLoc){
    let firstItem = inputArray[indexLoc]
    inputArray[indexLoc] = inputArray[indexLoc+1]
    inputArray[indexLoc+1] = firstItem
    return inputArray
}

function bubbleSort(randomArray) {
    var returnArraySteps = []
    do{
        var finishPassing = true
        for(var i = 0;i < randomArray.length;i++){
            if(randomArray[i] > randomArray[i+1]){
                randomArray = [...swapWithNext(randomArray,i)]
                returnArraySteps.push(randomArray)
                finishPassing = false
            }
        }
    }while(finishPassing == false)

    return returnArraySteps
}

export {sortingAlgoList,bubbleSort}