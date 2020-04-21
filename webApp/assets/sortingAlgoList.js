const sortingAlgoList = [
    {
        id:"bubbleSort",
        name:"Bubble Sort",
        timeComplexity:"n\^2",
        spaceComplexity:"1",
        desc:"The simplest sorting algorithim for one to understand, however performance wise, this algorithim is one of the worst. The algorithm works by continously swapping algorithims adjacent to each other until no more can be swapped, at which point the array is sorted."
    },
    {
        id:"insertionSort",
        name:"Insertion Sort",
        timeComplexity:"n\^2",
        spaceComplexity:"1",
        desc:"Similar to how humans sort, insertion sort work by looking through the array, and inserting each element to its correct place in the indices before."
    },
    {
        id:"heapSort",
        name:"Heap Sort",
        timeComplexity:"n*log(n)",
        spaceComplexity:"1",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
    },
    {
        id:"selectionSort",
        name:"Selection Sort",
        timeComplexity:"n\^2",
        spaceComplexity:"1",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
    },
    {
        id:"mergeSort",
        name:"Merge Sort",
        timeComplexity:"n*log(n)",
        spaceComplexity:"n",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
    },
    {
        id:"quickSort",
        name:"Quick Sort",
        timeComplexity:"n*log(n)",
        spaceComplexity:"log(n)",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
    },
    {
        id:"countingSort",
        name:"Counting Sort",
        timeComplexity:"n+k",
        spaceComplexity:"k",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
    },
    {
        id:"radixSort",
        name:"Radix Sort",
        timeComplexity:"nk",
        spaceComplexity:"n+k",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim at risus efficitur, eu euismod sem posuere. In tortor justo, elementum a tortor at, cursus egestas lorem. Nunc eu pretium elit. Nulla consequat porttitor ex. Nullam dapibus ac orci quis dignissim. Sed et gravida lorem. Cras suscipit purus vitae urna tempus condimentum. In fringilla congue dignissim."
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

//for mergeSort and quickSort
function range(from,to) {
    return [...Array(to-from).keys()].map(i => i + from);
}

function copytoSteps(inMemoryArray,newArray,leftBound,rightBound){
    let indexRange = range(leftBound,rightBound)
    for(var i = 0;i<indexRange.length;i++){
        inMemoryArray[indexRange[i]] = newArray[i]
    }
}

//TODO: find a better way to visualize mergeSort and quickSort
//for mergeSort
var mergeSortSteps = []
var arrayMemoryMS = []

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

function mergeSort(randomArray,leftBound,rightBound) {
    if (randomArray.length > 1){//keep splitting until size 1
        let midpoint = Math.ceil([...randomArray].length/2) //Get the midpoint, if uneven, get the rounded up midpoint
        //if not sorted
        const firstHalf = mergeSort(randomArray.slice(0,midpoint),leftBound,midpoint+leftBound)
        const secondHalf = mergeSort(randomArray.slice(midpoint,randomArray.length),midpoint+leftBound,rightBound)
        randomArray = mergeSortMerge(firstHalf,secondHalf)
    }

    copytoSteps(arrayMemoryMS,randomArray,leftBound,rightBound)
    mergeSortSteps.push([...arrayMemoryMS])
    return randomArray
}

function mergeSortHandler(randomArray){
    arrayMemoryMS = randomArray
    mergeSort(randomArray,0,randomArray.length)
    return mergeSortSteps
}

//for quickSort
var quickSortSteps = []
var arrayMemoryQS = []
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

function quickSort(randomArray,leftBound,rightBound) {
    if(randomArray!=undefined&&randomArray.length > 1){
        const partitionValue = randomArray.pop()
        const halves = getHalves(partitionValue,randomArray)
        const leftHalfSorted = quickSort(halves[0],leftBound,leftBound + halves[0].length)
        const rightHalfSorted= quickSort(halves[1],leftBound + halves[0].length,rightBound)
        randomArray = mergeArrays(leftHalfSorted,partitionValue,rightHalfSorted)
    }

    copytoSteps(arrayMemoryQS,randomArray,leftBound,rightBound)
    quickSortSteps.push([...arrayMemoryQS])
    return randomArray
}

function quickSortHandler(randomArray){
    arrayMemoryQS = randomArray
    quickSort(randomArray,0,randomArray.length)
    return quickSortSteps
}

export {sortingAlgoList,bubbleSort,countingSort,heapSort,insertionSort,radixSort,selectionSort,mergeSortHandler,quickSortHandler}