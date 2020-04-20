const sortingAlgoList = [
    {
        id:"bubbleSort",
        name:"Bubble Sort",
    },
    {
        id:"heapSort",
        name:"Heap Sort",
    },
    {
        id:"insertionSort",
        name:"Insertion Sort",
    },
    {
        id:"countingSort",
        name:"Counting Sort",
    },
    {
        id:"radixSort",
        name:"Radix Sort",
    },
    {
        id:"selectionSort",
        name:"Selection Sort",
    },
    {
        id:"mergeSort",
        name:"Merge Sort",
    },
    {
        id:"quickSort",
        name:"Quick Sort",
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
    let returnArraySteps = []
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

function countingSort(randomArray){
    let returnArraySteps = []
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

    var sortedArray = Array(randomArray.length).fill(0)
    //place in sorted array and decrement
    for(var i = randomArray.length - 1;i > -1;i--){
        var value = randomArray[i]
        sortedArray[countArray[value]-1] = value
        countArray[value] = countArray[value] -1
        returnArraySteps.push([...sortedArray])
    }

    return returnArraySteps
}

//for heapSort
const returnChildren = (node) => {return [node*2+1,node*2+2]}

function swapPositon(inputArray,pos1,pos2){
    const tempVariable = inputArray[pos1]
    inputArray[pos1] = inputArray[pos2]
    inputArray[pos2] = tempVariable
    return inputArray
}

function heapify(randomArray,node){
    const nodeChildren = returnChildren(node)
    do{
        var lastLoop = true
        //if the node is smaller than the children nodes, swap
        if(randomArray[node]<randomArray[nodeChildren[1]]){
            //try the right child
            randomArray = swapPositon(randomArray,node,nodeChildren[1])
            lastLoop = false
        }

        if(randomArray[node]<randomArray[nodeChildren[0]]){
            //try the left child
            randomArray = swapPositon(randomArray,node,nodeChildren[0])
            lastLoop = false
        }

        //call heapify on the childs
        if(randomArray[nodeChildren[0]]!=undefined){
            randomArray = heapify(randomArray,nodeChildren[0])
        }
        if(randomArray[nodeChildren[1]]!=undefined){
            randomArray = heapify(randomArray,nodeChildren[1])
        }
    }while(lastLoop==false)
    return randomArray
}

function heapSort(randomArray){
    var sortedArray = []
    var returnArray = []
    while(randomArray!=undefined&&randomArray.length!=0){
        randomArray = heapify(randomArray,0)

        //heap is built, now swap the first and last element
        randomArray = swapPositon(randomArray,0,randomArray.length-1)
        //remove the last element as it is the max
        var lastElement = randomArray.pop()
        sortedArray.push(lastElement)
        returnArray.push([...randomArray.concat(sortedArray).reverse()])
    }
    //reverse the array
    return returnArray
}

//for insertionSort
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
    let returnArraySteps = []
    for(var i = 1;i < randomArray.length;i++){
        if(randomArray[i-1] > randomArray[i]){
            var insertionValue = randomArray.splice(i,1)[0]
            randomArray = [...insert(randomArray,insertionValue)]
            returnArraySteps.push(randomArray)
        }
    }
    return returnArraySteps
}

//for radixSort
const radixMagnitudeValue = (value,magnitude)=>{
    let strValue = ""+value
    let magValue = parseInt(strValue[strValue.length - magnitude - 1])
    if(isNaN(magValue)){
        return 0
    }else{
        return magValue
    }
}

function radixSort(randomArray){
    let returnArraySteps = []
    for(var magnitude = 0;10**magnitude <= Math.max.apply(null,randomArray);magnitude++){
        let sortedArray = Array(10).fill([])
        for(var index=0;index<randomArray.length;index++){
            let value = randomArray[index]
            let magVal = radixMagnitudeValue(value,magnitude)
            sortedArray[magVal] = sortedArray[magVal].concat([value])
            returnArraySteps.push([...sortedArray.flat()])
        }
        randomArray = sortedArray.flat()
    }
    return returnArraySteps
}

//for selectionSort
function indexLoc(nums){
    for (var i = 0; i < nums.length;i++){
        if(nums[i]==Math.min.apply(null,nums)){
            return i
        }
    }
}

function selectionSort(randomArray) {
    var returnArraySteps = []
    var sortedArray = []
    while(randomArray.length > 0){ //While the original array is not empty
        //Get the min/max value
        let value = Math.min.apply(null,randomArray)

        //Remove the value from original array
        randomArray.splice(indexLoc(randomArray),1);

        //Add the value to the list
        sortedArray.push(value)
        returnArraySteps.push(sortedArray.concat(Array(randomArray.length).fill(0)))

    }

    return returnArraySteps
}

//for mergeSort
var mergeSortSteps = []
var initialArrayLengthMergeSort = []
function mergeSortMerge(firstHalf,secondHalf){
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
            let appendValue = firstHalf.shift()
            mergedArray.push(appendValue)
        }else{
            let appendValue = secondHalf.shift()
            mergedArray.push(appendValue)
        }

    }while(firstHalf.length + secondHalf.length > 0)

    return mergedArray
}

function mergeSort(randomArray) {
    if (randomArray.length > 1){//keep splitting until size 1
        let midpoint = Math.round(randomArray.length/2) //Get the midpoint, if uneven, get the rounded up midpoint
        //if not sorted
        const firstHalf = mergeSort(randomArray.splice(0,midpoint))
        const secondHalf = mergeSort(randomArray)

        randomArray = mergeSortMerge(firstHalf,secondHalf)

        if(randomArray.length > 2){
            mergeSortSteps.push([...randomArray.concat(Array(initialArrayLengthMergeSort - randomArray.length).fill(0))])
        }
    }

    return randomArray
}

function mergeSortHandler(randomArray){
    initialArrayLengthMergeSort = randomArray.length
    mergeSort(randomArray)
    return mergeSortSteps
}

//for quickSort
var quickSortSteps = []
var initialArrayLengthQuickSort = []
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
    let leftHalf = []
    let rightHalf = []

    //place into new arrays
    for(var i = 0;i<randomArray.length;i++){
        let value = randomArray[i]
        if(value<partitionValue){leftHalf.push(value)}
        else{rightHalf.push(value)}
    }

    return [leftHalf,rightHalf]
}

function quickSort(randomArray) {
    if(randomArray!=undefined&&randomArray.length > 1){
        const partitionValue = randomArray.pop()
        const halves = getHalves(partitionValue,randomArray)
        let mergedArray = mergeArrays(quickSort(halves[0]),partitionValue,quickSort(halves[1]))
        quickSortSteps.push([...mergedArray.concat(Array(initialArrayLengthQuickSort - randomArray.length).fill(0))])
        return mergedArray
    }
    return randomArray
}

function quickSortHandler(randomArray){
    initialArrayLengthQuickSort = randomArray.length
    quickSort(randomArray)
    return quickSortSteps
}

export {sortingAlgoList,bubbleSort,countingSort,heapSort,insertionSort,radixSort,selectionSort,mergeSortHandler,quickSortHandler}